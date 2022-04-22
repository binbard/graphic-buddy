import React from "react";
import '../../css/login.css';
import { NavLink } from "react-router-dom";

export default function Alogin() {
  return (
    <div class="ps">

      <NavLink className="nav-link" to="/create">
        Create Record
      </NavLink><br />
      <NavLink className="nav-link" to="/record">
        Record list
      </NavLink>
      <div class="ui middle aligned center aligned grid" id="o-login__form">
        <div class="column">
          <h2 class="ui image header">
            <div class="content">
              Log-in to your account
            </div>
          </h2>
          <form action="" method="get" class="ui form">
            <div class="ui stacked secondary segment">
              <div class="field">
                <div class="ui left large icon input">
                  <i class="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address" />
                </div>
              </div>
              <div class="field">
                <div class="ui left large icon input">
                  <i class="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" />
                </div>
              </div>
              <div class="ui fluid large blue submit button">Login</div>
            </div>

            <div class="ui error message"></div>

          </form>

          <div class="ui message">
            Want to Join? <a href="mailto:jawnity@gmail.com" target="blank">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  );
}