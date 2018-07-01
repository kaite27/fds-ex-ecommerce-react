import React from 'react';

export default function ProductCategory({ onCategory = category => {} }) {
  return (
    <ul className="list-group">
      <button
        className="list-group-item list-group-item-action list-all"
        onClick={e => onCategory('')}
      >
        All
      </button>
      <button
        className="list-group-item list-group-item-action list-dress"
        onClick={e => onCategory('Dress')}
      >
        Dress
      </button>
      <button
        className="list-group-item list-group-item-action list-coat"
        onClick={e => onCategory('Coat')}
      >
        Coat
      </button>
      <button
        className="list-group-item list-group-item-action list-shoes"
        onClick={e => onCategory('Shoes')}
      >
        Shoes
      </button>
      <button
        className="list-group-item list-group-item-action list-bags"
        onClick={e => onCategory('Bags')}
      >
        Bags
      </button>
      <button
        className="list-group-item list-group-item-action list-shirts"
        onClick={e => onCategory('Shirts')}
      >
        Shirts
      </button>
    </ul>
  );
}
