import axios from "axios";

const getArticleData = async () => {
  const response = await axios.get("/articles");

  return response;
};

export { getArticleData };
