import React from 'react';
import '../assets/css/components/onProcess.css';
import Platos from './weapons';
import data from './data';
const list = () => {
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

export default list;