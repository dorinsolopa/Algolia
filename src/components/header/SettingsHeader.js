import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
class SettingsHeader extends React.Component {
  render() {
    return (
      <div className="flex-container1">
        <div className="space">
          <div className="border-white">H</div>
          <div>
            <p className="parag">
              Search <br />
              Hacker News
            </p>
          </div>
        </div>
        <Link to="/">
          <div className="space">
            <button className="bg">
              <i class="fas fa-chevron-left fa-2x"></i>
            </button>
            <p className="end">Back</p>
          </div>
        </Link>
      </div>
    );
  }
}
export default SettingsHeader;
