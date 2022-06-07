import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos  from "../../utils/productos-mock";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetailConatiner = () => {

  const {id} = useParams();

  const [producto, setproduct] = useState({})
  const navegador = useNavigate();
  
  useEffect(() => {
    if (filtroProducto === undefined) {
      navegador('/404')
    }
    setproduct(filtroProducto);
  })


  const filtroProducto = productos.find((producto) => {
    return producto.id == id;
  });


  // const getItem = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (productos) {
  //         resolve(productos);
  //       } else {
  //         reject("error en llamada de la API");
  //       }
  //     }, 2000);
  //   });
  // };

  // useEffect(() => {
  //   getItem()
  //   .then((response) => {
  //     // console.log("mi respuesta", response.tamano);
  //     setproduct(response)

  //   });
  // });

  return (
    <>
      <ItemDetail data={producto}/>
    </>
  );
};

export default ItemDetailConatiner;
