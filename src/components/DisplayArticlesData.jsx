import React, { useState, useEffect } from "react";
import { getArticleData } from "../modules/articlesData";
import { Card, Image } from "semantic-ui-react";

const DisplayArticlesData = () => {
  const [articlesData, setArticlesData] = useState([]);
  const getArticles = async () => {
    let result = await getArticleData();
    setArticlesData(result.data.articles);
  };

  useEffect(() => {
    getArticles();
  }, []);

  let articleIndex = articlesData.map((article) => {
    return (
      <Card key={article.id} data-cy={`article-${article.id}`}>
        <Card.Content>
          <Card.Header
            data-cy="title"
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "black",
              textAlign: "center",
            }}
          >
            {article.title}
          </Card.Header>
          <Card.Meta
            data-cy="sub-title"
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "black",
              textAlign: "center",
            }}
          >
            {article.subheader}
          </Card.Meta>
          <Image
            data-cy="image"
            size="small"
            wrapped
            ui={false}
            src={article.image}
          />
          <Card.Description
            data-cy="content"
            style={{ fontWeight: "small", fontSize: 15, color: "black" }}
          >
            {article.content}
          </Card.Description>
          <Card.Meta 
            data-cy="author"
            >
            {article.author}
          </Card.Meta>
          <Card.Meta 
            data-cy="date"
            >
            {article.date}
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  });

  return (
    <>{articlesData.length > 0 && <div data-cy="index">{articleIndex}</div>}</>
  );
};

export default DisplayArticlesData;
