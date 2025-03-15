import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => <h1>Welcome to My React App</h1>;
const About = () => <h1>About Us</h1>;
const NotFound = () => <h1>404 - Page Not Found</h1>;

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
