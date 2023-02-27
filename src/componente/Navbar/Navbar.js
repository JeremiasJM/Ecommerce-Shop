import React from  'react'
import logo from  "./assents/logo.png"
import Input from '@mui/material/Input'
import NavCategories from './NavCategories'
import CardWiget from '../Navbar/CardWiget';
import { Link } from 'react-router-dom';





const Navbar = () => {
    return (
     <header style={style.container}> 
        <div style={style.container1}>
        <Link to={'/'}>
            <img style={style.img} src={logo}  alt="logo tienda" />
        </Link>
            <Input style={style.input} type="search" fullWidth={true} placeholder="Ingrese el Producto" > </Input>   
            
            <div style={style.btn}>
                <button><Link style={style.texto} to="/Cuenta">Cuenta</Link></button>
                
                <Link to="/cart" style={style.cart}>                                            
                        <CardWiget/>                        
                </Link>
             </div>              
        </div>

         <div style={style.container2}>         
                                    
            <NavCategories/>                
            
        </div>
      </header>  
    )
}

const style = {
    container:{
        display:"flex",
        flexDirection: 'column',
        
       
    },
    container1:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap:"1em",
        AlingItems: 'center',
        width: '100%',
        height:'10vh',
        padding: '.5em 15em',
        background:' red',
        
    },
    img :{              
        width: 'auto',
        height:"88px"
       
        
    },
    input:{
        background:' white',
        margin: ' 1em 0 1em 2em',
    },   
    btn : {
        display: "flex",
        justifyContent: 'center',
        AlingItems: 'center',
        width:'20%',
        
    },
    texto :{
        color:"white",
        padding:'0 2em',
        
    },    
    cart:{
        width:"30%",
        display:"flex",
        justifyContent: "center",
    }, 
    
     
     container2:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alingItems: 'center',        
        width: '100%',
        padding: '.5em 10em',
    },
        
}

export default Navbar