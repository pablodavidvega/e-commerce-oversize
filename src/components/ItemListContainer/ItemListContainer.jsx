import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './item-list-container.css';

const ItemListContainer = ({ vision }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((results) => setItems(results.products));
      return;
    }

    fetch(`https://dummyjson.com/products/category/${id}`)
      .then((res) => res.json())
      .then((results) => setItems(results.products));
  }, [id]);

  return (
    <div className='item-list-container'>
      <h2>{vision}</h2>
      <div className='container-item-list'>
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
