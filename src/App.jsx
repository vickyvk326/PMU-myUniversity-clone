import { Component } from "react";
import "./appc.scss";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import MiddleContent from "./components/MiddleContent";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    scrollLength: 0,
  };
  handleToggleScrolled = (value) => {
    this.setState({ scrollLength: value });
  };
  checkScrolled = () => {
    this.handleToggleScrolled(window.scrollY);
  };
  componentDidMount() {
    window.addEventListener("scroll", this.checkScrolled);
  }
  componentDidUpdate() {
    window.addEventListener("scroll", this.checkScrolled);
    console.log(this.state.scrollLength);
  }
  render() {
    return (
      <div className="app">
        <Navbar scrollLength={this.state.scrollLength} />
        <Homepage />
        <MiddleContent />
        <Footer />
      </div>
    );
  }
}
