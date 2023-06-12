import "/src/components/CardWidGet/CardWidGet.scss"
import { useState } from "react"
const CardWidget = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div className="CardWidget">
        <a className="CardWidget_icono" href="#"> 🛒{counter} </a>
        </div>
)
}


export default CardWidget