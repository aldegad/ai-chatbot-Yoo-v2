import React, { useMemo, ReactNode } from 'react';
import { DivProps } from '@local_modules/tags/Div/Div.type';
import { normalizeStyles } from '@local_modules/tags/normalize';
import Span from '../Span';
import { wrapTextNodesWeb } from '@local_modules/tags/styleUtils.web';

const Div = ({ children, style }: DivProps) => {
  const wrappedChildren = useMemo(() => wrapTextNodesWeb(children), [children]);

  return <h1 style={{...normalizeStyles.h1, ...style}}>{wrappedChildren}</h1>;
};

export default Div;
