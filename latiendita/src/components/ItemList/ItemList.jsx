
import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({items}) => {

    return (
        <div className="container">
        {
        items.map((producto) => <ItemCard key={producto.id} {...producto}/>)
        }
        </div>
    )
}


export default ItemList