import axios from 'axios';


const getArticleData = async () => {
  let headers = await sessionStorage.getItem("articles");
  headers = JSON.parse( headers );
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"
  };

  const response = await axios.get("/articles", {
    headers: headers
  });

  return response;
};

export { getArticleData };