import React, { isValidElement, cloneElement, useMemo, ReactNode } from 'react';
import { DivProps } from '@local_modules/tags/Div/Div.type';
import Span from '../Span';

const wrapTextNodes = (children: ReactNode): ReactNode => {
  return React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      // 텍스트 노드인 경우 Span으로 감싸기
      return <Span>{child}</Span>;
    } else if (isValidElement(child)) {
      // 자식 요소가 또 다른 React 엘리먼트인 경우 재귀적으로 처리
      const newChildren = wrapTextNodes(child.props.children);
      return cloneElement(child, { ...child.props, children: newChildren });
    }
    return child;
  });
};

const Div = ({ children, style }: DivProps) => {
  const wrappedChildren = useMemo(() => wrapTextNodes(children), [children]);

  return <div style={style}>{wrappedChildren}</div>;
};

export default Div;
