const Routers = {
    login: {
        path: "/login",
        title: "Giriş",
        key: "login",
    },
    main: {
        path: "/",
        title: "Anasayfa",
        key: "main",
    },
    blog: {
        path: "/blog/:id",
        title: "Blog",
    },
    about: {
        path: "/about",
        title: "Hakkında",
    },
    contact: {
        path: "/contact",
        title: "İletişim",
    },
    notFound: {
        path: "*",
        title: "NotFound",
    },
};

export default Routers;