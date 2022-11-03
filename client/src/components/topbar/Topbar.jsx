import "./topbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
  const {user,dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
        <div className="topLeft">
           <i className="topIcon fa-brands fa-facebook-square"></i>
           <i className="topIcon fa-brands fa-twitter-square"></i>
           <i className="topIcon fa-brands fa-pinterest-square"></i>
           <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
        <ul className="topList">
           <li className="topListItem"><NavLink className="link" to="/">HOME</NavLink></li>
           <li className="topListItem"><NavLink className="link" to="/write">WRITE</NavLink></li>
            {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}   
        </ul>
        </div>
        <div className="topRight">

        {user ? (
          <NavLink className="link" to="/settings">
            <img
              className="topImg"
              src={PF +user.profilePic}
              alt=""
            />
          </NavLink>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <NavLink className="link" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink className="link" to="/register">
                REGISTER
              </NavLink>
            </li>
          </ul>
        )}

          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  );
}
