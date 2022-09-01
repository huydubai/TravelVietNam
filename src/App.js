import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './Layouts/Layouts';
import { Home, SingleTourPage, SinglePlacePage } from './pages'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="" element={<Home />} />
            <Route path="tours/:id" element={<SingleTourPage />} />
            <Route path="places/:id" element={<SinglePlacePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
