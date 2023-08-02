
import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./Components/Landing";
import Postview from "./Components/Postview";
import Newposts from "./Components/Newposts";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route path="/postview" element={<Postview/>} />
          <Route path="/newposts" element={<Newposts/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
