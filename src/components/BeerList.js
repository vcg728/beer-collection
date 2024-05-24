import React, { useState, useEffect } from 'react';
import BeerItem from './BeerItem';

const BeerList = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/beers`)
      .then(response => response.json())
      .then(data => setBeers(data));
  }, []);

  return (
    <div id="beer-list">
      {beers.map(beer => (
        <BeerItem key={beer._id} beer={beer} />
      ))}
    </div>
  );
};

export default BeerList;
