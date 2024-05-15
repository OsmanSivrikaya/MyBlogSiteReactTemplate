export const routes = {
    login: {
        path: "/admin/login",
        title: "Giriş",
    },
    main: {
        path: "/",
        title: "Anasayfa",
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
