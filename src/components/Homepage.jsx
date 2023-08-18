import { Component } from "react";
import Carousel from "./Carousel";

export default class Homepage extends Component {
  render() {
    return (
      <div className="home-page">
        <Carousel />
      </div>
    );
  }
}
