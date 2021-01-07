import axios from "axios";

const getArticleData = {
  async index(dispatch) {
    let result = await axios.get("/articles");
    dispatch({ type: "SET_ARTICLES_INDEX", payload: result.data.articles });
  },

  async show(articleId, dispatch) {
    try {
      let response = await axios.get(`/articles/${articleId}`);
      dispatch({ type: "SET_SINGLE_ARTICLE", payload: response.data.article });
    } catch (error) {
      dispatch({ type: "ERROR_MESSAGE", payload: error.response.data.message });
    }
  },
};

export { getArticleData };
