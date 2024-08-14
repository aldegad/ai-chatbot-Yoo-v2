import React, { useMemo } from 'react';
import { wrapTextNodes } from '@local_modules/tags/styleUtils.web';
import { ScrollbarElementProps } from '@local_modules/Scrollbar/Scrollbar.type';

export default function WebScrollbar({ children, style }: ScrollbarElementProps) {
  const wrappedChildren = useMemo(() => wrapTextNodes(children), [children]);
  
  return <div style={style}>{wrappedChildren}</div>;
}