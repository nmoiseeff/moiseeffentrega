import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'


const Navbar = () => {
    const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(collectionRef).then(response => {
      console.log(response)

      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data}
      })

      setCategories(categoriesAdapted)
    })
  }, [])

  console.log(categories)

    return (
        <nav className="NavBar" style={{ display: 'flex', justifyContent: 'space-around', flexDirection: "row", backgroundColor: "#282c34", color: "white", height: "18vmin", alignContent: "baseline" }}>
            <div>
                <Link to= "/"><h1 className='Back'>e-commerce</h1>
                <Avatar/></Link>
            </div>
                 <div className="Categories">
                 { categories.map(cat => (
                <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><Button label={cat.label}/> </NavLink>
            ))}
                 {/*<NavLink to='/category/celular' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><Button label={"Celulares"} /></NavLink>
                 <NavLink to='/category/tablet' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><Button label={"Tablets"} /></NavLink>
    <NavLink to='/category/notebook' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><Button label={"Notebooks"} /></NavLink>*/}
          </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar