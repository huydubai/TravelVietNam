import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './Layouts/Layouts';
import { Home, SingleTourPage } from './pages'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="" element={<Home />} />
            <Route path="tours/:id" element={<SingleTourPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
