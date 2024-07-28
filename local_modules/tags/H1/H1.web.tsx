import React, { useMemo } from 'react';
import { normalizeStyles } from '@local_modules/tags/normalize';
import { wrapTextNodesWeb } from '@local_modules/tags/styleUtils.web';
import { ElementProps } from '@local_modules/tags/type';

export default function WebH1({ children, style }: ElementProps) {
  const wrappedChildren = useMemo(() => wrapTextNodesWeb(children), [children]);

  return <h1 style={{...normalizeStyles.h1, ...style}}>{wrappedChildren}</h1>;
}