import axios from "axios";

const newsAPI = axios.create({
    baseURL: "https://oliver-j-nc-news.herokuapp.com/api"
})

export const getTopics = () => {
    return newsAPI.get("/topics").then((res) => {
        return res.data.topics
    })
}

export const getArticles = () => {
    return newsAPI.get("/articles").then((res) => {
        return res.data.articles
    })
}