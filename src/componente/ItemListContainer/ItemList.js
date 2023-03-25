import React from "react";
import Item from "./Item";

const ItemList =({products} ) => {
    return(
        <div style={style.conteiner}>
        {products.map((product)=>{
            return <Item key={product.id} product={product} />
        })}
        
        </div>
    )
}
export default ItemList;

const style ={
    conteiner:{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:'space-evenly',
        margin:'3em',

    },
}
