import React, { useState, useEffect } from "react";
import { getArticleData } from "../modules/articlesData";

const DisplayArticlesData = () => {
  const [articlesData, setArticlesData] = useState([]);
  const getArticlesData = async () => {
    let result = await getArticleData();
    setArticlesData(result.data.articles);
  };

  useEffect(() => {
    getArticlesData();
  }, []);

  let articleIndex = articlesData.map((article) => {
    return (
      <div key={article.id} data-cy={`article-${article.id}`}>
        {article.title}
        {article.subheader}
        {article.content}
      </div>
    );
  });
  return (
    <>{articlesData.length > 0 && <div data-cy="index">{articleIndex}</div>}</>
  );
};

export default DisplayArticlesData;
