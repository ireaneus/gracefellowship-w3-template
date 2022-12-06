import React from 'react';
import { getBooks } from '../../sermons.js';

const bibleImgUrl = [
  './images/purpleflowerbible.jpg',
  './images/flowerbible.jpg',
  './images/genesis.jpg',
  './images/job.jpg',
  './images/luke.jpg',
  './images/oldtestament.jpg',
  './images/pewbible.jpg',
  './images/psalms.jpg',
  './images/redpenbible.jpg',
  './images/ringsbible.jpg',
];
function randomNum() {
  return Math.floor(Math.random() * bibleImgUrl.length);
}

export default function Sermons(props) {
  let books = getBooks();

  return (
    <div
      className="w3-content w3-padding"
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <div className="w3-container w3-padding-32" id="sermons">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16 w3-center">
          Sermon Books of the Bible and Topics
        </h3>
      </div>
      <div className="w3-row-padding">
        {books.map((book) => (
          <div className="w3-col l3 w3-margin w3-card" key={book.id}>
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                {book.name}
              </div>
              <img
                src={bibleImgUrl[randomNum()]}
                alt="{book.name}"
                height="200px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
