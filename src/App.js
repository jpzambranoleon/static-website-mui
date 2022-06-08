import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Copyright from "./components/Copyright";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/aboutPage/AboutPage";
import Error404 from "./pages/error404/Error404";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Copyright />
      </Box>
    </div>
  );
}

export default App;
