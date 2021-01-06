import React, { useState, useEffect } from "react";
import { getArticleData, getSpecificArticle } from "../modules/articlesData";
// import { Button, Card } from 'semantic-ui-react';
import ArticleCard from "./ArticleCard";
import SingleArticle from "./SingleArticle";
import { useSelector, useDispatch } from "react-redux";

const DisplayArticlesData = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articlesIndex);
  // const [articlesData, setArticlesData] = useState([]);
  const getArticles = async () => {
    let result = await getArticleData();
    dispatch({ type: "SET_ARTICLES_INDEX", payload: result.data.articles });
    // setArticlesData(result.data.articles);
    // setSingleArticle();
  };

  // const [singleArticle, setSingleArticle] = useState();
  // const fetchSingleArticle = async (event) => {
  //   let id = event.target.dataset.id;
  //   let response = await getSpecificArticle(id);
  //   setSingleArticle(response.data.article);
  // };

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
        <ArticleCard articles={articles} />
        {/* <ArticleCard /> */}
      </div>
      {/* {
        singleArticle && <SingleArticle />
        // <>
        //   <p data-cy="article-title">{singleArticle.title}</p>
        //   <p data-cy="article-sub-title">{singleArticle.sub_title}</p>
        //   <p data-cy="article-content">{singleArticle.content}</p>
        //   <p data-cy="article-created-at">{singleArticle.created_at}</p>
        //   <p data-cy="article-updated-at">{singleArticle.updated_at}</p>
        //   <p data-cy="article-author">{singleArticle.author}</p>
        //   <button data-cy="back-button" onClick={() => getArticles()}>back</button>
        // </>
      } */}
    </>
  );
};

export default DisplayArticlesData;
