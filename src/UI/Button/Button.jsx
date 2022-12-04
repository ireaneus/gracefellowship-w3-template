import React from 'react';

export default function Button(props) {
  return (
    <button
      type={props.type}
      className="w3-bar-item w3-button w3-wide w3-round-large"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
