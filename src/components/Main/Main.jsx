import Product from "../Product/Product";
import './Main.css'


export default function Main(){
    return(
    <>
        <main>
        <h2>Productos destacados</h2>
        <p>Nueva Colección de Verano</p>
           <div className="products">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
           </div>

        </main>
    </>)
}