import { Link, Route, Routes } from "react-router-dom";
import "./style/App.css";
import App from "./App";
export default function IntroPage() {
  return (
    <div className="intro-page">
      <h1 className="heading">Welcome to the 99</h1>
      <Routes>
        <Route path="/App" element={<App />} />
      </Routes>
      <Link to="/App" className="blue-button">
        Enter the Bullpen
      </Link>
      <audio autoPlay>
        <source src="/sounds/Brooklyn Nine-Nine.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
