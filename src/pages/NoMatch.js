import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';

const NoMatch = () => (
  <div className="noMatch">
    <FaRegSadTear />
    <h1>Not Found</h1>
    <div>Please try other URL.</div>
  </div>
);

export default NoMatch;