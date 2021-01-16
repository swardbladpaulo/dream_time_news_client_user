import axios from "axios";
import store from "../state/store/configureStore";

const getArticleData = {
  async index() {
    let result = await axios.get("/articles");
    store.dispatch({
      type: "SET_ARTICLES_INDEX",
      payload: result.data.articles,
    });
  },

  async show(articleId) {
    try {
      let response = await axios.get(`/articles/${articleId}`);
      store.dispatch({
        type: "SET_SINGLE_ARTICLE",
        payload: response.data.article,
      });
    } catch (error) {
      store.dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: error.response.data.message,
      });
    }
  },
};

export { getArticleData };
