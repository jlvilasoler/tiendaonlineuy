import React from "react";
import Header from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {

  const clickear = () => console.log()

  return (

      <div>
        <Header />

        <Intro mensaje="No te muevas de tu casa, elegi los productos y te los llevamos... "/>
        <ItemListContainer/>

        <Footer/>
        <ToastContainer />
      </div>

  )
}

export default App


