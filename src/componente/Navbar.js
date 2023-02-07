import React from  'react'
import logo from  "../assents/logo.png"
import MenuIcon from '@mui/icons-material/Menu'
import Input from '@mui/material/Input'

import CardWiget from './CardWiget';





const Navbar = () => {
    return (
     <div style={style.container}> 
        <div style={style.container1}>
        
            <img style={style.img} src={logo} alt="logo tienda" />
            <Input style={style.input} type="search" fullWidth={true} placeholder="Ingrese el Producto" > </Input>   
            
            <div style={style.btn}>
                <button><a style={style.texto} href="">Cuenta</a></button>
                <button >
                        
                        <CardWiget/>
                        
                </button>
             </div> 
             
        </div>

         <div style={style.container2}>
            
            <button style={style.btn2}>
                <MenuIcon style={style.MenuIcon}/>
               <p style={style.p}>Categorias</p>                
            </button>
            
            <ul style={style.links}>
                <li><a style={style.texto2} href="">Promociones</a></li>
                <li><a style={style.texto2} href="">Catalogo</a></li>
                <li><a style={style.texto2} href="">Sucursales</a></li>
                <li><a style={style.texto2} href="">Club Libertad</a></li>
            </ul>
             
        </div>
      </div>  
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
        AlingItems: 'center',
        width: '100%',
        height:'10vh',
        padding: '.5em 15em',
        background:' red',
        
    },
    img :{              
        width: '15%',
        height: '8vh',
        borderRadius : '50%',
    },
    input:{
        background:' white',
        margin: ' 1em 0 1em 2em',
    },   
    btn : {
        display: "flex",
        justifyContent: 'center',
        AlingItems: 'center',
        width:'auto',
        
    },
    texto :{
        color:"white",
        padding:'0 2em',
        
    },    
    btn_carrito:{        
        cursor: 'pointer',
                   
    },
    btn_icon_carrito:{
        marginTop: '15', 
    },   
     container2:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alingItems: 'center',        
        width: '100%',
        padding: '.5em 10em',
    },
    links: {
        display:"flex",
        justifyContent: 'center',
        AlingItems: 'center',
        
    },
    btn2:{
        display:"flex",
        justifyContent:'center',
        AlingItems:'center',        
        cursor:  'pointer',
        color:"black",
    }, 
    MenuIcon:{
        color: 'red',

    },
    texto2 :{
        color:"black",
        padding:'0 2em',
        
    },
    p:{
        paddingTop:'.15em',
        marginLeft:'1em',
        marginRight:'1em',
        color: 'red',
    }
}

export default Navbar