import React, { useMemo } from 'react';
import { wrapTextNodesWeb } from '@local_modules/tags/styleUtils.web';
import { ScrollbarElementProps } from '@local_modules/Scrollbar/Scrollbar.type';

export default function WebScrollbar({ children, style }: ScrollbarElementProps) {
  const wrappedChildren = useMemo(() => wrapTextNodesWeb(children), [children]);
  
  return <div style={style}>{wrappedChildren}</div>;
}