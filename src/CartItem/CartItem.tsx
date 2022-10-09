// Types
import { FruitType } from '../App';
// Styles
import './CartItem.css';

type Props = {
    item: FruitType;
  }

  var emoji = require('node-emoji');

  function calculateItemPrice(item : FruitType) : number {
    // total without discounts (base case - one item)
    var total = item.quantity * item.price;
    if ( item.quantity >= 2) {
        switch(item.name) {
            case "Grapes":
                // apply BOGO discount on grapes
                var odd = item.quantity % 2;
                total = ((item.quantity-odd) * 0.5 * item.price) + (odd * item.price);
                break;
            case "Apples":
                // apply 20% off discount on apples
                total = total - ( total * 0.2 );
                break;
            case "Peaches": // no discounts on peaches
                break;
        }
    }
    return total;
  }

  const CartItem: React.FC<Props> = ({ item }) => (
    <div className='container'>
        <div className='container-child title'>
            <h3>{emoji.get(item.icon)} {item.name}</h3>
            <div className='product-quantity'>Quantity: {item.quantity}</div>
        </div>
        <div className='container-child price'>
            <p>${item.discountedPrice = calculateItemPrice(item)}</p>
            <br></br>
            <p>${item.price}/ea</p>
        </div>
    </div>
  );
  
  export default CartItem;