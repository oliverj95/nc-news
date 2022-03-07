import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://oliver-j-nc-news.herokuapp.com/api",
});

export const getTopics = () => {
  return newsAPI.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (sort_value) => {
  const isSorted = sort_value ? `/articles?sort_by=${sort_value}` : "/articles";
  return newsAPI.get(isSorted).then((res) => {
    return res.data.articles;
  });
};

export const getArticlesByTopic = (topicsValue, sortValue) => {
  const ifTopics = topicsValue && sortValue ? `/articles?topic=${topicsValue}&sort_by=${sortValue}` : `/articles?topic=${topicsValue}`;
  return newsAPI.get(ifTopics).then((res) => {
    return res.data.articles;
  });
};

export const getSingleArticle = (article_id) => {
  return newsAPI.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getComments = (article_id) => {
  return newsAPI.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postComment = (article_id, inputValue) => {
  return newsAPI
    .post(`/articles/${article_id}/comments`, inputValue)
    .then((res) => {
      return res.data.newComment;
    });
};

export const deleteComment = (comment_id) => {
  return newsAPI.delete(`/comments/${comment_id}`).then((res) => {
    return res.data;
  });
};

export const patchVotes = (article_id, voteCount) => {
  return newsAPI.patch(`/articles/${article_id}`, voteCount).then((res) => {
    console.log(res.data.article);
    return res.data.article;
  });
};

//created_at, comment count, votes
