import React from 'react';

type SpanProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Span = ({ children, style }: SpanProps) => {
  return <span style={style}>{children}</span>;
};

export default Span;