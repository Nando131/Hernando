import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';

function MyComponent({ stringProp, numberProp, booleanProp, arrayProp, objectProp }) {
  return (
    <div>
      <p>String Prop: {stringProp}</p>
      <p>Number Prop: {numberProp}</p>
      <p>Boolean Prop: {booleanProp ? 'True' : 'False'}</p>
      <p>Array Prop:</p>
      <ul>
        {arrayProp.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Object Prop:</p>
      <p>Name: {objectProp.name}</p>
      <p>Age: {objectProp.age}</p>
    </div>
  );
}


