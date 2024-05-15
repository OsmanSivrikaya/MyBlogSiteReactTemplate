import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./utils/routes";

import Header from "./user/components/shareds/Header";
import HeaderHome from "./user/components/shareds/HeaderHome";

//User
import Home from "./user/pages/Home";
import About from "./user/pages/About";
import Contact from "./user/pages/Contact";
import BlogDetail from "./user/pages/BlogDetail";
import NotFound from "./user/pages/NotFound";

//Admin
import Login from "./admin/pages/Login";

function App() {
  const { login, main, about, blog, contact, notFound } = routes;
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<HeaderHome />} exact>
            <Route path={main.path} element={<Home />} />
          </Route>
          <Route element={<Header />} exact>
            <Route path={blog.path} element={<BlogDetail />} />
            <Route path={about.path} element={<About />} />
            <Route path={contact.path} element={<Contact />} />
            <Route path={notFound.path} element={<NotFound />} />
          </Route>
          <Route path={login.path} element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
