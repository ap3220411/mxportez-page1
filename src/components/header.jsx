import React from "react";
import "./header.css"; // Import your CSS file
import New from "./image/download.jpeg"
import logo from "./image/logo.jpeg"


function Header() {
  return (
    <div className="headerr">
      <header className="header">
        <div>
          <h1 className="logo"><img src={logo}/> <span>BrainyLingo</span>
            </h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Leaderboard</a>
            </li>
            <li>
              <a href="#">Daily Quiz</a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ff0000, #ff6600, #ffcc00, #33cc33)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Genre<i class="fa fa-caret-down"></i>
              </a>
            </li>
          </ul>
        </nav>
        <button className="sign-up-btn">Sign out</button>
      </header>
      <div className="headerrr">
        <div>
          <h1 className="center">Science Fiction Stories</h1>
        </div>
      </div>
      <div className="butten">
        <button style={{ backgroundColor: "blue" }}> <img  src={New} alt="log0"/> <span >New</span> </button>
        <button style={{ backgroundColor: "yellow" }}><img src={New} alt="log0"/><span>In progress</span></button>
        <button style={{ backgroundColor: "green" }}><img src={New} alt="log0"/><span>Completed</span></button>
        <button
          style={{
            background: "linear-gradient(to right, rgb(98, 3, 199), #87CEEB)",
          }}
        >
          Clear all
        </button>
      </div>
      <div style={{}}>
        <svg
          style={{ width: "100%", marginBottom: "0px", border: "none" }}
          viewBox="0 0 5250 394"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 90.923V393.09H330.556H1983.33H3966.67L5950 1093.091L5950 -460.02C5288.89 284.34 4527.78 250.756 3566.67 308.645C3878.52 340.83 1600.37 92.722 2605.22 199.613C3129.26 320.4069 2556.3 180.692 2272.33 140.6869C1322.22 9.4786 461.111 261.701 310.556 297.812L0 393.923Z"
            fill="#090d18"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
