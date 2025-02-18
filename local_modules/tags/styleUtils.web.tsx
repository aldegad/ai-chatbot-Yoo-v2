// tags/styleUtils.web.tsx
import { normalizeStyles } from '@local_modules/tags/normalize'
import Span from '@local_modules/tags/Span'
import { ButtonElementProps, ElementProps } from '@local_modules/tags/type'
import React, { ReactNode, useCallback, useMemo } from 'react'
import { StyleSheet } from 'react-native'

export const wrapTextNodes = (children: ReactNode): ReactNode => {
  return React.Children.map(children, (child) => {
    if (typeof child === 'string' && child) {
      // 텍스트 노드인 경우 Span으로 감싸기
      return <Span>{child}</Span>
    } else if (React.isValidElement(child)) {
      return child
    } else {
      return child
    }
  })
}

export function useNativeElement(tag: keyof JSX.IntrinsicElements, props: ElementProps|ButtonElementProps) {
  const { children, style, onClick } = props

  const onElementClick = useCallback((e: React.MouseEvent<any, MouseEvent>) => {
    onClick?.({
      web: e,
      instance: {
        stop: () => e.stopPropagation()
      }
    })
  }, [onClick])

  const Tag = tag
  return <Tag style={{ ...(normalizeStyles as any)[tag], ...style }} onClick={onElementClick}>{children}</Tag>
}