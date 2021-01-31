import React from 'react';
import { useParams } from 'react-router-dom';

export default function Header() {
  const { topicId } = useParams();

  return <header>Header, chosen: {topicId} </header>
}