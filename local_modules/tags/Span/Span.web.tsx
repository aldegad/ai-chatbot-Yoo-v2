import React from 'react';
import { SpanProps } from '@local_modules/tags/Span/Span.type';

const Span = ({ children, style }: SpanProps) => {
  return <span style={style}>{children}</span>;
};

export default Span;