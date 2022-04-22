import React from "react";
import '../../css/login.css';
import { NavLink } from "react-router-dom";

export default function Alogin() {
  return (
    <div className="ps">

      <NavLink className="nav-link" to="/create">
        Create Record
      </NavLink><br />
      <NavLink className="nav-link" to="/record">
        Record list
      </NavLink>
      <div className="ui middle aligned center aligned grid" id="o-login__form">
        <div className="column">
          <h2 className="ui image header">
            <div className="content">
              Log-in to your account
            </div>
          </h2>
          <form action="" method="get" className="ui form">
            <div className="ui stacked secondary segment">
              <div className="field">
                <div className="ui left large icon input">
                  <i className="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address" />
                </div>
              </div>
              <div className="field">
                <div className="ui left large icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" />
                </div>
              </div>
              <div className="ui fluid large blue submit button">Login</div>
            </div>

            <div className="ui error message"></div>

          </form>

          <div className="ui message">
            Want to Join? <a href="mailto:jawnity@gmail.com" target="blank">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  );
}