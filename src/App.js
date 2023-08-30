import React from 'react';
import Navbar from './componente/Navbar/Navbar';
import ItemListContainer from './componente/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componente/ItemDetailContainer/ItemDetailContainer';
import Cart from './componente/Cart';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { CustomProvider } from './context/CustomContext';
import Formulario from './componente/ItemListContainer/Formulario';



function App() {
  const greeting= "Bienvenido a Ingresado al Sitio Correctamente ";
  const stock="10";
  return (
    <>
      <BrowserRouter>
      <CustomProvider>
        <Navbar/>
          <Routes>

            <Route path='/Proyecto-Final-React' element={<ItemListContainer greeting={greeting} />}/>

            <Route 
             path='/categories/:name'
             element={<ItemListContainer greeting={greeting}/>}
           />
    
            <Route 
            path='/product/:id'
            element={<ItemDetailContainer stock={stock}/>} 
            />

            <Route path='/cart' element={<Cart/>} />
            <Route path='/form' element={<Formulario/>} />
          
   
          </Routes>
          </CustomProvider> 
       </BrowserRouter> 
    </>
  )  
          
         
}

export default App;


 