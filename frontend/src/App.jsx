import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Redirecting from './pages/Redirecting';
import IsLogin from "./features/auth/isLogin";
import Layout from "./components/shared/Layout";
import IsAuth from "./features/auth/IsAuth";

export default function App() {
  return (
    <Routes>
      <Route element={<IsLogin />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/redirecting" element={<Redirecting />} />
        </Route>
      </Route>
      <Route element={<IsAuth />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
