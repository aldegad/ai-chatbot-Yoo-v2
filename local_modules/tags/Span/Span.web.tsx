import React from 'react';
import { ElementProps } from '@local_modules/tags/type';

export default function WebSpan({ children, style }: ElementProps) {
  return <span style={style}>{children}</span>;
}