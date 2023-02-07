import React from 'react'
import Alert from '@mui/material/Alert';

const ItemListContainer = ({greeting}) => {
    return(
        <main>
        <Alert severity="success">{greeting}</Alert>
        </main>
    )
} 
export default ItemListContainer