import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import Auth from "./pages/auth/login";
import AdvertiserSignup from "./pages/auth/signup/advertiser/AdvertiserSignup";
import UserSignup from "./pages/auth/signup/user/UserSignup";
import AdminDashboard from "./pages/dashboard/admin";
import UserDashboard from "./pages/dashboard/user";
import Home from "./pages/home";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";
import About from "./pages/static/about";
import FAQ from "./pages/static/faq";
import TermsAndConditions from "./pages/static/TermsAndConditions";

function App() {
  const {token,role} = useSelector(state=>state.user)

  return (
    <div className="App  font-inter">
      <Routes>
        {/* staticPages */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Route>

        <Route
          path="/auth"
          element={
            token ? (
              <Navigate to={"/dashboard"} />
            ) : (
              <Auth />
            )
          }
        />

        <Route
          path="/register"
          element={token ? <Navigate to={"/dashboard"} /> : <Outlet />}
        >
          <Route index element={<Navigate to={"/register/user"} />} />
          <Route path="user" element={<UserSignup />} />
          <Route path="advertiser" element={<AdvertiserSignup />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            token ? (
              role === "admin" ? (
                <AdminDashboard />
              ) : (
                <UserDashboard />
              )
            ) : (
              <Navigate to={"/auth"} />
            )
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
