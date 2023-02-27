import React, {useState, useEffect} from "react";

const ComponenteDeEstados = () => {
    const [count, setCount] = useState(0);
   
    useEffect(()=>{
        
    })
 
    

    const handlerAdd = () =>{
        setCount(count + 1);        
    };
    const handlerSubtract = () =>{
        setCount(count - 1);        
    };
    const handlerReset = () =>{
        setCount(0);        
    };
    return (
     <>
      <button style={style.conteiner}  onClick={handlerSubtract}> Restar</button>
      <input style={style.conteiner}> {count} </input>
      <button style={style.conteiner}  onClick={handlerAdd}> Sumar</button>
      
      <button style={style.conteiner}  onClick={handlerReset}> Reset</button>
     </>
    )
    
};

export default ComponenteDeEstados;

const style={
    conteiner:{
        color:"black",
    },
}