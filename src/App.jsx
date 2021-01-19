import React, { Suspense } from "react";
import DisplayArticlesData from "./components/DisplayArticlesData";
import SingleArticle from "./components/SingleArticle";
import { Switch, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import MenuHeader from "./components/MenuHeader";
import Footer from './components/Footer'
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
      <MenuHeader />
      <Switch>
        <Route exact path="/" component={DisplayArticlesData}></Route>
        <Route exact path="/articles/:id" component={SingleArticle}></Route>
          <Route exact path="/sign_up" component={RegistrationForm}></Route>
          <Route exact path="/login" component={LoginForm}></Route>
      </Switch>  
      <Footer/>      
      
      </Suspense>
      
    </>
  );
};

export default App;
