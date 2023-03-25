import React, {useContext} from "react";
import {CustomContext} from "../context/CustomContext";
import {Link} from "react-router-dom";
import "../componente/cart.css";
import Formulario from "./ItemListContainer/Formulario";

const Cart = () => {
  const { cart, totals } = useContext(CustomContext);

  return (
    <>
      {!cart.length ? (
        <>
        <div className="conteiner">
         <h1>
          No hay productos agregados, puedes verlos <Link className="link" to={"/"}>"Haciendo Click aqui"</Link>
         </h1>
         <h2>Gracias Por Su Visita</h2>
         </div>
        </>
      ) : (
        <>
        <div className="conteiner2">
          <div>
            {cart.map((product) => {
              return (
                <div key={product.id} className="conteiner3">
                  <img src={product.image} alt="" />
                  <h1 >{product.title}</h1>
                  <h2>Precio:${product.price}</h2>
                  <h2>Cantidad: {product.quantity}</h2>
                </div>
              );
            })}
          </div>
          <h3>Total : {totals.total}</h3>
          <Link className="fc" to={"/form"}  > Comprar </Link>
        
          </div>
        </>
      )}
    </>
  );
};


export default Cart;