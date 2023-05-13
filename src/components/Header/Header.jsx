import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/fitness2.png";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--color-blog)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <RiMenu3Line style={{ fontSize: "2rem", color: "white" }} />
        </div>
      ) : (
        <ul className="header_menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <br />
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="about"
              span={true}
              smooth={true}
            >
              about
            </Link>
          </li>
          <br />
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              programs
            </Link>
          </li>
          <br />
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plan"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <br />
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="join-us"
              span={true}
              smooth={true}
            >
              Join
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
