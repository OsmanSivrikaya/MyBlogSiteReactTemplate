// App.js
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import R from "./router";

import Header from "/src/user/components/shareds/Header";
import HeaderHome from "/src/user/components/shareds/HeaderHome";

//#region Admin
const LoginPage = lazy(() => import("../admin/pages/Login"));
import AdminLayout from "/src/admin/components/layout/AdminLayout";
import AdminHomePage from "/src/admin/pages/Home";
import BlogPage from "/src/admin/pages/Blog";
//#endregion

//#region User
import HomePage from "/src/user/pages/Home";
import AboutPage from "/src/user/pages/About";
import ContactPage from "/src/user/pages/Contact";
//const BlogDetailPage = lazy(() => import("/src/user/pages/BlogDetail"));
//#endregion

import NotFoundPage from "/src/user/pages/NotFound";
import PrivateRoute from "./privateRoute";

const Section = () => {
    const {
        login,
        main,
        blog,
        about,
        contact,
        notFound,
        adminHome,
        adminBlog,
    } = R;

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
                    <Route
                        path={adminHome.path}
                        element={
                            <PrivateRoute>
                                <AdminHomePage />{" "}
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path={adminBlog.path}
                        element={
                            <PrivateRoute>
                                <BlogPage />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
};

export default Section;
