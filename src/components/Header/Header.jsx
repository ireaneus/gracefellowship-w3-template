import React from 'react';
import { title, subtitle } from '../../App';

export default function Header(props) {
  return (
    <header
      className="w3-display-container w3-wide"
      sx={{ maxWidth: 1200 }}
      id="home"
    >
      <img
        src="./pexels-tammy-johnson-breininger-4438788.jpg"
        alt="image"
        width="600"
        height="800"
      />
      <div className="w3-display-middle w3-margin-top w3-center">
        <h1 className="w3-large w3-text-white">
          <span className="w3-padding w3-theme-d4 w3-opacity-min">
            <b>{title}</b>
          </span>
          <span className="w3-hide-small w3-text-light-grey"> {subtitle}</span>
        </h1>
      </div>
    </header>
  );
}
