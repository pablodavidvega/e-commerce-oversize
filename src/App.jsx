import './App.css'
import NavBar from './components/NavBar/NavBar' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer vision = {"En Oversize, nuestra visión es redefinir la moda para todas las formas y tamaños, celebrando la diversidad de cada individuo y promoviendo la confianza en uno mismo a través de nuestra línea de ropa ancha. Nos esforzamos por ser líderes en el mercado de moda inclusiva, ofreciendo una amplia gama de prendas de alta calidad que son modernas, cómodas y están diseñadas para adaptarse y realzar la belleza de cada cuerpo."} />
    </>
  )
}

export default App
