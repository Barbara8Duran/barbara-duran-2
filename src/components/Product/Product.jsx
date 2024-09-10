import './Product.css'
import { ShoppingCart,Star  } from 'lucide-react';


export default function Product(){
    return(
    <>
    <section id="product1" className="section-p1">
        
        <div className="pro-container">
            <div className="pro">
                <img src="/f1.jpg" alt="" />
                <div className="des">
                    <span>Cara</span>
                    <h5>Floral T-Shirts</h5>
                    <div class="star">
                        <i><Star /></i>
                        <i><Star /></i>
                        <i><Star /></i>
                        <i><Star /></i>
                        <i><Star /></i>
                    </div>
                    <h4>$780</h4>
                </div>
                <div className="cart">
                    <a href="#"><ShoppingCart /></a>
                </div>
            </div>
        </div>
    </section> 
    </>)
}