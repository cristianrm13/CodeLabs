import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Admin from "../pages/Admin";
import LoginDash from "../pages/LoginDash";
import About from "../pages/About";
function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginDash />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;