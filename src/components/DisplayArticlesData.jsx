import React, { useEffect } from "react";
import { getArticleData } from "../modules/articlesData";
import ArticleCard from "./ArticleCard";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "semantic-ui-react";

const DisplayArticlesData = () => {
  const dispatch = useDispatch();
  const { mainArticles } = useSelector((state) => state);

  useEffect(() => {
    getArticleData.index(dispatch);
  }, [dispatch]);

  let articleIndex;
  articleIndex = (
    <Card.Group itemsPerRow={3}>
      {mainArticles.map((article) => {
        return <ArticleCard article={{ ...article }} />;
      })}
    </Card.Group>
  );

  return (
    <>{mainArticles.length > 0 && <ul data-cy="index">{articleIndex}</ul>}</>
  );
};

export default DisplayArticlesData;
