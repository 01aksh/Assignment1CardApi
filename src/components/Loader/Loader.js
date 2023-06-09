import React from "react";
import './Loader.css'
const Loader = () => {
  return (
    <>
      <div className="spinner-wrapper">
        <div className="spinner">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
