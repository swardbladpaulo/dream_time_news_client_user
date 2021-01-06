import React from "react";

const SingleArticle = ({singleArticle, getArticles}) => {
  return (
    <>{singleArticle && 
    <div>
      <h1 data-cy="article-title">{singleArticle.title}</h1>
      <h3 data-cy="article-sub-title">{singleArticle.sub_title}</h3>
      <p data-cy="article-content">{singleArticle.content}</p>
      <p data-cy="article-created-at">{`Created at: ${singleArticle.created_at}`}</p>
      <p data-cy="article-updated-at">{`Updated at: ${singleArticle.updated_at}`}</p>
      <p data-cy="article-author">{singleArticle.author}</p>
      <button 
      data-cy="back-button" 
      onClick={() => getArticles()}>
        back
      </button>
    </div>
  }
  </>
  );
};

export default SingleArticle;
