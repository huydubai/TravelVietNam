import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import Layouts from './Layouts/Layouts';
import {
  Home,
  SingleTourPage,
  SinglePlacePage,
  VisaTipPage,
  TransportTipPage,
  WeatherTipPage,
  SafetyTipPage,
  HistoryTipPage
} from './pages'
function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layouts />}>
              <Route path="" element={<Home />} />

              <Route path="tours/:id" element={<SingleTourPage />} />
              <Route path="places/:id" element={<SinglePlacePage />} />

              <Route path="tips/visa" element={<VisaTipPage />} />
              <Route path="tips/transport" element={<TransportTipPage />} />
              <Route path="tips/weather" element={<WeatherTipPage />} />
              <Route path="tips/safety" element={<SafetyTipPage />} />
              <Route path="tips/history" element={<HistoryTipPage />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
