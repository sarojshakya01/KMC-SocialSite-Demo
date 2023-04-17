import { Component } from "react";

class PostTop extends Component {
  render() {
    return (
      <div className="post-topbar">
        <div className="user-picy">
          <img src="./images/saroj-pic.jpeg" alt="" />
        </div>
        <div className="post-st">
          <ul>
            <li>
              <a className="post_project" href="./index.html#" title="">
                Post a Project
              </a>
            </li>
            <li>
              <a className="post-jb active" href="./index.html#" title="">
                Post a Job
              </a>
            </li>
            {/* <li>
              <a className="test active" href="./index.html#" title="">
                Test
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default PostTop;
