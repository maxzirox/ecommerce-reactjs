import  CartContext  from '../../context/CartContext';
import { useContext } from 'react';
import React, { useState } from "react";
// agrego por props el producto
const ItemCount = ({stock, initial, actualizar, conteo}) => {
  //aqui traigo la funcion addProductToCart desde el contexto para utilizarla en onAdd
  const { addProductCart } = useContext(CartContext);
  const [count, setCount] = useState(initial);

  function stockSelec(selected) {
     let ss;
     return ss +=  selected
  }

  const decremento = () => {
    if (conteo > 0) {
      actualizar(conteo - 1);
    }
  };
  const incremento = () => {
    if (conteo < stock) {
      actualizar(conteo + 1);

    }
  };
    const onAdd = () => {
      console.log(" Se agrego el Producto la cantidad de " + conteo);
      //aqui agregamos la funcion addProduct y le pasamos el producto que trajimos por props
      
      return stockSelec(conteo);
    };
stockSelec();
  return (
    <>
      <div className="card-actions justify-between items-center mt-5">
        <div className="flex w-100 items-center">
          <button className="btn btn-neutro font-bold text-white" onClick={decremento}>
            -
          </button>
          <input type="text" className="w-10 text-accent text-center  font-semibold focus:outline-none" pattern="[0-9]*\.?[0-9]*" value={conteo} />

          <button className="btn btn-neutro font-bold text-white" onClick={incremento}>
            +
          </button>
        </div>
        <button className="btn btn-primary text-white" onClick={onAdd}>
          Agregar al Carrito
        </button>
      </div>
    </>
  );
};


export default ItemCount;

