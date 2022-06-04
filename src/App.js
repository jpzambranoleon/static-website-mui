import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Copyright from "./components/Copyright";
import Navbar from "./components/Navbar";
import Error404 from "./pages/error404/Error404";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<Error404 />} />
        </Routes>
      </Router>
      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
        <Copyright />
      </Box>
    </div>
  );
}

export default App;
