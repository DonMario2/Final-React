
import NavBar from './components/NavBar'
import '../src/App.css'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="app-container">
      <NavBar posicion="titulo-superior" />
      <ItemListContainer greeting={"Bienvenido cliente"} />
    </div>
  )
}

export default App
