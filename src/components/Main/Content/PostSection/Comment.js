import { Component } from "react";

class Comment extends Component {
  render() {
    const comments = [
      {
        fullname: "Saroj Shakya",
        username: "testuser1",
        text: "I am interested",
      },
      {
        fullname: "Ram Shakya",
        username: "testuser2",
        text: "I am interested too",
      },
    ];
    return (
      <div className="comment-section">
        <div className="comment-sec">
          <ul>
            {comments.map((comment, i) => {
              return (
                <li key={i}>
                  <div className="comment-list">
                    <div className="bg-img">
                      <img src="./images/bg-img1.png" alt="" />
                    </div>
                    <div className="comment">
                      <h3>{comment.fullname}</h3>
                      <span>
                        <img src="./images/clock.png" alt="" /> 3 min ago
                      </span>
                      <p>{comment.text}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="post-comment">
          <div className="cm_img">
            <img src="./images/bg-img4.png" alt="" />
          </div>
          <div className="comment_box">
            <form>
              <input type="text" placeholder="Post a comment" />
              <button type="button" onClick={this.handlePostComment}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
