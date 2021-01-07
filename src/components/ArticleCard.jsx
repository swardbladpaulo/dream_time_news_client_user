import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { NavLink } from "react-router-dom"

const ArticleCard = ({ article }) => {
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
          // onClick={(event) => fetchSingleArticle(event)}
          as={NavLink}
          to={`/articles/${article.id}`}
        >
          Read More!
        </Button>
      </Card.Content>
    </Card>
  )
}


// const ArticleCard = ({ article }) => 
// // ({ articlesIndex }) => {
// //   let articleIndex = articlesIndex.map((article) => {
//     return (
//       <Card key={article.id} data-cy={`article-${article.id}`}>
//         <Card.Content>
//           <Card.Header
//             data-cy="title"
//             style={{
//               fontWeight: 'bold',
//               fontSize: 30,
//               color: 'black',
//               textAlign: 'center',
//             }}
//           >
//             {article.title}
//           </Card.Header>
//           <Card.Meta
//             data-cy="sub-title"
//             style={{
//               fontWeight: 'bold',
//               fontSize: 20,
//               color: 'black',
//               textAlign: 'center',
//             }}
//           >
//             {article.sub_title}
//           </Card.Meta>
//           <Card.Description
//             data-cy="content"
//             style={{ fontWeight: 'small', fontSize: 15, color: 'black' }}
//           >
//             {article.content}
//           </Card.Description>
//           <Card.Meta data-cy="author-email">{article.author}</Card.Meta>
//           <Card.Meta data-cy="created-at">{`Created at: ${article.created_at}`}</Card.Meta>
//           <Card.Meta data-cy="updated-at">{`Updated at: ${article.updated_at}`}</Card.Meta>
//           <Button
//             data-id={article.id}
//             data-cy={`read-me-button${article.id}`}
//             onClick={(event) => fetchSingleArticle(event)}
//             as={NavLink}
//             to={`/articles/${article.id}`}
//           >
//             Read More!
//           </Button>
//         </Card.Content>
//       </Card>
//     );
//   });
//   return <>{articleIndex && articleIndex}</>;
// };

export default ArticleCard;
