import React, { useCallback } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";

import Header from "./header";
import Topic from './topic';

const topics = ['one', '2', 'smth', 'qwe'];
const newtopics = [
  { id: "1", text: "one" },
  { id: "2", text: "two" },
  { id: "3", text: "three" },
];

export default function Topics() {
  const match = useRouteMatch();
  console.log(match);

  const renderTopic = useCallback((t) => {
    return (
      <div key={t.id}>
        <Link to={`${match.url}/${t.id}`}>{t.text}</Link>
      </div>
    );
  }, [match]);

  return (
    <>
      {newtopics.map(renderTopic)}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Header />
          <Topic topics={newtopics} />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </>
  );
}