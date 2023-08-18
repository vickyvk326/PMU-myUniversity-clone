import { Component } from "react";

export default class HoverContent extends Component {
  render() {
    const column1 = this.props.column1;
    const column2 = this.props.column2;
    const column3 = this.props.column3;
    const column4 = this.props.column4;
    return (
      <div className="hover-content">
        <div className="column">
          {column1.title !== "" && <h2>{column1.title}</h2>}
          {column1.links.map((link, index) => {
            return (
              <div key={index} className="item">
                <div className="arrow">
                  <img src="https://pmu.edu/images/dot-arrow.png" alt="" />
                </div>
                <div className="link">{link}</div>
              </div>
            );
          })}
        </div>
        <div className="column">
          {column2.title !== "" && <h2>{column2.title}</h2>}
          {column2.links.map((link, index) => {
            return (
              <div key={index} className="item">
                <div className="arrow">
                  <img src="https://pmu.edu/images/dot-arrow.png" alt="" />
                </div>
                <div className="link">{link}</div>
              </div>
            );
          })}
        </div>
        <div className="column">
          {column3.title !== "" && <h2>{column3.title}</h2>}
          {column3.links.map((link, index) => {
            return (
              <div key={index} className="item">
                <div className="arrow">
                  <img src="https://pmu.edu/images/dot-arrow.png" alt="" />
                </div>
                <div className="link">{link}</div>
              </div>
            );
          })}
        </div>
        <div className="column">
          {column4.title !== "" && <h2>{column4.title}</h2>}
          {column4.links.map((link, index) => {
            return (
              <div key={index} className="item">
                <div className="arrow">
                  <img src="https://pmu.edu/images/dot-arrow.png" alt="" />
                </div>
                <div className="link">{link}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
