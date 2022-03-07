import "../styles/Article-card.css";
import { patchVotes } from "../utils/api";
import { useState } from "react";
import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  const { thumb, title, author, topic, votes, article_id, created_at, comments } = props;

  const [voteCount, setVoteCount] = useState({ inc_votes: 1 });

  const handleVoteCount = (event) => {
    event.preventDefault();
    patchVotes(article_id, voteCount)
      .then((res) => {
        setVoteCount((voteCount.votes++));
        window.location.reload();

        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <div>
      <li className="article-list" key={article_id}>
        <Link key={article_id} to={`/articles/${article_id}`}>
          <div> {title}</div>
          </Link>
          <div>author: {author} </div>
          <div>topic: {topic}</div>
          <div>votes: {votes} </div>
          <div>date: {created_at}</div>
            <div>comments: {comments}</div>
          <div className="THUMB" onClick={handleVoteCount}>{thumb}</div>
        
      </li>
    </div>
  );
};

export default ArticleCard;
