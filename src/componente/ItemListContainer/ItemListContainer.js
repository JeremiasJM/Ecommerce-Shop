import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {useParams} from "react-router-dom";

 
 

const ItemListContainer = () => {
  const [products, setProducts] = useState ([]);
  const [error, setError] = useState(false)
  const { name } =useParams();
  const URL = name ? `https://fakestoreapi.com/products/category/${name}`:`https://fakestoreapi.com/products/`;
 
  useEffect(()=>{
    
    const getProducts = async () =>{

      try{const res = await fetch(URL)
      const data = await res.json();
      setProducts(data);
    }
    catch{
      setError(true);
    }
    }
   
    getProducts();

  }, [name]);

    return(
        <>
          
        
         
         {!error ? ( 
          <>
            {products.length ? ( 

            <ItemList products={products}  />

             ) :(  
              <Box style={style.carga} sx={{ width: '100%' }}>
               <LinearProgress />
               <LinearProgress />
               <LinearProgress />
              </Box>
              
             )}
          </>
             ):(
              <h1 style={style.color}>error;</h1>
             )}
          
          
       
        </>
    )
} 
export default ItemListContainer

const style={
  carga:{
  margin:"15em 0 15em 0" 
},
}