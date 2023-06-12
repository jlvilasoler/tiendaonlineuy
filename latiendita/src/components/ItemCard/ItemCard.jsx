import React from "react";
import Clicker from "../ItemListContainer/Clicker";


const ItemCard = ({ foto , articulo , descripcion , marca , precio}) => {
  return (
    <div className="col-3 m-1">
      <img src={foto} alt={articulo} />
      <h2>{articulo}</h2>
      <h3>{descripcion}</h3>
      <p>{marca}</p>
      <p>${precio}</p>
      <Clicker />
    </div>
  );
};

export default ItemCard;
