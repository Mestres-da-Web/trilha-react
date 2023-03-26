import React from "react";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";

import "./global.styles.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";

import UseMemoExample from "./pages/Examples/useMemo";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="hooks" element={<UseMemoExample />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="forgot" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
