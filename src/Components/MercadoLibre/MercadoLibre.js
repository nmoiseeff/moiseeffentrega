import { useState, useEffect } from "react"

const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares')
            .then(response => {
                return response.json() /*.then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })*/
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
                return response.json() /*.then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })*/
            }).then(res => {
                setProducts(res.results.slice(0, 10))
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>MercadoLibre</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleSearch}>Buscar</button>
            {products.map(product => <div key={product.id}>
                    <img src={product.thumbnail} alt={product.title}/>
                    <h3>{product.title}</h3>
                    <h3>$ {product.price}</h3>
                    </div>)}
        </div>
    )
}

export default MercadoLibre