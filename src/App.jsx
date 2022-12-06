import React from 'react';
import About from './components/About/About';
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
      <About />
    </>
  );
}

export default App;
