import React from 'react'

const articleCard = ({props}) => {
  return (
    <div>
      <h1 data-cy="article-title">{props.title}</h1>
      <h3 data-cy="article-sub-title">{props.sub_title}</h3>
      <p data-cy="article-content">{props.content}</p>
      <p data-cy="article-created-at">{props.created_at}</p>
      <p data-cy="article-updated-at">{props.updated_at}</p>
    </div>
  )
}

export default articleCard
