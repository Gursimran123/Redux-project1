import React, {useState, useEffect} from 'react'
import {add} from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import {STATUSES} from '../store/productSlice';

const Products = () => {

  const dispatch=useDispatch()
  const {data:products, status}=useSelector((state)=>state.product)
  // const [products,setProducts]= useState([]);

  useEffect(()=>{
    dispatch(fetchProducts())

    // const fetchProduct= async () =>{
    //   const res= await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // }
    // fetchProduct();
  },[])

  const handleAdd =(product) =>{
     dispatch(add(product))
  }

  if(status===STATUSES.LOADING){
    return <h2>Loading...</h2>
  }

  if(status===STATUSES.ERROR){
    return <h2>Something Went Wrong!!</h2>
  }
  return (
    <div className='productWrapper'>
      {products.map(product =>(
        <div className='card' key={product.id}>
          <img src={product.image} alt="" />
          <h3>{product.title}</h3>
          <h4>${product.price}</h4>
          <button onClick={()=> handleAdd(product)} className='btn'>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Products