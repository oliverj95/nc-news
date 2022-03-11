import "../styles/Article-card.css";
import { patchVotes } from "../utils/api";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/User";

const ArticleCard = (props) => {
  const { title, author, topic, votes, article_id, created_at, comments } = props;

  const [voteCount, setVoteCount] = useState({ inc_votes: 1 });
  const {isLoggedIn} = useContext(UserContext)

  
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
            </li>
    </div>
  );
};

export default ArticleCard;
