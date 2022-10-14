import './App.css';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemListContainer from './components/Main/ItemListContainer';
import NavBar from './components/Header/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form/Form';
import Cart from './components/Cart/Cart';
import CartContextProvider from './contexts/CartContextProvider';

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <div className="App">
                    <header>
                        <NavBar />
                    </header>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ItemListContainer greeting="Gracias por entrar a mi pagina!!!" />
                            }
                        />
                        <Route
                            path="/category/:categoryName"
                            element={
                                <ItemListContainer greeting="Gracias por entrar a mi pagina!!!" />
                            }
                        />
                        <Route
                            path="/item/:itemId"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/form" element={<Form />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;
