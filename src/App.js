import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <ItemListContainer greeting="Saludos! Gracias por entrar a mi pagina!!!" />
        </div>
    );
}

export default App;
