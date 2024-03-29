import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/styles.scss";
import Copyright from "./components/Copyright";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/aboutPage/AboutPage";
import Error404 from "./pages/error404/Error404";
import Home from "./views/Home";
import Team from "./views/Team";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
