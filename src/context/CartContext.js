import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>  {
  const  [cartListItems, setCarlistItems] = useState([])
 
  const addProductCart = (producto) => {
    //asignamos una variable para ver si esta en el carrito y buscamos por id si coincide el id del producto agregado con alguno en el cart
    let inCart = cartListItems.find(productoEnCarrito => productoEnCarrito.id === producto.id)
    if(!inCart){
      //si no esta en el carrito lo agregamos de esta manera para que se sume a los ya agregados
      setCarlistItems(cartListItems => [...cartListItems, producto]);
      console.log("producto agregado desde context: ", producto)
      console.log("productos en context: ",cartListItems)
    }else{
      alert("ya esta en carrito")
    }
    
  }
  const data =  {
      cartListItems,
      addProductCart
  }
  return (
    <CartContext.Provider value={data}>
      {children}  
    </CartContext.Provider>
  )
}

export default CartContext;
export { CartProvider };