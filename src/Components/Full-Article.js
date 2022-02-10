import { useEffect, useState } from "react";
import { getSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import { getComments, postComment } from "../utils/api";
import "../styles/Full-Article.css";

const FullArticle = () => {
  const [articleDetails, setArticleDetails] = useState({});
  const [commentData, setCommentData] = useState([]);
  const { article_id } = useParams();

  const [inputValue, setInputValue] = useState({
    username: "",
    body: "",
   });


  const handleInputValue = (event) => {
    setInputValue((currentValue) => {
      const newInput = { ...currentValue };
      if (event.target.className === "post-comment-username") {
        newInput.username = event.target.value
      } else if (event.target.className === "post-comment-body") {
        newInput.body = event.target.value;
      }
      return newInput;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue)
    postComment(article_id, inputValue)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSingleArticle(article_id).then((theArticle) => {
      setArticleDetails(theArticle);
    });
  }, [article_id]);

  useEffect(() => {
    getComments(article_id).then((theComments) => {
      setCommentData(theComments);
    });
  }, [article_id]);

  return (
    <div className="fullArticleDetails">
      <div className="full-article-title">
        {articleDetails.title} <br />
      </div>
      <div className="author-heading"> Author: {articleDetails.author} </div>
      <p className="article-body">
        {" "}
        {articleDetails.body}
        <br />
        Votes: {articleDetails.votes}
      </p>
      <h3 className="commentsTitle"> Comments:</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputValue}
          required
          className="post-comment-username"
          type="text"
          placeholder="Username"
        ></input>
        <input
          onChange={handleInputValue}
          required
          className="post-comment-body"
          type="text"
          placeholder="Comment"
        ></input>
        <button className="submit-comment-button">submit</button>
      </form>
      <ul className="articleComments">
        {commentData.map((comment) => {
          return (
            <li key={comment.comment_id} className="indComment">
              {comment.body} <br />
              Username: {comment.author} <br />
              comment votes: {comment.votes}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FullArticle;
