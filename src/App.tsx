// GLOBAL IMPORTS
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// IMPORTS FOR COMPONENTS
import LandingTop from "./Components/Landing/LandingTop/LandingTop";
// IMPORTS FOR STYLES
import "./Styles/root.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingTop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
