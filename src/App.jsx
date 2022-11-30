import React from 'react';

const title = 'Grace Fellowship';
const subtitle = 'of Mountain Home, Idaho';

function App() {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-theme w3-wide w3-padding w3-card">
        <a
          href="#home"
          className="w3-bar-item w3-button w3-hover-slategray w3-round-large"
        >
          {title} {subtitle}
        </a>

        <div className="w3-right w3-hide-small">
          <a
            href="#projects"
            className="w3-bar-item w3-button w3-hover-slategray w3-round-large"
          >
            Sermons
          </a>
          <a
            href="#about"
            className="w3-bar-item w3-button w3-hover-slategray w3-round-large"
          >
            About
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button w3-hover-slategray w3-round-large"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
