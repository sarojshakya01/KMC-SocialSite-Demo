import { Component } from "react";
import Post from "./Post";

class PostSection extends Component {
  render() {
    return (
      <div className="posts-section">
        <Post />
      </div>
    );
  }
}

export default PostSection;
