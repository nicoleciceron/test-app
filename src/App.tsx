import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Cart/Cart';

export type FruitType = {
  id: number;
  icon: string;
  name: string;
  price: number;
  quantity: number;
  discountedPrice: number;
};

// JSON object that will act as input(cart contents)
const fruits = [
  { id: 1, icon: 'peach', name: "Peaches", price: 7, quantity: 1, discountedPrice: 0 },
  { id: 2, icon: 'grapes', name: "Grapes", price: 5, quantity: 2, discountedPrice: 0 },
  { id: 3, icon: 'apple', name: "Apples", price: 3, quantity: 2, discountedPrice: 0}, 
];

function App() {
  const [cart, setCart] = useState([] as FruitType[]);
  const [cartETotal, setCartETotal] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  function handleUpdateCart() {
    var items:Array<FruitType>=[] 
    
    fruits.forEach(item => {
      if (item.quantity > 0)
        items.push(item);
    });

    setCart(items);
  }

  function updateCartETotal(total: number) {
    setCartETotal(total);
  }

  function updateCartSubTotal(total: number) {
    setCartSubTotal(total);
  }
  
  useEffect(() => {
    const etotal = cart.reduce<number>((accumulator, current) => {
      console.log(current.discountedPrice);
      return accumulator + current.discountedPrice;
    },0);

    const subtotal = cart.reduce<number>((accumulator, current) => {
      return (accumulator + (current.price * current.quantity));
    },0);
    
    updateCartSubTotal(subtotal);
    updateCartETotal(etotal);
  }, [cart]);

  return (
    <div className='app-container'>
      <div className='child cart'>
        <Cart
          cartItems={cart}
          updateCart={handleUpdateCart}   
        />
      </div> 
      <div className='child total'>
        <h1>Cart Summary</h1>
        <hr />
        <div className='total-div'>
          <h3> Subtotal: </h3>
          <h3> ${cartSubTotal.toFixed(2)}</h3>
        </div>
        <div className='total-div'>
          <h4> Total Discounts: </h4>
          <h4> ${(cartSubTotal - cartETotal).toFixed(2)} </h4>
        </div>
        <hr />
        <div className='total-div'>
          <h3 className='total'>Estimated Total: </h3>
          <h3 className='total text'>${cartETotal.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
