import React from 'react';

const BeerItem = ({ beer }) => (
  <div className="beer-item">
    <img src={beer.imageUrl} alt={beer.name} />
    <h3>{beer.name}</h3>
    <p>Rating: {'★'.repeat(beer.rating)}</p>
  </div>
);

export default BeerItem;
