import { Component } from "react";
import "./marquee.scss";
export default class Marquee extends Component {
  render() {
    return (
      <div className="marquee-container">
        <div className="sharp-hide">updates</div>
        <div className="marquee">
          <marquee>
            <img
              src="https://pmu.edu/home-new/info-f.png"
              alt=""
              height={15}
              width={15}
            />
            <a href="" target="_blank" className="marquee-link">
              Admission 2023 | Apply Now
            </a>
            &nbsp; &nbsp;
            <img
              src="https://pmu.edu/home-new/info-f.png"
              alt=""
              height={15}
              width={15}
            />
            <a href="" target="_blank" className="marquee-link">
              Ph.D. Application
            </a>
            &nbsp; &nbsp;
            <img
              src="https://pmu.edu/home-new/info-f.png"
              alt=""
              height={15}
              width={15}
            />
            <a href="" target="_blank" className="marquee-link">
              Scholarships - Know More
            </a>
            &nbsp; &nbsp;
          </marquee>
        </div>
      </div>
    );
  }
}
