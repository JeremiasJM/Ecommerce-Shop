import React, { useState} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemCount = ({onAdd, stock=25} ) => {
    const [count, setCount] = useState(1);

    const handlerClickAdd = ()=>{
        if(count < stock ){
            setCount(count+ 1);
        };
    }

    const handlerClickSubtract =()=>{
        if(count>1) {
        setCount(count-1);
    }
    };       

return (
    <>
    <div style={style.conteiner}>
    <button  style={style.conteiner2} >

    <Button onClick={()=> handlerClickSubtract()} >  <RemoveIcon/> </Button>
        <h1 style={style.h1} > {count} </h1>
    <Button  onClick={() =>handlerClickAdd() }> < AddIcon/> </Button>

    </button>
    <Button variant="contained" onClick={()=>onAdd(count)}>Agregar Carrito</Button>
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