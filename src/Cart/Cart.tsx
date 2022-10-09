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
//   const calculateCartTotal = (items: FruitType[]) =>
//     items.reduce((ack: number, item) => ack + item.quantity * item.price, 0);
    var emoji = require('node-emoji');

    return (
        <div className='cart-container'>
            <div className='cart-header'>
                <h2>Your Shopping Cart</h2>
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    className='btn'
                    onClick={() => updateCart(cartItems.length)}
                    > Update cart
                </Button>
            </div>
            {cartItems.length === 0 ? <p>There are no items in your cart.</p> : <p>You have {cartItems.length} items in your cart</p>}
            {cartItems.map(item => (
            <CartItem
                key={item.id}
                item={item} 
            />
            ))}
        </div>
    );
};

export default Cart;