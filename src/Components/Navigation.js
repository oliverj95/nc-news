import React from "react";
import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css"


const Navigation = (props) => {
  //set state for topics
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);
  const { setTopicsValue, setSortValue } = props;
  const handleTopicValue = (event) => {
    setTopicsValue(event.target.value);
  };

  const handleSort = (event) => {
    setSortValue(event.target.value);
  };

  return (
    
    <div>
      <h2 className="topicTitle"> Topics: {topics.length} </h2>
      <nav className="nav">
        {" "}
        
        <Link to={"/articles"}>
          <h3 onChange={handleTopicValue} className="allTopics">
            {" "}
            All{" "}
          </h3>
        </Link>
        {topics.map((topic) => {
          return (
            <Link
              key={topic.slug}
              className="categories-link"
              to={`/articles?topics=${topic.slug}`}
            >
              <h3 className="topicz">{topic.slug}</h3>
            </Link>
          );
        })}
        <h3 className="sort_by-title">Sort By</h3>
        <select onChange={handleSort} className="sort_by-container">
          <option value="votes">Votes</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
        </select>
      </nav>
    </div>
  );
};

export default Navigation;
