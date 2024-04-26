import React from 'react';
import './header.css'; // Import your CSS file

function Header() {
  return (
    <div className="headerr">
    <header className="header">
      <h1 className="logo">BrainyLingo</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Leaderboard</a></li>
          <li><a href="#">Daily Quiz</a></li>
          <li><a href="#" style={{backgroundImage: 'linear-gradient(to right, #ff0000, #ff6600, #ffcc00, #33cc33)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Genre<i class="fa fa-caret-down"></i></a>
          </li>
        </ul>
      </nav>
      <button className="sign-up-btn" >Sign out</button>
    </header>
    <div className='headerrr'>Science Fiction Stories</div>
    <div className='butten'>
        <button style={{backgroundColor:"blue"}}>New</button>
        <button style={{backgroundColor:"yellow"}}>In progress</button>
        <button style={{backgroundColor:"green"}}>Completed</button>
        <button style={{background: 'linear-gradient(to right, rgb(98, 3, 199), #87CEEB)'}}>Clear all</button>
    </div>
    </div>
  );
}

export default Header;
