import { Component } from "react";
import Marquee from "./Marquee";
import Values from "./Values";
import DepartmentImages from "./DepartmentImages";
import NewCourses from "./NewCourses";

export default class MiddleContent extends Component {
  render() {
    return (
      <div className="middle-content">
        <Marquee />
        <Values />
        <DepartmentImages />
        <NewCourses />
      </div>
    );
  }
}
