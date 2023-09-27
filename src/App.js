import React from 'react';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { StateContext } from './context/StateContext';

const App = () => {
  return (
    <StateContext>
      <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
    </StateContext>
  );
};

export default App;