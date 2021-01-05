// import React from "react";
// import { Button, Card } from 'semantic-ui-react';


// const ArticleCard = () => {


//   let articleIndex = articlesData.map((article) => {
//     return (
//       <Card key={article.id} data-cy={`article-${article.id}`}>
//         <Card.Content>
//           <Card.Header
//             data-cy="title"
//             style={{
//               fontWeight: "bold",
//               fontSize: 30,
//               color: "black",
//               textAlign: "center",
//             }}
//           >
//             {article.title}
//           </Card.Header>
//           <Card.Meta
//             data-cy="sub-title"
//             style={{
//               fontWeight: "bold",
//               fontSize: 20,
//               color: "black",
//               textAlign: "center",
//             }}
//           >
//             {article.sub_title}
//           </Card.Meta>
//           <Card.Description
//             data-cy="content"
//             style={{ fontWeight: "small", fontSize: 15, color: "black" }}
//           >
//             {article.content}
//           </Card.Description>
//           <Card.Meta data-cy="author-email">{article.author}</Card.Meta>
//           <Card.Meta data-cy="created-at">{`Created at: ${article.created_at}`}</Card.Meta>
//           <Card.Meta data-cy="updated-at">{`Updated at: ${article.updated_at}`}</Card.Meta>
//           <Button data-cy="read-me-button" onClick={() => setSingleArticle}>
//             Read More!
//           </Button>
//         </Card.Content>
//       </Card>
//     );
//   });
//   return (
//     {articleIndex}
//   )
// };

// export default ArticleCard;

// return (
//   <div>
//     <h1 data-cy="article-title">{props.title}</h1>
//     <h3 data-cy="article-sub-title">{props.sub_title}</h3>
//     <p data-cy="article-content">{props.content}</p>
//     <p data-cy="article-created-at">{props.created_at}</p>
//     <p data-cy="article-updated-at">{props.updated_at}</p>
//   </div>
// )
