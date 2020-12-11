import React, { useState, useEffect } from 'react';
import { getData } from '../modules/articlesData'

const DisplayArticlesData = (props) => {
  const [articlesData, setArticlesData] = useState([])
  const getArticlesData = async () => {
    let result = await getData();
    setArticlesData(result.data.articles)
  }

  useEffect(() => {
    getArticlesData()
  }, [])

  let dataIndex = articlesData.map((item) => {
    return (
      <div key={item.id} data-cy={`article-${item.id}`}>
        {item.title}{item.subheader}{item.content}
        {localStorage.getItem('authenticated') === 'true' &&
          <button
            data-article={item.id}
            onClick={(e) => props.articles(e)}
          >
            Articles
          </button>
        }
      </div>
    )
  })
  return (
    <>
      {articlesData.length > 0 &&
      <div id="index">
      {dataIndex}
      </div>
      }
      </>
  )
}

export default DisplayArticlesData
