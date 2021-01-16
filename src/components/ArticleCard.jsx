import React from "react";
import { Button, Card } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ArticleCard = ({ article }) => {
  const { t } = useTranslation();

  return (
    <Card key={article.id} data-cy={`article-${article.id}`}>
      <Card.Content>
        <Card.Header
          data-cy="title"
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "black",
            textAlign: "left",
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
            textAlign: "left",
          }}
        >
          {article.sub_title}
        </Card.Meta>
        <Card.Meta data-cy="author-email">{article.author}</Card.Meta>
        <Card.Meta data-cy="created-at">{`${t ("menuHeader_13")} ${article.created_at}`}</Card.Meta>
        <Button
          data-id={article.id}
          data-cy={`read-me-button${article.id}`}
          as={NavLink}
          to={`/articles/${article.id}`}
          color="orange"
        >
          {t ("menuHeader_12")}
        </Button>
      </Card.Content>
    </Card>
  );
};

export default ArticleCard;
