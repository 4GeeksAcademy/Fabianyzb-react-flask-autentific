import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginUser = async () => {
        const response = await fetch(
            "https://fictional-acorn-gvvpqwxgpg92wpww-3001.app.github.dev/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            }
        );
        const data = await response.json();
        localStorage.setItem("token", data.token);
        if (response.ok) {
            actions.settingLogIn();
            navigate("/private");
        } else {
            console.log("Error:", data);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center mb-4">Login</h1>
                            <form
                                onSubmit={(e) => {
                                    if (email !== "" && password !== "") {
                                        e.preventDefault();
                                        loginUser();
                                    } else {
                                        alert("Fields cannot be empty");
                                    }
                                }}
                            >
                                <div className="mb-3">
                                    <label htmlFor="floatingInput" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="floatingPassword" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
