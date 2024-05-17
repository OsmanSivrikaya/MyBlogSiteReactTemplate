// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import R from "./router";

import Header from "/src/user/components/shareds/Header";
import HeaderHome from "/src/user/components/shareds/HeaderHome";

//#region Admin
const LoginPage = lazy(() => import("../admin/pages/Login"));
import AdminLayout from "/src/admin/components/layout/AdminLayout";
import AdminHomePage from "/src/admin/pages/Home";
//#endregion

//#region User
import HomePage from "/src/user/pages/Home";
import AboutPage from "/src/user/pages/About";
import ContactPage from "/src/user/pages/Contact";
//const BlogDetailPage = lazy(() => import("/src/user/pages/BlogDetail"));
//#endregion

import NotFoundPage from "/src/user/pages/NotFound";

const Section = () => {
    const { login, main, blog, about, contact, notFound } = R;
    return (
        <Router>
            <Routes>
                <Route element={<HeaderHome />} exact>
                    <Route path={main.path} element={<HomePage />} />
                </Route>
                <Route element={<Header />} exact>
                    {/*<Route path={blog.path} element={<BlogDetail />} />*/}
                    <Route path={about.path} element={<AboutPage />} />
                    <Route path={contact.path} element={<ContactPage />} />
                    <Route path={notFound.path} element={<NotFoundPage />} />
                </Route>
                <Route
                    path="login"
                    element={
                        <Suspense>
                            <LoginPage />
                        </Suspense>
                    }
                />
                <Route element={<AdminLayout />} exact>
                    <Route path="/admin/" element={<AdminHomePage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default Section;
