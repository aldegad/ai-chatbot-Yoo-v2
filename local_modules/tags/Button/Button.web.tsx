import React, { useMemo, useCallback } from 'react';
import { wrapTextNodesWeb } from '@local_modules/tags/styleUtils.web';
import { normalizeStyles } from '@local_modules/tags/normalize';
import { ButtonElementProps } from '@local_modules/tags/type';

export default function WebButton({ children, style, onClick }: ButtonElementProps) {
  const wrappedChildren = useMemo(() => wrapTextNodesWeb(children), [children]);
  
  const onButtonClick = useCallback((e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.({
      web: e,
      instance: null
    });
  }, [onClick]);

  return <button style={{...normalizeStyles.button, ...style}} onClick={onButtonClick}>{wrappedChildren}</button>;
}
