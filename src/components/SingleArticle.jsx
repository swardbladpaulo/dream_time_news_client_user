import React, { useEffect } from "react";
import { Button, Container, Grid } from "semantic-ui-react";
import { getArticleData } from "../modules/articlesData";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

const SingleArticle = () => {
  const { singleArticle, errorMessage } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    getArticleData.show(id);
  }, [id]);
  return (
    <>
      <Grid>
        <Grid.Column width={9}>
          <h1 data-cy="article-title">{singleArticle.title}</h1>
          <h3 data-cy="article-sub-title">{singleArticle.sub_title}</h3>
          <p data-cy="article-content">{singleArticle.content}</p>
        </Grid.Column>
        <Grid.Column width={4}>
          <p data-cy="article-created-at">{`Created at: ${singleArticle.created_at}`}</p>
          <p data-cy="article-author">{singleArticle.author}</p>
        </Grid.Column>
      </Grid>
      <Button data-cy="back-button" as={NavLink} to="/">
        Back
      </Button>
      {errorMessage && (
        <Container data-cy="error-message-article">
          <h1>{errorMessage}</h1>
        </Container>
      )}
    </>
  );
};

export default SingleArticle;
