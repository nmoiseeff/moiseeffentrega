import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';
import Avatar from './Components/Avatar/Avatar';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import MercadoLibre from './Components/MercadoLibre/MercadoLibre';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './notification/Notification';

function App() {

  // const [page, setPage] = useState('list')

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar/>
          </header>
          <Routes>
          <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<h1>CART</h1>} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
