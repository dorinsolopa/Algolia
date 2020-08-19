import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("onSearch-->");
      this.props.onSearch(event.target.value);
    }
  };
  render() {
    return (
      <div className="flex-container">
        <div className="border-white">H</div>
        <div>
          <p className="parag">Search Hacker News</p>
        </div>
        <div className="cardInp">
          <i className="fas fa-search  icon"></i>
          <input
            className="input"
            placeholder="Search stories bu title, url or author"
            handleKeyDown={this.handleKeyDown}
          />
        </div>
        <Link to="/settings">
          <button className="bg">
            <i class="fas fa-cog fa-2x "></i>
          </button>
          <div className="end">Settings</div>
        </Link>
      </div>
    );
  }
}
export default Header;
