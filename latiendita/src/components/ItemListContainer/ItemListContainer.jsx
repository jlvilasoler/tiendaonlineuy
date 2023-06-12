import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getData } from "../Helpers/GetData";
import "/src/components/ItemListContainer/ItemListContainer.scss"
import ItemList from "../ItemList/ItemList";



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <ItemList items={productos}/>

    </div>
  );
};

export default ItemListContainer;