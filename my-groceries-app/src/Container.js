import React, { Component } from 'react';
import GroceryList from './components/GroceryList';
import ShoppingCart from './components/ShoppingCart';

const Container = () => {



  

  return (
    <main>
      <GroceryList
        items={shoppingList}
      />
      <ShoppingCart />
    </main>
  );
 
};

export default Container;