import React from "react";
import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  //set state for topics
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div>
      <h2 className="topicTitle"> Topics: {topics.length} </h2>
      <nav className="nav">
        {" "}
        Topics:
        {topics.map((topic) => {
          //for every topic we display we want to link that changes the url
          return (
            <Link key={topic.slug} to={`/topics/${topic.slug}`}>
              {topic.slug}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;
