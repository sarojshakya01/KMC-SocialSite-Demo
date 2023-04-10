import { Component } from "react";
import Content from "./Content";
import LeftNav from "./LeftNav";
import RigtNav from "./RightNav";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="main-section">
          <div className="container">
            <div className="main-section-data">
              <div className="row">
                <LeftNav />
                <Content />
                <RigtNav />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
