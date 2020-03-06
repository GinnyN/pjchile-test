import React from 'react';
import { Media, Button, Container } from 'react-bootstrap';

const Cart = ({ shoppingCart, onClick, onRemove }) => {
  return <Container>
    {shoppingCart.length === 0 ? <h3> Agregue Contenido al carrito</h3> : shoppingCart.map((item) =>
    <Media>
      <img
        width={64}
        className="mr-3"
        src={item.amiibo.image}
        alt={item.amiibo.name}
      />
      <Media.Body>
        <h5>{item.amiibo.name} | Personaje: {item.amiibo.character}</h5>
        <p> <Button onClick={() => onClick({ amiibo: { tail: item.amiibo.tail }, edit: -1 })}> - </Button> {item.total} <Button onClick={() => onClick({ amiibo: { tail: item.amiibo.tail }, edit: 1 })}> + </Button> 
        <Button variant="danger" onClick={() => onRemove({ amiibo: { tail: item.amiibo.tail }, edit: 1 })}> X </Button></p>
      </Media.Body>
    </Media>)}
  </Container>
}

export default Cart;