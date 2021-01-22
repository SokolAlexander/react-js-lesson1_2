import React from 'react';
import { useParams } from 'react-router-dom';

export default function Topic() {
  const { topicId } = useParams();
  return <h3>Topic ID: {topicId}</h3>;
}
