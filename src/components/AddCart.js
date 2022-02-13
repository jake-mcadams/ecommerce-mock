import React from 'react';
import '../styles/components/AddCart.css'
import cart from '../images/icon-cart-white.svg'

const AddCart=(props)=>{
    return (
        <div id='addcart__container'>
            <img src={cart} alt="" id="addcart__cart_image" />
            <div id="addcart__add_text">
                Add to AddCart
            </div>
        </div>
    )
}

export default AddCart;