import React from 'react';

export default function ProductCategory({ onCategory = category => {} }) {
  return (
    <ul className="list-group">
      <button
        className="list-group-item list-group-item-action"
        onClick={e => onCategory('')}
      >
        All
      </button>
      <button
        className="list-group-item list-group-item-action"
        onClick={e => onCategory('Dress')}
      >
        Dress
      </button>
      <button
        className="list-group-item list-group-item-action"
        onClick={e => onCategory('Coat')}
      >
        Coat
      </button>
      <button
        className="list-group-item list-group-item-action"
        onClick={e => onCategory('Shoes')}
      >
        Shoes
      </button>
      <button
        className="list-group-item list-group-item-action"
        onClick={e => onCategory('Bags')}
      >
        Bags
      </button>
      <button
        className="list-group-item list-group-item-action"
        onClick={e => onCategory('Shirts')}
      >
        Shirts
      </button>
      <button
        className="list-group-item list-group-item-action"
        onClick={e => onCategory('Accessories')}
      >
        Accessories
      </button>
    </ul>
  );
}
