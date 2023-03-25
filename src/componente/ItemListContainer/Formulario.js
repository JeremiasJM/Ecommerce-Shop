import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { CustomContext } from "../../context/CustomContext";
import { db } from "../../firebase/firebase";
import "./formulario.css";

const Formulario = ( ) => {
  const {cart,totals, clear} = useContext(CustomContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [result, setResult]= useState("");
  


  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection("sell")
      .add({
        nombre,
        apellido,
        correo,
        direccion,
        telefono,
        
      })
      .then(() => {
        alert("Los datos se han guardado correctamente");
      })
      .catch((error) => {
        alert("Ha ocurrido un error al guardar los datos");
        console.error(error);
      });
  };
  const handlerClickSell =()=>{
    const sellCollection = collection(db,"sell");
    addDoc(sellCollection,{
      nombre,
      apellido,
      correo,
      direccion,
      telefono,
      items: cart,
      total: totals.total,
      time: serverTimestamp(),
            
    })
    .then((result)=>{
      const resultado= result.id;
      setResult(resultado)
    })
    
    clear(); 
    setMostrarMensaje(true);
  
  }
  


 

  return (
    <div className="conteiner">
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />

      <label htmlFor="apellido">Apellido:</label>
      <input
        type="text"
        id="apellido"
        value={apellido}
        onChange={(event) => setApellido(event.target.value)}
      />

      <label htmlFor="correo">Correo:</label>
      <input
        type="email"
        id="correo"
        value={correo}
        onChange={(event) => setCorreo(event.target.value)}
      />

      <label htmlFor="direccion">Dirección:</label>
      <input
        type="text"
        id="direccion"
        value={direccion}
        onChange={(event) => setDireccion(event.target.value)}
      />

      <label htmlFor="telefono">Teléfono:</label>
      <input
        type="tel"
        id="telefono"
        value={telefono}
        onChange={(event) => setTelefono(event.target.value)}
      />

      <button type="submit"  onClick={handlerClickSell} >Finalizar Compra</button>
    </form>
    {mostrarMensaje && <h1 className="resultid" >Muchas gracias por su compra, su codigo de compra es = {result} </h1> }
    </div>
  );
};

export default Formulario;