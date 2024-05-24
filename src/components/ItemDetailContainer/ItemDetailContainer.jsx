import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [detail, setDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });
  }, [id]);

  return <div>{detail && <ItemDetail detail={detail} />}</div>;
}

export default ItemDetailContainer;
