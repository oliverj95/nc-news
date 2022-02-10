import { getArticles } from "../utils/api";
import React, { useState, useEffect } from "react";
import ArticleCard from "../Components/Article-card"
import "../styles/Articles.css";

const Articles = (props) => {
  const { topicsValue } = props;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(topicsValue)
    .then((res) => {
      setArticles(res);
    });
  }, [topicsValue]);
  
  return (
    <>
      <div className="article-container">
        <h2> Articles </h2>
        <ul>
          {articles.map((article) => {
            return (
              <div>
              <ArticleCard 
              key={article.article_id}
              title={article.title}
              author={article.author} 
              topic={article.topic} 
              votes={article.votes}
              article_id={article.article_id}
              thumb={"👍"}
              />
        </div>
            );
          })}
        </ul>
        <br />
      </div>
    </>
  )
        }


export default Articles;
