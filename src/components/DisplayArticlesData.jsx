import React, { useEffect } from 'react';
import { getArticleData, getSpecificArticle } from '../modules/articlesData';
// import { Button, Card } from 'semantic-ui-react';
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
    // setArticlesData(result.data.articles);
    // setSingleArticle();
  };

  const fetchSingleArticle = async (event) => {
    let id = event.target.dataset.id;
    const response = await getSpecificArticle(id);
    dispatch({ type: 'SET_SINGLE_ARTICLE', payload: response.data.article });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      {/* {articlesData.length > 0 && !singleArticle && (
        <div data-cy="index">
          {articleIndex}
          <ArticleCard />
        </div>
      )} */}

      <div data-cy="index">
        <ArticleCard articles={articles}
        fetchSingleArticle={fetchSingleArticle} />
        {/* <ArticleCard /> */}
      </div>
      {
        <SingleArticle singleArticle={singleArticle}
        getArticles={getArticles} />

        // <>
        //   <p data-cy="article-title">{singleArticle.title}</p>
        //   <p data-cy="article-sub-title">{singleArticle.sub_title}</p>
        //   <p data-cy="article-content">{singleArticle.content}</p>
        //   <p data-cy="article-created-at">{singleArticle.created_at}</p>
        //   <p data-cy="article-updated-at">{singleArticle.updated_at}</p>
        //   <p data-cy="article-author">{singleArticle.author}</p>
        //   <button data-cy="back-button" onClick={() => getArticles()}>back</button>
        // </>
      }
    </>
  );
};

export default DisplayArticlesData;
