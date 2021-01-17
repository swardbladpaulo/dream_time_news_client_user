import React, { useEffect } from "react";
import {
  Button,
  Container,
  Divider,
  Image,
  Header,
  Grid,
  Message,
} from "semantic-ui-react";
import { getArticleData } from "../modules/articlesData";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SingleArticle = () => {
  const { t } = useTranslation();
  const { singleArticle, errorMessage } = useSelector(state => state);
  const { id } = useParams();

  useEffect(() => {
    getArticleData.show(id);
  }, [id]);
  return (
    <Container>
      <Grid>
        <Grid.Column width={10}>
          <Header
            data-cy="article-title"
            style={{
              marginTop: 15,
              marginBottom: 10,
              fontWeight: "bold",
              fontSize: 40,
              color: "black",
              textAlign: "left",
            }}
          >
            {singleArticle.title}
          </Header>
          <p data-cy="article-created-at">{`${t("CreatedAt")} ${
            singleArticle.created_at
          }`}</p>
          <Image src={singleArticle.image} />
          <h3
            data-cy="article-sub-title"
            style={{
              fontWeight: "bold",
              fontSize: 25,
              color: "#4f5359",
              textAlign: "justified",
              marginBottom: 15,
              lineHeight: 1.2,
            }}
          >
            {singleArticle.sub_title}
          </h3>
          <Divider />

          <Image
            data-cy="article-author"
            src="./assets/journalist.png"
            avatar
            size="mini"
          />
          {singleArticle.author}
          <Divider />

          <p
            data-cy="article-content"
            style={{
              fontSize: 18,
              color: "#4f5359",
              textAlign: "justified",
              marginBottom: 20,
              lineHeight: 1.4,
            }}
          >
            {singleArticle.content}
          </p>
        </Grid.Column>
        <Grid.Column width={5}></Grid.Column>
      </Grid>
      <Button
        data-cy="back-button"
        as={NavLink}
        to="/"
        color="red"
        size="large"
        style={{
          marginBottom: 40,
        }}
      >
        {t("Back")}
      </Button>
      {errorMessage && (
        <Message
          color="red"
          data-cy="error-message-article"
          header={errorMessage}
        />
      )}
    </Container>
  );
};

export default SingleArticle;
