import React, { useEffect } from "react";
import { getArticleData } from "../modules/articlesData";
import ArticleCard from "./ArticleCard";
import { useSelector } from "react-redux";
import { Card, Container } from "semantic-ui-react";

const DisplayArticlesData = () => {
  const { mainArticles } = useSelector(state => state);

  useEffect(() => {
    getArticleData.index();
  }, []);

  let articleIndex;
  articleIndex = (
    <Card.Group
      itemsPerRow={3}
      style={{
        paddingBottom: 50,
      }}
    >
      {mainArticles.map(article => {
        return <ArticleCard article={{ ...article }} />;
      })}
    </Card.Group>
  );

  return (
    <Container>
      {mainArticles.length > 0 && <div data-cy="index">{articleIndex}</div>}
    </Container>
  );
};

export default DisplayArticlesData;
