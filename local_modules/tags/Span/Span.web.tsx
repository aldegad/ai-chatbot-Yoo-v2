import React from 'react';
import { SpanProps } from '@local_modules/tags/Span/Span.type';

export default function WebSpan({ children, style }: SpanProps) {
  return <span style={style}>{children}</span>;
}