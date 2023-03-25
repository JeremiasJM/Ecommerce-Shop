import React, {useContext} from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CustomContext } from '../../context/CustomContext';


const CardWiget  = () => {
  const {totals} = useContext(CustomContext)
    return (
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={totals.qty > 0 && <p>{totals.qty}</p>} style={stlye.white}>
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