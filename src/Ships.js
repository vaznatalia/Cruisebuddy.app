import React from "react";
import { setDataFrom, ENDPOINTS } from "./lib/clientUtil.js";

class Ships extends React.Component {
  key = "ships";
  CRUISELINES = "cruise_lines";
  state = { [this.key]: [], [this.CRUISELINES]: [] };

  componentDidMount() {
    setDataFrom(this.CRUISELINES, ENDPOINTS[this.CRUISELINES], this);
    setDataFrom(this.key, ENDPOINTS[this.key], this);
  }

  render() {
    return (
      <div>
        <h2>ships</h2>
        <ul>
          {this.state[this.CRUISELINES].map(cl => (
            <li key={cl.id}>{cl.name}</li>
          ))}
          {this.state[this.key].map(ship => (
            <li key={ship.id}>{ship.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Ships;
