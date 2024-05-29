import React from "react";
import { Navigate } from "react-router-dom";
import { Constants } from "../utilities/imports/import"; // Constants dosyanızın yolu

// route'a gidildiğinde token kontrolü yapıyor.
// TODO: buraya ekstra kodlar eklenecek
const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem(Constants.TOKEN_KEY);

    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
