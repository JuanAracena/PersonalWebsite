import Profile from "./components/Profile"
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div id="background">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
