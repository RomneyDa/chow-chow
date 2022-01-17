import React  from 'react';
import FoodCrewLink from "../components/FoodCrewLink";
import BottomDrawer from "../components/BottomDrawer"

const Home = ({name}) => {
  return (
    <div className="home">

      <FoodCrewLink to="/details"/>

      <div className="welcome-name ">
        <p>Welcome back,</p>
        <p>{name}</p>
      </div>

      <BottomDrawer/>
    </div>
  );
}

export default Home;