import React from 'react';
import { getBooks } from '../../sermons.js';

const bibleImgUrl = [
  '/images/pexels-tammy-johnson-breininger-4438788.jpg',
];
function sermonNum() {
  return Math.floor(Math.random() * bibleImgUrl.length);
}

export default function Sermons() {
  let books = getBooks();

  return (
    <div className="w3-padding">
      <div className="w3-container w3-padding-32" id="sermons">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16 w3-center">
          Sermon Books of the Bible and Topics
        </h3>
      </div>
      <div>
        {books.map((book) => (
          <div className="w3-col l3 w3-margin w3-card" key={book.id}>
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                {book.name}
              </div>
              <img
                src={bibleImgUrl}
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
