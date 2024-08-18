"use client"

import React, { useCallback } from 'react'
import Div from '@local_modules/tags/Div'
import { borderRadius, color } from 'theme'
import Button from '@local_modules/tags/Button'
import createStyle from '@local_modules/theme/createStyle'
import useRouter from '@local_modules/router/useRouter'
import MyCharacterList from '@app/character/components/MyCharacterList'
import H1 from '@local_modules/tags/H1'

export default function Page() {
  const router = useRouter();

  const onClick = useCallback(async() => {
    router.push('/character/create')
  }, [router])

  return (
    <Div style={styles.layout}>
      <Div style={styles.container}>
        <H1>캐릭터 목록</H1>
        <MyCharacterList/>
        <Button style={styles.characterAddButton} onClick={onClick}>+ 캐릭터 생성</Button>
      </Div>
    </Div>
  )
}

const styles = createStyle({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
    padding: 24
  },
  container: {
    rowGap: 12,
    maxWidth: 380,
    width: '100%',
    backgroundColor: 'transparent',
    padding: `24 12 14`,
    borderRadius: borderRadius.base
  },
  characterAddButton: {
    backgroundColor: 'transparent',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    borderRadius: borderRadius.base,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
})