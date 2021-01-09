import React from "react";
import DisplayArticlesData from './components/DisplayArticlesData'
import SingleArticle from './components/SingleArticle'
import { Switch, Route } from "react-router-dom"
import Headers from './components/Headers'

const App = () => {
  return (
    <>
      <h1>Hello Dream Time News!</h1>
      <Switch>
        <Route exact path="/" component={DisplayArticlesData}></Route>
        <Route exact path="/articles/:id" component={SingleArticle}></Route>
        <Route exact path="/" component={Headers}></Route>
       
      </Switch>
    </>
  );
};

export default App;
