import React from "react";
import "./Header.css"
import SettingsHeader from  "./SettingsHeader"

class Settings extends React.Component {
  render() {
    return (
      <div>
      <SettingsHeader/>
      <div className="cardPad">
        <div>
          <h4>Settings</h4>
        </div>
        <div>
          <h3>Display options</h3>
        </div>
        <hr />
        <div  className="center top">
          <div className="padBot">
            <form>
              <label  className="spaceRight" for="style">Style</label>
              <select id="style" name="style">
                <option>Default</option>
                <option>Experimental</option>
              </select>
            </form>
            </div>
          <div>
            <form>
              <label  className="spaceRight" for="page">Hits per page</label>
              <select id="page" name="page">
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>50</option>
              </select>
            </form>
          </div>
          </div>
        
        <div >
          <h3>Ranking options</h3>
        </div>
        <hr />
        <div className="center top">
          <div  className="padBot" >
            <form>
              <label  className="spaceRight" for="type">Default type</label>
              <select id="type" name="type">
                <option>All</option>
                <option>Stories</option>
                <option>Comments</option>
              </select>
            </form>
            </div>
          <div  className="padBot">
            <form>
              <label  className="spaceRight">Default type</label>
              <select>
                <option>Most recent first</option>
                <option>Most popular first</option>
              </select>
            </form>
          </div>
          <div  className="padBot">
            <form>
              <label  className="spaceRight" for="range">Default date range</label>
              <select id="range" name="range">
                <option>Last24h</option>
                <option>Last week</option>
                <option>Last month</option>
                <option>Last year</option>
                <option>Forever</option>
              </select>
            </form>
          </div>
          <div >
            <form>
              <label className="spaceRight">Use the story text for search</label>
              <input type="checkbox" id="search" name="search" value="search" />
              <br />  <br />
              <label  className="spaceRight">Use the author's username for search</label>
              <input type="checkbox" id="search" name="search" value="search" />
              <br />  <br  />
              <label  className="spaceRight">Typo-tolerance</label>
              <input type="checkbox" id="search" name="search" value="search" />
              <br />  <br  />
            </form>
          </div>
          </div>
          </div>
          <div className="flexEnd">
            <button className="apply">Apply</button>
          </div>
      </div>
    );
  }
}
export default Settings;
