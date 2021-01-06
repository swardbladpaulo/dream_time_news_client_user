import React, { useEffect } from 'react';
import { getArticleData, getSpecificArticle } from '../modules/articlesData';
import ArticleCard from './ArticleCard';
import SingleArticle from './SingleArticle';
import { useSelector, useDispatch } from 'react-redux';

const DisplayArticlesData = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articlesIndex);
  const singleArticle = useSelector((state) => state.singleArticle);

  const getArticles = async () => {
    const result = await getArticleData();
    dispatch({ type: 'SET_ARTICLES_INDEX', payload: result.data.articles });
    dispatch({ type: 'SET_SINGLE_ARTICLE' });
  };

  const fetchSingleArticle = async (event) => {
    const id = event.target.dataset.id;
    const response = await getSpecificArticle(id);
    dispatch({ type: 'SET_SINGLE_ARTICLE', payload: response.data.article });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      {articles.length > 0 && !singleArticle && (
        <div data-cy="index">
          <ArticleCard
            articles={articles}
            fetchSingleArticle={fetchSingleArticle}
          />
        </div>
      )}
      <SingleArticle singleArticle={singleArticle} getArticles={getArticles} />
    </>
  );
};

export default DisplayArticlesData;
