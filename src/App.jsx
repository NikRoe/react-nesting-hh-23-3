import React from 'react';
import './App.css';
import Animal from './components/Animal';

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" description="Very cute dog" />
      <Animal emoji="🐈" name="Mittens" description="A playful kitten" />
      <Animal emoji="🐢" name="Archibald" description="Super relaxed turtle" />
      <Animal emoji="🐣" name="Chick Norris" description="A nested chick" />
    </main>
  );
}
