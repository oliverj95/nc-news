import { getArticles } from "../utils/api";
import React, { useState, useEffect } from "react";
import "../styles/Articles.css";
import { Link } from "react-router-dom";

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
        <h2> Articles: {articles.length} </h2>
        <ul>
          {articles.map((article) => {
            return (
              <li className="article-list" key={article}>
                <Link
                  key={article.article_id}
                  to={`/articles/${article.article_id}`}
                >
                  Title: {article.title} <br />
                </Link>
                Author: {article.author} <br />
                Topic: {article.topic} <br />
                Votes: {article.votes} <br />
              </li>
            );
          })}
        </ul>
        <br />
      </div>
    </>
  );
};

export default Articles;
