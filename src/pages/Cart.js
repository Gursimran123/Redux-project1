import React from 'react';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice'

const Cart = () => {
  const dispatch=useDispatch();
  const products=useSelector((state)=>state.cart)
  const handleRemove=(productId)=>{
    dispatch(remove(productId));
  }
  return (
    <div className='cart'>
    <h3>Cart</h3>
    <div className="cartWrapper">
      {products.map((product)=>(
        <div key={product.id} className="cartCard">
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Cart