import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/Storecontext'
import { assets } from '../../assets/assets'
const Cart = () => {
  const {getTotalCartAmount,cartItems,food_list,removeFromCart,removeCompleteItem,addToCart}=useContext(StoreContext)
  return (
    <div className='cart'> 
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Add/Remove/Delete</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return (
              <>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p>
                  <span className='increase' >
                    <img onClick={()=>addToCart(item._id)} src={assets.add_icon_green} alt="" />
                  </span> 
                  <span className='slash'>  /  </span>
                  <span className='decrease' >
                    <img onClick={()=>removeFromCart(item._id)} src={assets.remove_icon_red} alt="" />
                  </span>
                  <span className='slash'> / </span>
                  <span className='delete'>
                    <img  onClick={()=>removeCompleteItem(item._id)} src={assets.delete_from_cart} alt="" />
                  </span>
                  </p>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
