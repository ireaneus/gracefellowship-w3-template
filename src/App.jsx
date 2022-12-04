import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

export const title = 'Grace Fellowship';
export const subtitle = 'of Mountain Home Idaho';

function App() {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
}

export default App;
