import React, { useEffect } from "react";
import { getArticleData } from "../modules/articlesData";
import ArticleCard from "./ArticleCard";
import { useSelector } from "react-redux";
import { Card } from "semantic-ui-react";

const DisplayArticlesData = () => {
  const { mainArticles } = useSelector((state) => state);

  useEffect(() => {
    getArticleData.index();
  }, []);

  let articleIndex;
  articleIndex = (
    <Card.Group itemsPerRow={3}>
      {mainArticles.map((article) => {
        return <ArticleCard article={{ ...article }} />;
      })}
    </Card.Group>
  );

  return (
    <>{mainArticles.length > 0 && <div data-cy="index">{articleIndex}</div>}</>
  );
};

export default DisplayArticlesData;
