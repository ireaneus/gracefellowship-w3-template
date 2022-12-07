import React from 'react';

export default function About() {
  return (
    <>
      <div className="w3-container w3-padding-32" id="about">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          About
        </h3>
        <p>
          Grace Fellowship of Mountain Home is a body of believers in Jesus
          Christ who are joined together for the worship, service, prayer,
          fellowship, discipleship, evangelism and for the observance of the
          ordinances of baptism and the Lord's supper as set forth in the Bible.
        </p>
      </div>

      <div className="w3-row-padding w3-grayscale">
        <div className="w3-col l3 m6 w3-margin-bottom">
          <img
            src="/images/churchus.jpg"
            height={211}
            alt="Grace Fellowship of Mountain Home Idaho - Resurrected"
          />
          <h3>About our Church</h3>
          <p className="w3-opacity">
            Come and enjoy the worship of God with us at Grace Fellowship and
            the warm fellowship of our members as we worship our Lord Jesus
            Christ in song, in prayer and in the Word of God.&nbsp;&nbsp;How you
            dress and what you give is of secondary importance to
            us.&nbsp;&nbsp;But there is one thing we do ask you to do.
          </p>

          <p className="w3-center">PLEASE BRING YOUR BIBLE!</p>
          <p className="scripture w3-center">
            Let us hold fast the confession of our hope without wavering, for He
            who promised is faithful; and let us consider how to stimulate one
            another to love and good deeds, not forsaken our own assembling
            together, as is the habit of some, but encouraging one another; and
            all the more, as you see the day drawing near.
          </p>
          <p className="w3-center">Hebrews 10:23-25</p>
          <p>
            <button className="w3-button w3-light-grey w3-block">
              Contact
            </button>
          </p>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <img src="" alt="Jane" />
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
          <img src="" alt="Mike" />
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
