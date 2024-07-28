import Span from '@local_modules/tags/Span';
import React, { ReactNode } from 'react';

export const wrapTextNodesWeb = (children: ReactNode): ReactNode => {
  return React.Children.map(children, (child) => {
    if (typeof child === 'string' && child) {
      // 텍스트 노드인 경우 Span으로 감싸기
      return <Span>{child}</Span>;
    } else if (React.isValidElement(child)) {
      return child;
    } else {
      return child;
    }
  });
};