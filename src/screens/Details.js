import React from 'react';
import FoodCrewLink from "../components/FoodCrewLink";
import HomeImg from "../assets/images/home.png";
import MenuImg from "../assets/images/menu.png";

const Details = () => {
  return (
    <div className='details-wrapper'>
    <FoodCrewLink to="/"/>
    <div className='details'>
      <p>
        <span className='highlight'>Hi, and welcome</span> to <strong>*your*</strong> FoodCrew takehome. We're psyched that you want be a part of FoodCrew.
      </p>

      <p> 
        This Replit has a basic React app set up for you - you'll add a couple features and routes. We've provided some mockups which you should try to replicate, but it doesn't have to be <i>perfect</i>. We expect this task to take from 1-4 hours depending on experience. 
      </p>
      
      <p> 
        When you're done, just let us know via email and we'll hide the Repl - or if your technical interview is near, just wait for that. We'll give feedback on this exercise, and we'd love your feedback on it as well when you're done!
      </p>

      <h3>The Task</h3>
      
      <p>
        The scenario: your company has the skeleton of a React webapp, TrainView, which is used by anonymous London citizens when they are bored on the train to view different food options that could exist. You company needs you to expand the skeleton to actually show the foods. The app should be mobile-first and responsive for desktop, given that train riders are usually on phones but not always.
      </p>

      <p>
        Create two routes - the home page and the details page. The /details route should show this details content, while the / route should look like the mockups. Switch between routes by clicking the FoodCrew logo, which should be a link.
      </p>
      
      <p>
        The home screen should look like the below mockup. It displays the user's name and a menu drawer. For name, get the first_name 
        from this <a href="https://reqres.in/api/users/1">Fake User API</a> (first_name field).
      </p>
      <img src={HomeImg} alt="Home" height="500px"/>
      
      
      <p>The menu drawer should look like the below mockup. It shows lists of *four values* for three different food items: food, desserts, and beer. You can switch between them by clicking selector pills. The selected pill should have a slightly gray background, while the nonselected pills should blend with the drawer background.
      </p>
      <img src={MenuImg} alt="Menu" height="500px"/>

      <p> 
      For food: <a 
        target="_blank" rel="noopener" href="https://random-data-api.com/api/food/random_food:" >
          Random Food API
        </a>. Fields: dish, description.
      </p>

      <p> 
      For dessert: <a href="https://random-data-api.com/api/food/random_food:" >Random Food API</a>. Fields: dish, description.
      </p>
      
      <p>
      For dessert: <a 
      href="https://random-data-api.com/api/dessert/random_dessert:" >Random Dessert API</a>. Fields: variety, flavor
      </p>
      
      <p>
      For beer: <a 
      href="https://random-data-api.com/api/dessert/random_beer:" >Random Beer API</a>. Fields: name, style
      </p>

      <p>
      Email button should email <strong>dallinromney@gmail.com</strong>
      </p>

  </div>
  </div>
  )
}

export default Details;