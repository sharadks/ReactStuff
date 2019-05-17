import React from 'react'
import { Switch, Route } from 'react-router'
import ArticleList from '../routes/article-list/';

export const RoutesConfig = () => (
  <Switch>
    <Route exact path="/" component={ArticleList} />
  </Switch>
)