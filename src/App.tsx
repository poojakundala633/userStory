import React from 'react';
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import Otp from '../src/components/organisms/Otp'
import HomePage from '../src/components/molecules/HomePage'
const Routes = () => {
  return (
     <Router>
       <ReactRoutes>
         <Route path="/" element={<Otp />} />
         <Route path="/homepage" element={<HomePage/>}/>
       </ReactRoutes>
     </Router>

  );
};

export default Routes;
