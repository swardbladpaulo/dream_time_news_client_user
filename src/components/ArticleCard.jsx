import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ArticleCard = ({ article }) => {
  const { t } = useTranslation();

  return (
    <Card key={article.id} data-cy={`article-${article.id}`}>
      <Card.Content>
      <Image fluid src={article.image} />
        <Card.Header
          data-cy="title"
          style={{
            marginTop: 15,
            marginBottom: 10,
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
            color: "#4f5359",
            textAlign: "justified",
            marginBottom: 15,
            lineHeight: 1.2,
          }}
        >
          {article.sub_title}
        </Card.Meta>
        <Card.Meta data-cy="author-email">{article.author}</Card.Meta>
        <Card.Meta 
        data-cy="created-at"
        style={{
          marginBottom: 15,
        }}
        >{`${t ("CreatedAt")} ${article.created_at}`}</Card.Meta>
        <Button fluid
          data-id={article.id}
          data-cy={`read-me-button${article.id}`}
          as={NavLink}
          to={`/articles/${article.id}`}
          color="red"
        >
          {t ("ReadMore")}
        </Button>
      </Card.Content>
    </Card>
  );
};

export default ArticleCard;
