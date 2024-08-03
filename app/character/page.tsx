"use client";

import React, { useCallback, useEffect } from 'react'
import Div from '@local_modules/tags/Div'
import { borderRadius, color } from 'theme'
import Button from '@local_modules/tags/Button'
import useFormModel from '@local_modules/useFormModel';
import createStyle from '@local_modules/createStyle';
import useRouter from '@local_modules/router/useRouter';
import dynamic from 'next/dynamic';
import MyCharacterList from '@app/character/components/MyCharacterList';

export default function Page() {
  const router = useRouter();

  const [fields, modelValue] = useFormModel({
    characterName: '',
    characterSetting: ''
  });

  const onClick = useCallback(async() => {
    router.push('/character/create');
  }, [fields]);

  return (
    <Div style={styles.layout}>
      <Div style={styles.container}>
        <MyCharacterList/>
        <Button style={styles.characterAddButton} onClick={onClick}>캐릭터 생성</Button>
      </Div>
    </Div>
  );
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
    rowGap: 8,
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
    color: 'white'
  }
});
