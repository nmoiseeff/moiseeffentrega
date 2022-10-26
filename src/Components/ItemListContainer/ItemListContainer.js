import { useState, useEffect } from 'react'
//import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../services/firebase';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true);
    //const [products, loadingProducts, errorProducts] = useGetProducts();

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        const collectionRef = collection(db, 'products');
        getDocs(collectionRef)
            .then((response) => {
                console.log('response', response);
                const productsAdapter = response.docs.map(doc => {
                    const data = doc.data();
                    return {id: doc.id, ...data};
                } )
                setProducts(productsAdapter);
            })
            .finally(()=>{setLoading(false)});

       
    }, [categoryId])

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    // if(products.length === 0) {
    //     return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    // }

    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            {/* <button onClick={(e) => console.log(e)}>boton</button> */}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer

