import { Icons } from '@/lib/shared/icons';
import React, { useState } from 'react';
import CartIcon from './components/cart-icon/cart-icon';
import SearchIcon from './components/search-icon/search-icon';

export default function Buttons() {
  return (
    <div className="flex items-center">
      <SearchIcon />
      <CartIcon />
    </div>
  );
}
