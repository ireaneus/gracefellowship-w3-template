import React from 'react';
import { title, subtitle } from '../../App';
import Button from '../../UI/Button/Button';

export default function Navbar(props) {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-theme w3-wide w3-padding w3-card">
        <Button>
          <a href="#home">
            {title} {subtitle}
          </a>
        </Button>

        <div className="w3-right w3-hide-small">
          <Button>
            <a href="#sermons">Sermons</a>
          </Button>
          <Button>
            <a href="#about">About</a>
          </Button>
          <Button>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
