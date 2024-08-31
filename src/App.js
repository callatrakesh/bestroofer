import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Backend from './backend/Backend';
import FrontEnd from './site/FrontEnd';

function App() {
  return (
   <>
    <Router>   
      <Routes>
        <Route path="/*" exact  element={<FrontEnd />} />
        <Route path="/admin/*" element={<Backend />} />                
      </Routes>
    </Router>
   </>
  );
}

export default App;
