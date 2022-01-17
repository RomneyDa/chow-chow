import React from 'react';
import {Link} from 'react-router-dom'
import logo from "../assets/images/foodcrew-logo.png";

const FoodCrewLink = (props) => {
  const {to} = props;

  return (
    <div className="foodcrew-link">
      <Link to={to}>
        <img src={logo} />
      </Link>
    </div>
  );
}

export default FoodCrewLink;
