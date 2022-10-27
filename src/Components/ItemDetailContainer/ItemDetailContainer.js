import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const data = doc.data()

            const productAdapted = { id: doc.id, ...data} 

            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
      
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} setCart={setCart}/>
        </div>
    )
}

export default ItemDetailContainer