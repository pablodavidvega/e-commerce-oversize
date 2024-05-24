import ItemCount from '../ItemCount/ItemCount';
import './item-detail.css';

const ItemDetail = ({ detail }) => {
  return (
    <div className='item-detail'>
      <div className='container-item-detail'>
        <img src={detail.images[0]} alt='' />
        <div className='paragraph-detail'>
          <h2> {detail.title}</h2>
          <p> {detail.description}</p>
          <p> Precio: {detail.price}</p>
          <p>Categoria: {detail.category}</p>
          <p>lasificacion: {detail.rating}</p>
          <p>Marca: {detail.brand}</p>
          <ItemCount initial={1} stock={detail.stock} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
