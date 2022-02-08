import "./App.css";
import Articles from "./Components/Article-list";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/topics/:topic" element={<Articles />} />
        </Routes>        
      </div>
    </BrowserRouter>
  );
}

export default App;
