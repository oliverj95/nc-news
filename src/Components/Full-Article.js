import { useContext, useEffect, useState } from "react";
import { getSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import { getComments, postComment } from "../utils/api";
import "../styles/Full-Article.css";
import CommentCard from "../Components/Comment-card";
import { UserContext } from "../Contexts/User";
import { deleteComment } from "../utils/api";



const FullArticle = () => {
  const [articleDetails, setArticleDetails] = useState({});
  const [commentData, setCommentData] = useState([]);
  const { article_id } = useParams();
  const { loggedInUser, isLoggedIn} = useContext(UserContext)

  const [inputValue, setInputValue] = useState({
    username: loggedInUser.username,
    body: "",
  });

  const handleDelete = (value) => () => {
    deleteComment(value)
  
  };

  const handleInputValue = (event) => {
    setInputValue((currentValue) => {
      const newInput = { ...currentValue };
     if (event.target.className === "post-comment-body") {
        newInput.body = event.target.value;
      }
      return newInput;
    });
  };

  const handleSubmit = (event) => {
    if (isLoggedIn) {
      event.preventDefault();
    postComment(article_id, inputValue)

  } else {
    alert('Please log in to comment')
  }
    }
    

  useEffect(() => {
    getSingleArticle(article_id).then((theArticle) => {
      setArticleDetails(theArticle);
    });
  }, [article_id]);

  useEffect(() => {
    getComments(article_id).then((theComments) => {
      setCommentData(theComments);
    });
  }, [article_id, commentData])
  ;

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
          className="post-comment-body"
          type="text"
          placeholder="Comment"
        ></input>
        <button className="submit-comment-button">submit</button>
      </form>
      <ul className="articleComments">
        {commentData.map((comment) => {
          // return (
          //   // <CommentCard
          //   //   key={comment.comment_id}
          //   //   body={comment.body}
          //   //   author={comment.author}
          //   //   votes={comment.votes}
          //   //   comment_id={comment.comment_id}
          //   // />
          // );
          return <li key={comment.comment_id}>
            <h3>{comment.author}</h3>
            <h4>Date created:{comment.created_at} </h4>
            <h4>Votes: {comment.votes}</h4>
            <p>{comment.body}</p>
            {loggedInUser.username === comment.author ? <button onClick={handleDelete(comment.comment_id)}>Delete</button> : null}
          </li>
          

        })}
      </ul>
    </div>
  );
};

export default FullArticle;
