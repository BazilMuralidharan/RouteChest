import {
  NavLink,
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";
import App from "./App";
import "./styles.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="home">Home</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </div>
  );
};

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />

        <Route path="home" element={<h1>Home</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="about" element={<h1>About</h1>} />
      </Routes>
    </div>
  );
}
