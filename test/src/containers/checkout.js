import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { addToItem, cleanState } from '../actions';
import Cart from '../components/cart';

import './style.scss';

const Checkout = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(state => [ ...state.shoppingCart ]);
  return <div>
    <Cart shoppingCart={shoppingCart} onClick={(amiibo) => dispatch(addToItem(amiibo))} />
    { shoppingCart.length > 0 && <div className="flex">
      <Button variant="success" onClick={() => dispatch(cleanState())}>Comprar</Button>
      <Button variant="danger" onClick={() => dispatch(cleanState())}>Cancelar</Button>
    </div> }
  </div>
}

export default Checkout;