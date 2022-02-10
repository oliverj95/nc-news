import React from "react";
import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";


const Navigation = (props) => {
  //set state for topics
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);
  const {setTopicsValue} = props;
  const handleTopicValue= (event) => {
      setTopicsValue(event.target.value)
   
  }
  return (
    <div>
      <h2 className="topicTitle"> Topics: {topics.length} </h2>
      <nav className="nav">
        {" "}
        Topics:
        <select onChange={handleTopicValue}>
            {topics.map((topic) => {
          return (
              <option key={topic.slug}>
                  {topic.slug}
            </option>
          );
        })}
        </select>
        </nav>
        </div>
  );
};

export default Navigation;
