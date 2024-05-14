import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/shareds/Header";
import HeaderHome from "./components/shareds/HeaderHome";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const { header } = useSelector((state) => state.headerSlice);
  return (
    <div>
      <Router>
        {/** Render the appropriate header based on the route */}
        {header == "home" ? <HeaderHome /> : <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
