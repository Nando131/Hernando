import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

function MyComponent({ name, age, isLoggedIn, hobbies, address }) {
  return (
    <div>
      <p>Hello, {name}!</p>
      <p>You are {age} years old.</p>
      {isLoggedIn ? <p>You are logged in.</p> : null}
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <p>Address:</p>
      <p>Street: {address.street}</p>
      <p>City: {address.city}</p>
    </div>
  );
}

ReactDOM.render(
  <MyComponent
    name="Alice"
    age={30}
    isLoggedIn={true}
    hobbies={['Reading', 'Coding', 'Hiking']}
    address={{ street: '123 Main St', city: 'Anytown' }}
  />,
  document.getElementById('root')
);