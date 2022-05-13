import React from 'react';

const Chatbox = (props) => (
  <ul>
    {props.items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export default Chatbox;
