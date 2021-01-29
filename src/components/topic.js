import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';

export default function Topic({ topics }) {
  const { topicId } = useParams();
  const topic = useMemo(() => topics.find(t => t.id === topicId), [topicId, topics]);

  if (!topic) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <h3>Topic ID: {topic.id}</h3>
      <h4>Topic Text: {topic.text}</h4>
    </>
  );
}
