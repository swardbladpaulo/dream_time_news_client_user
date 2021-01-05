import axios from "axios";

const getArticleData = async () => {
  const response = await axios.get("/articles");
  return response;
};

const getSpecificArticle = async (id) => {
  const response = await axios.get(`/articles/${id}`);
  return response;
};

export { getArticleData, getSpecificArticle };
