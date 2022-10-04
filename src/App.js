import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <ItemListContainer greeting="Saludos! Gracias por entrar a mi pagina!!!" />
            <ItemDetailContainer id={3} />
        </div>
    );
}

export default App;
