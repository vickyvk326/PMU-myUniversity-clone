import { Component } from "react";
import "./values.scss";
export default class Values extends Component {
  render() {
    return (
      <div className="values">
        <div className="certificates-container">
          <img src="https://pmu.edu/home-new/certificates/7.png" alt="" />
          <img src="https://pmu.edu/home-new/certificates/1.png" alt="" />
          <img src="https://pmu.edu/home-new/certificates/2.png" alt="" />
          <img src="https://pmu.edu/home-new/certificates/3.png" alt="" />
          <img src="https://pmu.edu/home-new/certificates/4.png" alt="" />
          <img src="https://pmu.edu/home-new/certificates/5.png" alt="" />
        </div>
        <div className="about-university">
          <h4>THINK . INNOVATE . TRANSFORM.</h4>
          <p>
            Pursue your career defining degree from PMIST (Periyar Maniammai
            Institute of Science & Technology), a reputed Deemed to be
            University with finest professional and supportive environment. With
            over 100 plus industry tie-ups, 100% placement assistance and value
            added certificate programs, be rest assured for a promising future.
            PMIST imparts quality education, value added certification courses
            for better employment opportunities, ICT enabled classrooms,
            well-equipped library that shelves over 90,000 books & research
            journals, well-equipped laboratories and a fleet of highly qualified
            faculty members to provide an excellent academic environment that
            enables its students to Think, Innovate and Transform.
          </p>
        </div>
      </div>
    );
  }
}
