import CartItem from '../CartItem/CartItem';
import Button from '@mui/material/Button';
// Types
import { FruitType } from '../App';
// Styles
import './Cart.css';

type Props = {
  cartItems: FruitType[];
  updateCart: ( numOfItems: number ) => void;
};

const Cart: React.FC<Props> = ({ cartItems, updateCart }) => {

    return (
        <div className='cart-container'>
            <div className='cart-header'>
                <h1>Your Shopping Cart</h1>
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    className='btn'
                    onClick={() => updateCart(cartItems.length)}
                    > Update cart
                </Button>
            </div>
            <div className='cart-contents'>
                {cartItems.length === 0 ? <p>Your cart is currently empty</p> : <p>You have {cartItems.length} items in your cart</p>}
                {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item} 
                />
                ))}
            </div>
        </div>
    );
};

export default Cart;