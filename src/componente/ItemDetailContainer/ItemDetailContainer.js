import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";
import {db} from './../../firebase/firebase';
import {doc, collection,getDoc} from "firebase/firestore";

const ItemDetailContainer = ()=>{
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const URL =`https://fakestoreapi.com/products/${id}`;

     useEffect(()=>{
        const productsCollection= collection(db,"products");
        const refDoc=doc(productsCollection,id);
        getDoc(refDoc).then(
            (data)=>{
                setProduct({
                    id:data.id,
                    ...data.data(),
                });             
            }
        )
        .finally(()=>{
            setLoading(false);
        })
     });

    return(
        <>
        {<>{loading ? <LinearProgress /> : <ItemDetail product={product} />}</>}
        </>          
    )
}

export default ItemDetailContainer;