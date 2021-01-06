import React from "react";

const SingleArticle = ({singleArticle, getArticles}) => {
  return (
    <>{singleArticle && 
    <div>
      <p data-cy="article-title">{singleArticle.title}</p>
      <p data-cy="article-sub-title">{singleArticle.sub_title}</p>
      <p data-cy="article-content">{singleArticle.content}</p>
      <p data-cy="article-created-at">{singleArticle.created_at}</p>
      <p data-cy="article-updated-at">{singleArticle.updated_at}</p>
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
