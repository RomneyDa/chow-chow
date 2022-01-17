import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { getName } from './apis';

// Pages
import Home from './screens/Home';
import Details from './screens/Details';

// Styles
import './App.css';

// App component
const App = () => {

  // User name is part of the app state
  // so that it doesn't get changed every time the home component rerenders
  const [userName, setName] = useState("");

  // On first render get a random user name
  useEffect(async () => {
    const newName = await getName();
    setName(newName);
  }, []);

  return (
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<Home name={userName}/>} />
            <Route path="/details" element={<Details/>} />
          </Routes>
        </Fragment>
      </Router>
  );
}

export default App;
