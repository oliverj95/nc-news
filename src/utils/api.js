import axios from "axios";

const newsAPI = axios.create({
    baseURL: "https://oliver-j-nc-news.herokuapp.com/api"
})

export const getTopics = () => {
    return newsAPI
    .get("/topics")
    .then((res) => {
        return res.data.topics
    })
}

export const getArticles = (topicsValue) => {
  const ifTopics = topicsValue ? `/articles?topic=${topicsValue}` : "/articles"
return newsAPI
.get(ifTopics)
.then((res) => {
        return res.data.articles
    })
}

export const getSingleArticle = (article_id) => {
return newsAPI.get(`/articles/${article_id}`)
.then((res) => {
    return res.data.article
})
}

export const getComments = (article_id) => {
    return newsAPI.get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data.comments
    })
}
// getsinglearticle 
// pull back data for single article and render it

export const postComment = (article_id, inputValue) => {
    return newsAPI.post(`/articles/${article_id}/comments`, inputValue)
    .then((res) => {
        return res.data.newComment
    })
}

export const deleteComment = (comment_id) => {
    return newsAPI.delete(`/comments/${comment_id}`)
    .then((res) => {
        return res.data
    })
}