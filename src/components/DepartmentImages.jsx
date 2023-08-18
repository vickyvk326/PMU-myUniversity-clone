import { Component } from "react";
import "./department-images.scss";
export default class DepartmentImages extends Component {
  render() {
    return (
      <div className="department-images-container">
        <div className="department-border">
          <div className="header-line">
            ----------------------------------------
          </div>
          <div className="tail-line top-line">
            ------------------------------------------------------------
          </div>
          <div className="circle"></div>
          <div className="header-line">
            ----------------------------------------
          </div>
          <div className="tail-line end-line">
            ------------------------------------------------------------
          </div>
        </div>
        <div className="architechture-department grid-item">
          <img src="https://pmu.edu/home-new/schools/1.jpg" alt="" />
          <div className="hover-content">
            <h4>ARCHITECTURE & PLANNING</h4>
            <ul>
              <li>Department of Architecture</li>
            </ul>
          </div>
        </div>
        <div className="computerscience-department grid-item">
          <img src="https://pmu.edu/home-new/schools/2.jpg" alt="" />
          <div className="hover-content">
            <h4>COMPUTING SCIENCE & ENGINEERING</h4>
            <ul>
              <li>Department of Computer Science and Engineering</li>
              <li>Department of Computer Science and Applications</li>
              <li>Department of Software Engineering</li>
            </ul>
          </div>
        </div>
        <div className="technologyandengineer-department grid-item">
          <img src="https://pmu.edu/home-new/schools/3.jpg" alt="" />
          <div className="hover-content">
            <h4>ENGINEERING & TECHNOLOGY</h4>
            <ul>
              <li>Department of Aerospace Engineering</li>
              <li>Department of Bio Technology</li>
              <li>Department of Civil Engineering</li>
              <li>Department of Electronics and Communication Engineering</li>
              <li>Department of Electrical and Electronics Engineering</li>
              <li>Department of Mechanical Engineering</li>
            </ul>
          </div>
        </div>
        <div className="humanitiesscience-department grid-item">
          <img src="https://pmu.edu/home-new/schools/4.jpg" alt="" />
          <div className="hover-content">
            <h4>HUMANITIES, SCIENCE & MANAGEMENT</h4>
            <section style={{ display: "flex", gap: "2rem" }}>
              <ul>
                <li>Chemistry</li>
                <li>English</li>
                <li>Mathematics</li>
                <li>Physics</li>
                <li>Management Studies</li>
              </ul>
              <ul>
                <li>Education</li>
                <li>Commerce</li>
                <li>Political Science</li>
                <li>Social Work</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
