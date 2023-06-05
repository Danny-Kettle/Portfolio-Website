import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataContextProvider } from "./components/DataContextProvider";
import Upcoming from "./components/Upcoming";
import Home from "./pages/Home";
import PortfolioPage from "./components/portfolio/[portfolio]";

function App() {
  return (
    <Router>
      <DataContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
          <Route path="/upcoming" element={<Upcoming />} />
          {/* Define other routes here */}
        </Routes>
      </DataContextProvider>
    </Router>
  );
}

export default App;
