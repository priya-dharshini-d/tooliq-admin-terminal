import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import WelcomeAdmin from "./WelcomeAdmin";
import Tools from "./tools"; // ✅ Import the new Tools page
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome/:name" element={<WelcomeAdmin />} />
        <Route path="/tools" element={<Tools />} /> {/* ✅ Add this */}
      </Routes>
    </Router>
  );
}

export default App;
