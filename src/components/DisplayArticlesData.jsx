import React, { useEffect } from 'react';
import { getArticleData } from '../modules/articlesData';
import ArticleCard from './ArticleCard';
// import SingleArticle from './SingleArticle';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'semantic-ui-react';

const DisplayArticlesData = () => {
  // const dispatch = useDispatch();
  // const articles = useSelector((state) => state.articlesIndex);
  // const singleArticle = useSelector((state) => state.singleArticle);

  // const getArticles = async () => {
  //   const result = await getArticleData();
  //   dispatch({ type: 'SET_ARTICLES_INDEX', payload: result.data.articles });
  //   dispatch({ type: 'SET_SINGLE_ARTICLE' });
  // };

  // const fetchSingleArticle = async (event) => {
  //   const id = event.target.dataset.id;
  //   const response = await getSpecificArticle(id);
  //   dispatch({ type: 'SET_SINGLE_ARTICLE', payload: response.data.article });
  // };

  // useEffect(() => {
  //   getArticles();
  // }, []);

  const dispatch = useDispatch() 
  const { mainArticles } = useSelector(state => state)

  useEffect(() => {
    getArticleData.index(dispatch)
  }, [dispatch])

  let articleIndex;
  articleIndex = (
    <Card.Group itemsPerRow={3}>
    {mainArticles.map((article) => {
      return <ArticleCard article={{ ...article }} />
    })
    }
    </Card.Group>
  )

  return (
    <>
      {/* {articlesIndex.length > 0 && !singleArticle && ( */}
      {mainArticles.length > 0 && (
        <ul data-cy="index">{articleIndex}</ul>
      )}
      {/* <SingleArticle  /> */}
    </>
  );
};

export default DisplayArticlesData;
