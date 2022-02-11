import "./App.css";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import FullArticle from "./Components/Full-Article";
import ArticleCard from "./Components/Article-card"


function App() {
const [topicsValue, setTopicsValue] = useState("")

  return (
    
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation setTopicsValue={setTopicsValue}/>
        <Routes>
        <Route path="/" element={<Articles topicsValue={topicsValue}/>}/>
        <Route path="/articles/:article_id" element = {<FullArticle />} />
        <Route path="/articles?topic=:topic_slug" element = {<ArticleCard />} />
        </Routes>        
      </div>
    </BrowserRouter>
  );
}

export default App;
