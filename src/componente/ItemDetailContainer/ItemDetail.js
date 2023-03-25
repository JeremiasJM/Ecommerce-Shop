import React, { useContext, useState } from "react";
import Button from '@mui/material/Button';
import ItemCount from "../ItemListContainer/ItemCount"
import { Link } from "react-router-dom";
import { CustomContext } from "../../context/CustomContext";


const ItemDetail =({product} )=>{
    const[isPressedButton, setIsPressedButton] = useState(false);
    const {addProduct} = useContext(CustomContext);

    const onAdd=(count)=>{
        setIsPressedButton(true);
        addProduct(product,count);
    }

    return(
        <div style={style.conteiner}>
            
          <div style={style.card}>

              <img style={style.img}  src={product.image} alt={product.title} />  
           <div style={style.conteiner1}>
            
              <h3 style={style.h3}>{product.title} </h3>
              
              <p style={style.p}>{product.description} </p>
              <p style={style.p}>Precio: ${product.price} </p>

              {isPressedButton ?(
                <Link to="/cart">
                    <Button style={style.button} variant="outlined">Comprar</Button>
                </Link>
              ) :(
                <div style={style.itemCount}>
                 <ItemCount onAdd={onAdd}/>
                 </div>
              )}


             
              
        
           
           </div> 

         </div>
       </div>
    )
}

export default ItemDetail;

const style={
    conteiner:{
        display:"flex",
        justifyContent:"center",
        
        width:"100%",
    },
    card:{
        width:'80em',
        height:'auto',
        marginTop:"5em",      
        display:"flex",
        flexDirection:'row',  
        justifyContent: 'space-between',   
        padding:".5em",   
        border:"solid black",                              
        
    },
   
    img:{
        width:'20em',
        height:'25em',
          
        display:"flex",       
        AlingItems:'space-between',
        
    },
    conteiner1:{
        width:"50%",
        display:"flex",
        flexDirection:'column',  
        justifyContent: 'space-between',  

    },
    h3:{
        textAlign: 'center',
        margin:'.5em',
        fontSize:"1.8em",
    },
    p:{
        textAlign: 'center',
        margin:'.5em',
    },
    itemCount:{
        display:"flex",
        justifyContent:"center",
       
    },
    
    
}