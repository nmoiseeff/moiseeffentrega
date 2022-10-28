import Button from "../Button/Button"
import { Link } from "react-router-dom"
import Counter from "../Counter/Counter"
import "./ItemList.css"
import { useState, useEffect } from "react"
import Item from '../Item/Item'

const ItemList = ({products }) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>    
    )
}


export default ItemList