import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import IsLogin from "./features/auth/isLogin";
import Layout from "./components/shared/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<IsLogin />}>
      <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}