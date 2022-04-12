// import 'fomantic-ui-css/semantic.min.css';
import React from 'react';

function Navbar() {
  return (
    <div class="ui stackable menu">
      <div class="item">
        <img src="https://pbs.twimg.com/profile_images/976683214201765888/Wy4LUm8Q_400x400.jpg" />
      </div>
      <a class="item active">Home</a>
      <a class="item">About</a>
      <a class="item">Contibute</a>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..." />
            <i class="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;