import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ user }) => {
  return (
    <div className="card-body">
      <div className="content">
        <img src={user.avatar} className="avatar" />
        <div className="content2">
        <p>
          {user.first_name} {user.last_name}
        </p>
        <p>{user.email}</p>
        </div>
       
      </div>
    </div>
  );
};

export default Card;
