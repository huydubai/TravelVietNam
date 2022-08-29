import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './Layouts/Layouts';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
