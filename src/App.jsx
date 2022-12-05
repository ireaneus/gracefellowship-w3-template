import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sermons from './components/Sermons/Sermons';

export const title = 'Grace Fellowship';
export const subtitle = 'of Mountain Home Idaho';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Sermons />
    </>
  );
}

export default App;
