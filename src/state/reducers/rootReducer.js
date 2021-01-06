import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARTICLES_INDEX":
      return {
        ...state,
        articlesIndex: action.payload,
      };

    case "SET_SINGLE_ARTICLE":
      return {
        ...state,
        singleArticle: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
