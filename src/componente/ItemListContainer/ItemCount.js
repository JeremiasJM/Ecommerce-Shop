import React, { useState, useEffect} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemCount = ({stock} ) => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        stock = stock - count;
    },[count] );
   

    const handlerAdd = () =>{
        setCount(count + 1);        
    };
    const handlerSubtract = () =>{
        setCount(count - 1);        
    };
    const onAdd = () =>{
        if( stock > count){
            console.log("Si hay stock");
            
            
        }else{
           console.log("no hay stock");
        }
        setCount(0); 
    };
return (
    <>
    <div style={style.conteiner}>
    <button  style={style.conteiner2} >

    <Button onClick={handlerSubtract} >  <RemoveIcon/> </Button>
        <h1 style={style.h1} > {count} </h1>
    <Button  onClick={handlerAdd} > < AddIcon/> </Button>

    </button>
    <Button variant="contained" onClick={onAdd}>Agregar Carrito</Button>
    </div>
    </>

)
};
export default ItemCount;

const style={
    h1:{
        color:"black",
        marginTop:".5em",
    },
    conteiner:{
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        AlingItems: 'center',
        width:"180px",
      

    },
    conteiner2:{
        display: "flex",
        flexDirection: 'row',   
        justifyContent: 'center',
        AlingItems: 'center',     
        color:"black",

    },
}