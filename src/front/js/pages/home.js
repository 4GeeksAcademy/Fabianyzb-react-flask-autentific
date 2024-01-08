import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <h1 className="mb-4">What would you like to do?</h1>
            <div className="d-flex justify-content-center">
                <Link to="/register" className="mx-2">
                    <button type="button" className="btn btn-success">Register Page</button>
                </Link>
                <Link to="/login" className="mx-2">
                    <button type="button" className="btn btn-success">Login Page</button>
                </Link>
            </div>
        </div>
    );
};
