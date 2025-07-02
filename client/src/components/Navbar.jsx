import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    alert("Log Out");
    navigate("/login");
  };
  return (
    <nav>
      <div className="navbar-brand">
        <Link to="/" className="navbar-brand-name">
          Pet Zone
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/add-pet" className="nav-link">
          Add Pet
        </Link>
        {!isLoggedIn && (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <span className="nav-link welcome-message">
              Welcome, {user?.name?.split(" ")[0] || "User"}
            </span>
            <button onClick={handleLogout} className="logout-btn">
              LogOut
            </button>
            <Link to="/orders" className="nav-link">
              My Orders
            </Link>
          </>
        )}
      </div>

      <div className="navbar-smallscreen">
        <GiHamburgerMenu
          fontSize={24}
          onClick={() => setToggleMenu(true)}
          className="hamburger-icon"
        />
        {toggleMenu && (
          <div className="navbar-smallscreen-overlay slide-bottom">
            <FaTimes
              fontSize={24}
              onClick={() => setToggleMenu(false)}
              className="overlay-close"
            />
            <div className="navbar-smallscreen-links">
              <Link
                to="/"
                className="nav-link"
                onClick={() => setToggleMenu(false)}
              >
                Home
              </Link>
              <Link
                to="/add-pet"
                className="nav-link"
                onClick={() => setToggleMenu(false)}
              >
                Add Pet
              </Link>
              {!isLoggedIn && (
                <>
                  <Link
                    to="/login"
                    className="nav-link"
                    onClick={() => setToggleMenu(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="nav-link"
                    onClick={() => setToggleMenu(false)}
                  >
                    Register
                  </Link>
                </>
              )}

              {isLoggedIn && (
                <>
                  <span
                    className="nav-link welcome-message"
                    onClick={() => setToggleMenu(false)}
                  >
                    Welcome, {user?.name?.split(" ")[0] || "User"}
                  </span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setToggleMenu(false);
                    }}
                    className="logout-btn nav-link"
                  >
                    LogOut
                  </button>
                  <Link
                    to="/orders"
                    className="nav-link"
                    onClick={() => setToggleMenu(false)}
                  >
                    My Orders
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
