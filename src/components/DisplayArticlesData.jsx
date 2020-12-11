import React, { useState, useEffect } from "react";
import { getArticleData } from "../modules/articlesData";
import { Card, Image } from "semantic-ui-react";

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
      <Card key={article.id} data-cy={`article-${article.id}`}>
        <Card.Content>
          <Card.Header
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
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "black",
              textAlign: "center",
            }}
          >
            {article.subheader}
          </Card.Meta>
          <Image size="small" wrapped ui={false} src={article.image_path} />
          <Card.Description
            style={{ fontWeight: "small", fontSize: 15, color: "black" }}
          >
            {article.content}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  });
  if (articlesData.length > 0) {
    return <div data-cy="index">{articleIndex}</div>;
  }
  return <></>;
};

export default DisplayArticlesData;
