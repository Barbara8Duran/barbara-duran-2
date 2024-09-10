import './Navbar.css'
import React, {useState} from "react"


export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false) 
    return(
        <>
            <nav>
                <div className='menu' onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Nosotros</a></li>
                    <li><a href='#'>Productos</a></li>
                    <li><a href='#'>Contactos</a></li>
                    <li><a href='#'>Carrito</a></li>
                </ul>

            </nav>
        </>)
}