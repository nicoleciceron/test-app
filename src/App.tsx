import { Button } from '@mui/material';
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
  { id: 1, icon: 'grapes', name: "Grapes", price: 5, quantity: 7, discountedPrice: 0 },
  { id: 2, icon: 'apple', name: "Apples", price: 3, quantity: 7, discountedPrice: 0}, 
  { id: 3, icon: 'peach', name: "Peaches", price: 7, quantity: 7, discountedPrice: 0 }
];

function App() {
  const [cart, setCart] = useState([] as FruitType[]);
  const [cartTotal, setCartTotal] = useState(0);

  function handleUpdateCart() {
    var items:Array<FruitType>=[] 
    
    fruits.forEach(item => {
      if (item.quantity > 0)
        items.push(item);
    });

    setCart(items);
  }

  function updateCartTotal(total: number) {
    setCartTotal(total);
  }
  
  useEffect(() => {
    const total = cart.reduce<number>((accumulator, current) => {
      console.log(current.discountedPrice);
      return accumulator + current.discountedPrice;
    },0);
    
    updateCartTotal(total);
    console.log(total);
  }, [cart]);

  return (
    <div>
      <Cart
        cartItems={cart}
        updateCart={handleUpdateCart}   
      />
      <h2 className='total'>Total: ${cartTotal}</h2>
    </div>  
  );
}

export default App;
