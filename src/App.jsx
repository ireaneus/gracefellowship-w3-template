import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

export const title = 'Grace Fellowship';
export const subtitle = 'of Mountain Home Idaho';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
