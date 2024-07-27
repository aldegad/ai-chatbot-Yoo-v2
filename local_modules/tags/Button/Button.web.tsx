import React, { useMemo, useCallback } from 'react';
import { ButtonProps } from '@local_modules/tags/Button/Button.type';
import { wrapTextNodesWeb } from '@local_modules/tags/styleUtils.web';
import { normalizeStyles } from '@local_modules/tags/normalize';

const Button = ({ children, style, onClick }: ButtonProps) => {
  const wrappedChildren = useMemo(() => wrapTextNodesWeb(children), [children]);
  
  const onButtonClick = useCallback((e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.({
      web: e,
      instance: null
    });
  }, [onClick]);

  return <button style={{...normalizeStyles.button, ...style}} onClick={onButtonClick}>{wrappedChildren}</button>;
};

export default Button;
