import React from 'react';

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={className}      
      onClick={onClick}
    >
      <i className="fa fa-angle-right"></i>
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={className}      
      onClick={onClick}
    >
      <i className="fa fa-angle-left"></i>
    </button>
  );
};

export { NextArrow, PrevArrow };