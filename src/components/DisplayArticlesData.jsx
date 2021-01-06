import React, { useState, useEffect } from 'react';
import { getArticleData, getSpecificArticle } from '../modules/articlesData';
import { Button, Card } from 'semantic-ui-react';

const DisplayArticlesData = () => {
  const [singleArticle, setSingleArticle] = useState([])
  const fetchSingleArticle = async (event) => {
    let id = event.target.dataset.id
    let response = await getSpecificArticle(id)
    setSingleArticle(response.data.article)
  }

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
              fontWeight: 'bold',
              fontSize: 30,
              color: 'black',
              textAlign: 'center',
            }}
          >
            {article.title}
          </Card.Header>
          <Card.Meta
            data-cy="sub-title"
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'black',
              textAlign: 'center',
            }}
          >
            {article.sub_title}
          </Card.Meta>
          <Card.Description
            data-cy="content"
            style={{ fontWeight: 'small', fontSize: 15, color: 'black' }}
          >
            {article.content}
          </Card.Description>
          <Card.Meta data-cy="author-email">{article.author}</Card.Meta>
          <Card.Meta data-cy="created-at">{`Created at: ${article.created_at}`}</Card.Meta>
          <Card.Meta data-cy="updated-at">{`Updated at: ${article.updated_at}`}</Card.Meta>
          <Button
            data-id={article.id}
            data-cy={`read-me-button${article.id}`}
            onClick={(event) => fetchSingleArticle(event)}
          >Read More!</Button>
        </Card.Content>
      </Card >
    );
  });

  let articleDetails = singleArticle.map(article => {
    return (
      <>
        <p data-cy="article-title">{article.title}</p>
        <p data-cy="article-sub-title">{article.sub_title}</p>
        <p data-cy="article-content">{article.content}</p>
        <p data-cy="article-created-at">{article.created_at}</p>
        <p data-cy="article-updated-at">{article.updated_at}</p>
        <p data-cy="article-author">{article.author}</p>
      </>
    )
  })

  return (
    <>
      {articlesData.length > 0 && articleDetails.length === 0 && <div data-cy="index">{articleIndex}</div>}
      {articleDetails && <div data-cy="article-details">{articleDetails}</div>}
    </>
  );
};

export default DisplayArticlesData;
