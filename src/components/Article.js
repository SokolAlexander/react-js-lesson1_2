import React from 'react';

export function Article({ title, summary }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  )
}