import "./App.css";
import Login from "./Components/Login";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FullArticle from "./Components/Full-Article";
import { UserContext } from "./Contexts/User";

function App() {
  const [topicsValue, setTopicsValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});
  const isLoggedIn = Object.keys(loggedInUser).length > 0;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ loggedInUser, setLoggedInUser, isLoggedIn }}
      >
        <div className="App">
          <Header />
          <Navigation
            setTopicsValue={setTopicsValue}
            setSortValue={setSortValue}
          />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route
              path="/articles"
              element={
                <Articles sortValue={sortValue} topicsValue={topicsValue} />
              }
            />
            <Route path="/articles/:article_id" element={<FullArticle />} />
            <Route path="/articles?topic=:topic_slug" element={<Articles />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
