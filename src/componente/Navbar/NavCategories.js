import React from "react";
import { NavLink} from "react-router-dom";

 const NavCategories = () =>{
    const categories = [
        {id:1, name:"Electronics", route:"/categories/electronics"},
        {id:2, name:"Jewelery", route:"/categories/jewelery"},
        {id:3, name:"Men's clothing", route:"/categories/men's clothing"},
        {id:4, name:"Women's clothing", route:"/categories/women's clothing"},
    ];

    return(
        <nav style={style.nav}>
            {categories.map((category)=>{
                return(
                    <NavLink style={style.links} to={category.route} key={category.id}>{category.name} </NavLink>
                );
            })}
        </nav>
    );
 };

 export default NavCategories;
 
const style={
    nav:{
        display:"flex",
        flexDirection:'row',
       

    },
    links: {
    
        paddingLeft:" 1.5em",
        color:"red",
        fontSize:"1.1em"
                
         },
 }
 