import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}