import React, { useMemo } from 'react';
import { DivProps } from '@local_modules/tags/Div/Div.type';
import { wrapTextNodesWeb } from '@local_modules/tags/styleUtils.web';
// import { wrapTextNodesWeb } from '@local_modules/tags/styleUtils';

const Div = ({ children, style }: DivProps) => {
  const wrappedChildren = useMemo(() => wrapTextNodesWeb(children), [children]);
  
  return <div style={style}>{wrappedChildren}</div>;
};

export default Div;