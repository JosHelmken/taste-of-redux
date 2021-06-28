import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

// store 

// action 
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// reducer 
const counter = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;

  }
};

let store = createStore(counter);

// console.log
store.subscribe(() => console.log(store.getState()))

// dispatch 
store.dispatch('increment');
store.dispatch('decrement');

ReactDOM.render(
    <App />,  document.getElementById('root')
);

reportWebVitals();
