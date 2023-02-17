import React from 'react';

interface HeaderProps {
  title: string
}

export function Header(props: HeaderProps) {
  let {
    title
  } = props;
  return (
    <h1>{title}</h1>
  );
}
