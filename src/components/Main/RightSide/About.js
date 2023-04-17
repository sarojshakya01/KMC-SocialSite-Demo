import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="widget widget-about">
        <img src="./images/logo.png" alt="" />
        <h3>Track Time on Workwise</h3>
        <span>Pay only for the Hours worked</span>
        <div className="sign_link">
          <h3>
            <a href="./sign-in.html" title="">
              Sign up
            </a>
          </h3>
          <a href="./index.html#" title="">
            Learn More
          </a>
        </div>
      </div>
    );
  }
}

export default About;
