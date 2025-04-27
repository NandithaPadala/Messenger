import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        console.log("User not logged in, redirecting...");
        return <Navigate to="/" />;
    }

    return children; // Else show the protected page
};

export default PrivateRoute;
