import React from 'react';
import '../assets/css/components/onProcess.css';
import {Link} from 'react-router-dom'
import Platos from './weapons';
import data from './data';
import { CartProvider } from 'react-use-cart';
const onProcess = () => {
    return ( <>
          <section className='text-center  mt-3 py-4 container'>   
          <div className='row justify-content-center'>
            {data.productData.map((item,index)=>
            {
              return(<Platos 
                img={item.img}  
                title={item.title}
                 price={item.price} 
                 key={index} 
                 item={item}/>)
            })} 
            </div>  
  </section> 
    </>
   )
};


export default onProcess;