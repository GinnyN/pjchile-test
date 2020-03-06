import React from 'react';
import { Media } from 'react-bootstrap';
import moment from 'moment';

const Card = ({ amiibo, onClick }) => (
  <Media>
    <img
      width={64}
      className="mr-3"
      src={amiibo.image}
      alt={amiibo.name}
    />
    <Media.Body>
      <h5>{amiibo.name}</h5>
      <p>Personaje: {amiibo.character}</p>
      <p>Serie de Juegos: {amiibo.gameSeries}</p>
      <p>Colección de Amiibos: {amiibo.amiiboSeries} </p>
      <p>Lanzamiento: (JP) {moment(amiibo.release.jp).format('DD-MM-YYYY')} - (NA) {moment(amiibo.release.na).format('DD-MM-YYYY')}</p>
      <p>
        <button type="button" onClick={onClick}>Agregar</button>
      </p>
    </Media.Body>
  </Media>
);

export default Card;