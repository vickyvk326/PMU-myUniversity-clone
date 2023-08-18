import { Component } from "react";
import { PropTypes } from "prop-types";
import HoverContent from "./HoverContent";

export default class Navbar extends Component {
  render() {
    const blueNavBar = (
      <div className="navbar-container">
        <a className="logo" href="https://pmu.edu/">
          <img
            src="https://www.pmu.edu/pmistdlp/images/PMIST-reverse-logo.png"
            alt="PMU logo"
          />
        </a>
        <div className="nav-links">
          <a href="">
            <span>Home</span>
          </a>
          <a href="">
            <span>About</span>
            <HoverContent
              column1={{
                title: "",
                links: ["About PMIST", "History", "Chancellor", "Governance"],
              }}
              column2={{
                title: "",
                links: [
                  "Management",
                  "Deans",
                  "Directors",
                  "Administrative Officers",
                ],
              }}
              column3={{
                title: "",
                links: [
                  "Committees",
                  "Statutory Bodies",
                  "Bye-laws and Constitution",
                  "Accreditation and Ranking",
                ],
              }}
              column4={{
                title: "",
                links: [
                  "E-News Bulletin",
                  "Academic Calender",
                  "Privacy policy",
                ],
              }}
            />
          </a>
          <a href="">
            <span>Academics</span>
            <HoverContent
              style={{ height: "320px" }}
              column1={{
                title: "Faculty of Architecture and Planning",
                links: ["Department of Architecture"],
              }}
              column2={{
                title: "Faculty of Engineering and Technology",
                links: [
                  "Department of Aerospace Engineering",
                  "Department of Biotechnology",
                  "Department of Civil Engineering",
                  "Department of Electronics And Communication Engineering",
                  "Department of Electrical And Electronics Engineering",
                  "Department of Mechanical Engineering",
                ],
              }}
              column3={{
                title: "Faculty of Computing Sciences and Engineering",
                links: [
                  "Department of Computer Science And Engineering",
                  "Department of Computer Science And Application",
                  "Department of Software Engineering",
                ],
              }}
              column4={{
                title: "Faculty of Humanities , Science and Management",
                links: [
                  "Department of Chemistry",
                  "Department of Commerce",
                  "Department of English and Foreign Languages",
                  "Department of Education",
                  "Department of Mathematics",
                  "Department of Management Studies",
                  "Department of Physics",
                  "Department of Political Science",
                  "Department of Social Work",
                ],
              }}
            />
          </a>
          <a href="">
            <span>Admission</span>
          </a>
          <a href="">
            <span>Facilities</span>
            <HoverContent
              style={{ height: "320px" }}
              column1={{
                title: "",
                links: [
                  "Life at PMIST",
                  "Campus Amenities",
                  "Zero Carbon Campus",
                  "Arjun Singh Library",
                ],
              }}
              column2={{
                title: "",
                links: [
                  "Physical Education",
                  "ICT Facilities",
                  "Computer Facilities",
                  "Hostel",
                ],
              }}
              column3={{
                title: "",
                links: [
                  "Student Association",
                  "Clubs and Socities",
                  "Periyar Maniammai Hospital",
                  "E-Governance",
                ],
              }}
              column4={{
                title: "",
                links: [
                  "Barrier Free Environment",
                  "Cultural Activities",
                  "Learning Management System",
                  "e Yantra Lab",
                ],
              }}
            />
          </a>
          <a href="">
            <span>Research</span>
            <HoverContent
              style={{ height: "320px" }}
              column1={{
                title: "",
                links: [
                  "Research Culture",

                  "Research Advisory Committee (RAC)",

                  "IPR Cell",

                  "Research outcome of PMIST in Scopus Database",
                ],
              }}
              column2={{
                title: "",
                links: [
                  "Code of Ethics for Research",

                  "Research Facilities",

                  "Consultancy",

                  "Resource for Researchers",
                ],
              }}
              column3={{
                title: "",
                links: [
                  "M.Phil. and Ph.D. regulation",

                  "Download Research Forms",

                  "Institute Innovation Council",
                ],
              }}
              column4={{
                title: "",
                links: [
                  "Funded Projects",

                  "Collaborations and MoU",

                  "Funding Agencies",
                ],
              }}
            />
          </a>
          <a href="">
            <span>IQAC</span>
            <HoverContent
              style={{ height: "320px" }}
              column1={{
                title: "",
                links: ["HOME", "Meeting", "NAAC", "Arjun Singh Library"],
              }}
              column2={{
                title: "",
                links: [
                  "Physical Education",
                  "ICT Facilities",
                  "Computer Facilities",
                  "Hostel",
                ],
              }}
              column3={{
                title: "",
                links: [
                  "Student Association",
                  "Clubs and Socities",
                  "Periyar Maniammai Hospital",
                  "E-Governance",
                ],
              }}
              column4={{
                title: "",
                links: [
                  "Barrier Free Environment",
                  "Cultural Activities",
                  "Learning Management System",
                  "e Yantra Lab",
                ],
              }}
            />
          </a>

          <a href="">
            <span>Student Portal</span>
          </a>
          <a href="">
            <span>Alimni</span>
          </a>
          <a href="">
            <span>More+</span>
            <HoverContent
              style={{ height: "320px" }}
              column1={{
                title: "",
                links: [
                  "Life at PMIST",
                  "Campus Amenities",
                  "Zero Carbon Campus",
                  "Arjun Singh Library",
                ],
              }}
              column2={{
                title: "",
                links: [
                  "Physical Education",
                  "ICT Facilities",
                  "Computer Facilities",
                  "Hostel",
                ],
              }}
              column3={{
                title: "",
                links: [
                  "Student Association",
                  "Clubs and Socities",
                  "Periyar Maniammai Hospital",
                  "E-Governance",
                ],
              }}
              column4={{
                title: "",
                links: [
                  "Barrier Free Environment",
                  "Cultural Activities",
                  "Learning Management System",
                  "e Yantra Lab",
                ],
              }}
            />
          </a>
        </div>
      </div>
    );
    const whiteNavBar = (
      <div className="white-navbar-container">
        <a className="logo" href="https://pmu.edu/">
          <img src="https://pmu.edu/images/Logo.png" alt="PMU logo" />
        </a>
        <div className="right">
          <button>Admission 2023 | Apply Now</button>
          <div className="burger-container">
            <span>Menu</span>
            <div className="burger">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
    return <>{this.props.scrollLength <= 200 ? blueNavBar : whiteNavBar}</>;
  }
}
Navbar.propTypes = {
  scrollLength: PropTypes.number,
};
