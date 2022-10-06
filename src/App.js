import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
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
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
