import { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import {
    CategoryPage,
    PageRouter,
    PrivateRoute,
    NotFoundPage,
    HomePage,
    AboutPage,
    ContactPage,
    LoginPage as Login,
    AdminLayout,
    AdminHomePage,
    BlogPage,
    HeaderHome,
    Header,
} from "../utilities/imports/pagesImport";

const LoginPage = lazy(() => Login);

const Section = () => {
    const R = PageRouter.default;
    return (
        <Router>
            <Routes>
                <Route element={<HeaderHome />} exact>
                    <Route path={R.main.path} element={<HomePage />} />
                </Route>
                <Route element={<Header />} exact>
                    {/*<Route path={blog.path} element={<BlogDetail />} />*/}
                    <Route path={R.about.path} element={<AboutPage />} />
                    <Route path={R.contact.path} element={<ContactPage />} />
                    <Route path={R.notFound.path} element={<NotFoundPage />} />
                </Route>
                <Route
                    path={R.login.path}
                    element={
                        <Suspense>
                            <LoginPage />
                        </Suspense>
                    }
                />
                <Route element={<AdminLayout />} exact>
                    <Route
                        path={R.adminHome.path}
                        element={
                            <PrivateRoute>
                                <AdminHomePage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path={R.adminBlog.path}
                        element={
                            <PrivateRoute>
                                <BlogPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path={R.adminCategory.path}
                        element={
                            <PrivateRoute>
                                <CategoryPage />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
};

export default Section;
