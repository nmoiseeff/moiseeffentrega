import { useState, useEffect } from "react"

const Effect = () => {
    const [title, setTitle] = useState('Primer titulo')
    const [count, setCount] = useState(0)

    const handleClick = () => console.log('hice click')

    useEffect(() => {
        console.log('agrego event listener')
        const boton = document.getElementById('boton')

        boton.addEventListener('click', handleClick)

        return () => {
            console.log('se va a desmontar el componente')
            console.log('se elimina event listener')
            boton.removeEventListener('click', handleClick)
        }

    }, [])

    console.log('Se hace render')

    return (
        <div>
            <h1>{title}</h1>
            <h1>{count}</h1>
            <button onClick={() => setTitle('Cambio el titulo')}>Cambiar Titulo</button>
            <button onClick={() => setCount(count + 1)}>Sumar</button>
            <button id="boton">Boton</button>
        </div>

    )
}

export default Effect