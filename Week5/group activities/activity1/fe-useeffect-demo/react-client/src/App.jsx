import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home1";
import Create from "./pages/Create";
import BlogDetails from "./pages/BlogDetails";
import Navbar from "./components/Navbar";
import Home1 from "./pages/Home1"
import Home2 from "./pages/Home2"
import Home3 from "./pages/Home3"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/home1" element={<Home1 />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/home3" element={<Home3 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
