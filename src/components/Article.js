import React from 'react';

export const Article = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, date, text } = props;

  return (
    <div>
      <h1>{title}</h1>
      <a href="#date">{date}</a>
      <p>{text}</p>
    </div>
  );
};
