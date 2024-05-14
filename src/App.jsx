import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./utils/routes";

import Header from "./components/shareds/Header";
import HeaderHome from "./components/shareds/HeaderHome";
import Footer from "./components/shareds/footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const { header } = useSelector((state) => state.headerSlice);

  const { login, main, about, blog, contact } = routes;
  return (
    <div>
      <Router>
        {/** Render the appropriate header based on the route */}
        {header == "home" ? <HeaderHome /> : <Header />}
        <Routes>
          <Route path={main.path} element={<Home />} exact />
          <Route path={blog.path} element={<BlogDetail />} />
          <Route path={about.path} element={<About />} />
          <Route path={contact.path} element={<Contact />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
