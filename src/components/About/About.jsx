import React from 'react';

export default function About() {
  return (
    <>
      <div className="w3-container w3-padding-32">
        <h3
          className="w3-border-bottom w3-border-light-grey w3-padding-32"
          id="about"
        >
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
        <div className="w3-col m6 w3-margin-bottom">
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
        <div className="w3-col m6 w3-margin-bottom">
          <img
            src="/images/Pastor_2.jpg"
            height={311}
            alt="Grace Fellowship of Mountain Home Idaho - Resurrected"
          />
          <h3>About Pastor Jack Hurley</h3>
          <p className="w3-opacity">
            Pastor at Grace Fellowship from 1993-2004
            <br />
            Pastor Jack went to be with the Lord suddenly in February 2004.
          </p>

          <p>
            Following his twenty year career in the Air Force with a tour in the
            Viet Nam as a RF-4C pilot, pastor Jack Hurley retired from Mountain
            Home AFB.&nbsp;&nbsp;After retirement, he attended and graduated
            from Trinity Evangelical Divinity School in Deerfield, IL with a
            Master of Divinity degree.&nbsp;&nbsp;While at seminary, he pastored
            a small church in a neighboring town.
          </p>

          <p>
            Upon graduation, he accepted a call to Grace Evangelical Church in
            Ship Bottom, New Jersey, pastoring that church for 8 1/2
            years.&nbsp;&nbsp;From there he moved to Phoenix, Arizona where he
            ministered to small churches in the outlying mining towns for three
            years.&nbsp;&nbsp;In December of 1993, Pastor Hurley returned to
            Mountain Home and began Calvary Chapel, which is now called Grace
            Fellowship.&nbsp;&nbsp;Starting with three couples, our church has
            grown to its present size.
          </p>

          <p>
            Pastor Hurley believes in the return to biblical worship of our
            sovereign God and teaching through the books of the Bible verse by
            verse.&nbsp;&nbsp;One of his primary concerns is to see the people
            and families of our church grow in Christian maturity and unity
            through a living and active relationship with the Lord and with each
            other.
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
