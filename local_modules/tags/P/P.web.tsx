import React, { useMemo } from 'react';
import { normalizeStyles } from '@local_modules/tags/normalize';
import { wrapTextNodes } from '@local_modules/tags/styleUtils.web';
import { ElementProps } from '@local_modules/tags/type';

export default function WebP({ children, style }: ElementProps) {
  const wrappedChildren = useMemo(() => wrapTextNodes(children), [children]);

  return <h1 style={{...normalizeStyles.p, ...style}}>{wrappedChildren}</h1>;
}