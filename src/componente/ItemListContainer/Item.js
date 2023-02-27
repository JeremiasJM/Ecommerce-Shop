import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const item= ({product}) =>{
    return(
       <div style={style.card}>

           <img style={style.img}  src={product.image} alt={product.title} />   
            
           <h3 style={style.h3}>{product.title} </h3>
            <p style={style.p}>Precio: ${product.price} </p>
          
       <Link to={`/product/${product.id} `} >
       <Button style={style.button} variant="outlined">Ver detalle</Button>
       </Link>
        

       </div>
    )
}

export default item;

const style={
    card:{
        width:'20em',
        height:'auto',
        margin:'3em',       
        display:"flex",
        flexDirection:'column',  
        justifyContent: 'space-between',             
        
    },
   
    img:{
        width:'20em',
        height:'17em',          
        display:"flex",       
        AlingItems:'space-between',
        
    },
    h3:{
        textAlign: 'center',
        margin:'.5em',
    },
    p:{
        textAlign: 'center',
        margin:'.5em',
    },
    button:{
        width:"100%",
    },
    
}