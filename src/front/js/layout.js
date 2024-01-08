import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login";
import { Private } from "./pages/private";
import { Signup } from "./pages/signup";

// Create your first component
const Layout = () => {
  // The basename is used when your project is published in a subdirectory and not in the root of the domain.
  // You can set the basename on the .env file located at the root of this project, e.g., BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<RouteNotFound />} />
            <Route element={<Signup />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<Private />} path="/private" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

const RouteNotFound = () => <h1>Not found!</h1>;

export default injectContext(Layout);
