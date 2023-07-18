import React from 'react';
const DeletButton = ({onDelete}) => {
  return (
    <>
      <img className="deletebutton" src="Vector.png" alt="No Vector-img" onClick={onDelete} ></img>
    </>
  );
};

export default DeletButton;
