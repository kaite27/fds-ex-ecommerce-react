import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCategory() {
  return (
    <ul class="list-group">
      <Link to="/" class="list-group-item list-group-item-action list-all">
        All
      </Link>
      <Link to="/" class="list-group-item list-group-item-action list-dress">
        Dress
      </Link>
      <Link to="/" class="list-group-item list-group-item-action list-coat">
        Coat
      </Link>
      <Link to="/" class="list-group-item list-group-item-action list-shoes">
        Shoes
      </Link>
      <Link to="/" class="list-group-item list-group-item-action list-bags">
        Bags
      </Link>
      <Link to="/" class="list-group-item list-group-item-action list-shirts">
        Shirts
      </Link>
    </ul>
  );
}