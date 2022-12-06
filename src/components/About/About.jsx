import React from 'react';

export default function About() {
  return (
    <>
      <div className="w3-container w3-padding-32" id="about">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          About
        </h3>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
      </div>

      <div className="w3-row-padding w3-grayscale">
        <div className="w3-col l3 m6 w3-margin-bottom">
          <img src="/w3images/team2.jpg" alt="John" />
          <h3>John Doe</h3>
          <p className="w3-opacity">CEO & Founder</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p>
            <button className="w3-button w3-light-grey w3-block">
              Contact
            </button>
          </p>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <img src="/w3images/team1.jpg" alt="Jane" />
          <h3>Jane Doe</h3>
          <p className="w3-opacity">Architect</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p>
            <button className="w3-button w3-light-grey w3-block">
              Contact
            </button>
          </p>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <img src="/w3images/team3.jpg" alt="Mike" />
          <h3>Mike Ross</h3>
          <p className="w3-opacity">Architect</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <p>
            <button className="w3-button w3-light-grey w3-block">
              Contact
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
