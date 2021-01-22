import React, { useCallback } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";

import Topic from './topic';

const topics = ['one', '2', 'smth', 'qwe'];

export default function Topics() {
  const match = useRouteMatch();
  console.log(match);

  const renderTopic = useCallback((t) => {
    return (
      <div key={t}>
        <Link to={`${match.url}/${t}`}>{t}</Link>
      </div>
    );
  }, [match]);

  return (
    <>
      {topics.map(renderTopic)}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </>
  );
}