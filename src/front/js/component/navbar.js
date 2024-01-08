import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions } = useContext(Context);
	const [isLogged, setIsLogged] = useState(false)
	const token = localStorage.getItem("token");

	useEffect(() => {
		if (store.isLogged == false) {
			setIsLogged(false)
		} else if (store.isLogged == true) {
			setIsLogged(true)
		}
		console.log(isLogged)
	}, [store.isLogged])	
	const handleLogout = () => {
		const token = localStorage.removeItem("token");
		actions.logOut();
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="btn btn-primary navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
					{isLogged ? <Link to="/">
						<span className="btn btn-danger navbar-brand mb-0 h1" onClick={() => handleLogout()}>Logout</span>
					</Link>: ""}
				</div>
			</div>
		</nav>
	);
};