import { Component } from "react";
import "./newcourses.scss";
export default class NewCourses extends Component {
  render() {
    return (
      <div className="new-courses-conatiner">
        <div className="border-outline">
          <div className="title-container">
            <h6>What&apos;s New</h6>
            <h4>INDUSTRY-READY PROGRAMS</h4>
          </div>
          <div className="button-container">
            <button className="left-btn">
              <span>B.Tech Specialization Courses</span>
            </button>
            <button className="right-btn">
              <span>New Courses</span>
            </button>
          </div>
          <div className="list-container">
            <ul>
              <li>
                B.Tech. (Hons.) - Aerospace Engineering with specialization in
                Unmanned Aerial Vehicle
              </li>
              <li>
                B.Tech. (Hons.) - Biotechnology with specialization in Computer
                Science and Biology
              </li>
              <li>
                B.Tech. (Hons.) - Civil Engineering with specialization in GIS
                and Remote Sensing
              </li>
              <li>B.Tech. (Hons.) - ECE with specialization in AI and ML</li>
              <li>
                B.Tech. (Hons.) - ECE with specialization in Robotics and
                Industrial Automation
              </li>
              <li>
                B.Tech. (Hons.) - EEE with specialization in Electric Vehicles
              </li>
            </ul>
            <ul>
              <li>
                B.Tech. (Hons.) - EEE with specialization in Energy Engineering
              </li>
              <li>
                B.Tech. (Hons.) - Mechanical Engineering with specialization in
                Robotics and Industrial Automation
              </li>
              <li>
                B.Tech. (Hons.) - Mechanical Engineering with specialization in
                Energy Engineering
              </li>
              <li>B.Tech. (Hons.) - CSE with specialization in AI and ML</li>
              <li>B.Tech. (Hons.) - CSE with specialization in Data Science</li>
              <li>
                B.Tech. (Hons.) - CSE with specialization in Cyber Security
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
