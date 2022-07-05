import ItemCount from "../Items/ItemCount";
import  CartContext  from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({ data, ptamano }) => {
  const { addProductCart } = useContext(CartContext);
  const item = data;
  const onAdd = (e) => {
    e.preventDefault()
    addProductCart({...data})
    
  };
  return (
    <>
      <div class="flex w-full">
        <div class="grid w-1/2 flex-grow card bg-base-300 rounded-box place-items-center">
          <img src={data.imagen} alt={data.titulo} />
        </div>

        <div class="grid w-2/3 flex-grow card rounded-box text-left pl-10">
          <h1 className="text-2xl font-extrabold">{data.titulo}</h1>
          <p>{data.descripcion}</p>
          <price> {data.precio_final}</price>
          <ItemCount stock={data.stock} initial={1} producto={item}/>
          {ptamano}
          <button variant="outlined" onClick={onAdd}>agregar</button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail