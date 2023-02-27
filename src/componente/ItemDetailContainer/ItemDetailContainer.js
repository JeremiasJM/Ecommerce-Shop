import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const URL =`https://fakestoreapi.com/products/${id}`;

    useEffect(() => {
        const getProduct= async () => {
            try{
                const res= await fetch(URL);
                const data= await res.json();
                setProduct(data);
            }finally{
                setLoading(false);
            }
        };

        getProduct();
    },[id]);
    return(
        <>
        {<>{loading ? <LinearProgress /> : <ItemDetail product={product} />}</>}
        </>          
    )
}

export default ItemDetailContainer;