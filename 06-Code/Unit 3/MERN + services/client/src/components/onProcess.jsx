import React from 'react';
import '../assets/css/components/onProcess.css';
import { CartProvider } from 'react-use-cart';
import Lista from './list';
import Orden from './order';
const onProcess = () => {
    return (
        <>
          <CartProvider>
          <Lista/>
          <Orden/>
          </CartProvider>
        </>
      );
};


export default onProcess;