import React from 'react';
import { title, subtitle } from '../../App';

const churchImgUrl = [
  '/images/Church300.jpg',
  '/images/churchus.jpg',
  '/images/Pastor_2.jpg',
];

function churchNum() {
  return Math.floor(Math.random() * churchImgUrl.length);
}

export default function Header() {
  console.log(churchImgUrl);
  return (
    <header className="w3-display-container w3-wide" id="home">
      <img src={churchImgUrl[churchNum()]} alt={churchImgUrl} height="500px" />
      <div className="w3-display-middle w3-margin-top w3-center">
        <h1 className="w3-large w3-text-white">
          <span className="w3-padding w3-theme-d4 w3-opacity-min">
            <b>{title}</b>
          </span>
          <span className="w3-hide-small w3-text-light-grey">{subtitle}</span>
        </h1>
      </div>
    </header>
  );
}
