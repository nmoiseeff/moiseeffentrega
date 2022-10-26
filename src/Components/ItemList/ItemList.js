import Button from "../Button/Button"
import { Link } from "react-router-dom"
import Counter from "../Counter/Counter"
import "./ItemList.css"
import { useState, useEffect } from "react"
import Item from '../Item/Item'


{/*const ItemList = ({ products }) => {
    return (
        <ul style={{display: 'flex', flexDirection: 'column'}} className={true ? 'una-clase' : 'otra-clase'}>
            { products.map(product => 
            <li key={product.id}>
                <h1>{product.name}</h1>
                <h1>$ {product.price}</h1>
                <h1>{product.category}</h1> 
                <h1>{product.stock}</h1> 
                <link to={`/detail/${product.id}`} key={product.id}><Button label={"Ver detalles"} /></link>  
            </li>) }

            { false ? <h1>hola</h1> : <h1>chau</h1>}
        </ul>
    )
}

const ItemList = ({ products }) => {
    return (
        <ul className= "ItemList">
            { products.map(product => <div className= "Card" key={product.id}><img className= "ItemImg" src= {product.img} alt='Nico'/><div className="container"><h1>{product.name}</h1><h2>$ {product.price}</h2><Link to={`/detail/${product.id}`}><Button label= {"Ver detalles"}/></Link><Counter/></div></div>
            ) }
            
        </ul>
    )
}
const ItemList = ({ product }) => {

    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares')
            .then(response => {
                return response.json() 
            }).then(res => {
                setProducts(res.results.slice(0, 10))
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    console.log(products)

    const handleSearch = () => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response => {
                return response.json() 
            }).then(res => {
                setProducts(res.results.slice(0, 10))
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        
        <div>
            <h1>Conocé nuestros productos</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleSearch}>Buscar</button>
            <ul className= "ItemList">
            {products.map(product => <div className= "Card" key={product.id}>
                    <img className= "ItemImg" src={product.thumbnail} alt={product.title}/>
                    <div className="container">
                    <h3>{product.title}</h3>
                    <h3>$ {product.price}</h3>
                    <Link to={`/detail/${product.id}`}><Button label= {"Ver detalles"}/></Link><Counter/>
                    </div></div>)}</ul>
        </div>
    )
}*/}


const ItemList = ({products }) => {
    return(
        <div className='ListGroup' onClick={() => console.log('hice click en itemlist')}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>    
    )
}


export default ItemList