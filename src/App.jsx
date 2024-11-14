import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'


function  App () {
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

 

export default App;


