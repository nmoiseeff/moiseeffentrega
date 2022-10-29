import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";
import { NotificationContext } from "../../notification/Notification";
import "./Checkout.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const { cart, total, clearCart } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);
  const [formData, setFormData] = useState(null);
  const [ordenLista, setOrdenLista] = useState(false);

  const handleFormData = (values) => {
    setFormData(values);
    setOrdenLista(true);
  };

  const createOrder = async () => {
    const objOrder = {
      buyer: formData,
      // {
      //     name: 'Compania Argentina de Transformadores',
      //     phone: '123456789',
      //     email: 'contact@catsa.com.ar'
      // },
      items: cart,
      total,
    };
    console.log("orden", objOrder);
    setLoading(true);
    try {
      setNotification("success", `Orden generada`);

      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );
      const { docs } = productsAddedFromFirestore;

      const batch = writeBatch(db);
      const outOfStock = [];

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        console.log(`El id de su orden es: ${orderAdded.id}`);
        clearCart();
      } else {
        console.log("Hay productos fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h3>Generando orden...</h3>;
  }

  return (
    <>
      <div>
        <h3>Checkout</h3>
        <CheckoutForm handleData={handleFormData} />
        <button
          className={({ ordenLista }) =>
            ordenLista ? "Option" : "OptionDisabled"
          }
          onClick={createOrder}
          disabled={!ordenLista}>
           <h2>Crear orden</h2>
        </button>
      </div>
    </>
  );
};

export default Checkout;
