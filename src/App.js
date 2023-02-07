import React from 'react';
import Navbar from './componente/Navbar';
import ItemListContainer from './componente/ItemListContainer';


function App() {
  const greeting= "Bienvenido a Ingresado al Sitio Correctamente ";
  return (
    <>
     <Navbar/>
     <ItemListContainer greeting={greeting} />

    </>
  )  
          
         
}

export default App;
