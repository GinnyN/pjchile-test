import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

import List from './containers/list';
import Checkout from './containers/checkout';
import NavbarCustom from './components/navbar';
import Cart from './components/cart';
import { addToItem, removeItem } from './actions';
import './App.scss';

function App() {
  const shoppingCart = useSelector(state => [ ...state.shoppingCart ]);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  return (
    <Router>
      <NavbarCustom brand="Lista de Amiibos" />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div><Link to={'/'} className="nav-link"> List </Link></div>
        <div><Button variant="link" onClick={() => setShow(true)} >Shopping Cart ({shoppingCart.length})</Button></div>
        <div>
          
        </div>
      </nav>
      <hr />
      <Switch>
        <Route exact path='/' component={List} />
        <Route exact path='/cart' component={Checkout} />
      </Switch>
      <Modal show={show} handleClose={() => setShow(false)} >
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Cart shoppingCart={shoppingCart} onClick={(amiibo) => dispatch(addToItem(amiibo))} onRemove={(amiibo) => dispatch(removeItem(amiibo))} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
          <Link to={'/cart'} className="link"> <Button variant="primary" onClick={() => setShow(false)}> Ir a Checkout </Button> </Link>
        </Modal.Footer>
      </Modal>
    </Router>
  );
}

export default App;
