import React, { useMemo } from 'react';
import { normalizeStyles } from '@local_modules/tags/normalize';
import { wrapTextNodesWeb } from '@local_modules/tags/styleUtils.web';
import { ElementProps } from '@local_modules/tags/type';

export default function WebLabel({ children, style }: ElementProps) {
  const wrappedChildren = useMemo(() => wrapTextNodesWeb(children), [children]);

  return <label style={{...normalizeStyles.label, ...style}}>{wrappedChildren}</label>;
}