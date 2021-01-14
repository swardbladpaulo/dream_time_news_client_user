import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARTICLES_INDEX":
      return {
        ...state,
        mainArticles: action.payload,
      };

    case "SET_SINGLE_ARTICLE":
      return {
        ...state,
        singleArticle: action.payload,
      };

    case "SET_CURRENT_USER":
      return {
        ...state,
        ...action.payload,
      };

    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
