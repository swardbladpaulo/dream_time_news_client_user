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

      case "AUTHENTICATE_USER":
        return {
          ...state,
          authenticatedUser: action.payload,
          auth: { message: "You are logged in", status: true},
        };

        case "CURRENT_USER":
          return {
            ...state,
            currentUser: action.payload,
            auth: { message: "You are logged in", status: true},
          };

    case "ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
