import { getArticles, getArticlesByTopic } from "../utils/api";
import React, { useState, useEffect } from "react";
import ArticleCard from "../Components/Article-card";
import "../styles/Articles.css";
import { useLocation } from "react-router-dom";

const Articles = (props) => {
  const { sortValue } = props;
  const [articles, setArticles] = useState([]);
  const { search } = useLocation();
  const queryParams = search.split("=")[1];


  useEffect(() => {
    if (queryParams) {
      getArticlesByTopic(queryParams, sortValue).then((article) => {
        setArticles(article, sortValue);
      });
    } else {
      getArticles(sortValue).then((article) => {
        setArticles(article)
      })
    }
  }, [queryParams, sortValue]);
console.log(sortValue)
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
                  created_at={article.created_at}
                  comments={article.comment_count}
                  thumb={"👍"}
                />
              </div>
            );
          })}
        </ul>
        <br />
      </div>
    </>
  );
};

export default Articles;
