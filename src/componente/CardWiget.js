import React from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CardWiget  = () => {
    return (
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={1} style={stlye.white}>
            <ShoppingCartIcon  />
          </StyledBadge>
        </IconButton>
      );
}
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      color :'white', 
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
    
  }));
const stlye = {
    white:{
        color: 'white',
    },
    
}

export default CardWiget