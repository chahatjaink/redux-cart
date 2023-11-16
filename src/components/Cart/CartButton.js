import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const cart=useSelector(state=> state.cart.items)
  const dispatch= useDispatch()
  const handleToggle=()=>{
    dispatch(cartActions.toggle())
  }

  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.length}</span>
    </button>
  );
};

export default CartButton;
