import React from "react";
import { getArticles } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

const Articles = ({topicsValue}) => {
  const [articles, setArticles] = useState([]);
  const params = useParams()
  console.log(params)
  useEffect(() => {
    getArticles(params).then((articles) => {
      setArticles(articles);
    });
  }, [topicsValue]);

  return (
    <div className="article-container">
      <h2 className="article-list-title"> Articles: {articles.length} </h2>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article}>
             Title: {article.title} <br />
             Author: {article.author} <br />
             Topic: {article.topic} <br />
             Votes: {article.votes} <br />
            </li>
          );
        })}
      </ul>            
      <br /> 

      </div>
  );
};

export default Articles;
