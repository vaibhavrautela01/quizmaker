import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ReactDOM from 'react-dom/client';


import Plans from './components/plans';
import Silver from './components/silver';
import Gold from './components/gold';
import Platinum from './components/Platinum'

import Student from './components/student';
import University from './components/university'
import Stulogin from './components/studentlogin'
import Unilogin from './components/universitylogin'
import Afterlogin from './components/stu_afterlogin';
import Uni_Afterlogin from './components/Uni_afterlogin';





import App from './App';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
      <Routes>
        <Route exact path="/" element={<Plans />} />
        <Route exact path="/Silver" element={<Silver />} />
        <Route exact path="/Gold" element={<Gold/>}/>
        <Route exact path="/Platinum" element={<Platinum/>}/>

        <Route exact path="/Student" element={<Student/>}/>
        <Route exact path="/Univeristy" element={<University/>}/>

        <Route exact path="/Stulogin" element={<Stulogin/>}/>
        <Route exact path="/Unilogin" element={<Unilogin/>}/>

        <Route exact path="/Afterlogin" element={<Afterlogin/>}/>

        <Route exact path="/Uni_Afterlogin" element={<Uni_Afterlogin/>}/>

        
      </Routes>
    </Router>

    
  
);
reportWebVitals();
