import { Component } from "react";
import PostSection from "./PostSection";
import PostTop from "./PostTop";

class Content extends Component {
  render() {
    return (
      <div className="content col-lg-6 col-md-8 no-pd">
        <div className="main-ws-sec">
          <PostTop />
          <PostSection />
        </div>
      </div>
    );
  }
}

export default Content;
