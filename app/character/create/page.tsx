"use client";

import React, { useCallback } from 'react'
import Div from '@local_modules/tags/Div'
import { borderRadius, boxShadow, color } from 'theme'
import Button from '@local_modules/tags/Button'
import axios from 'axios';
import useFormModel from '@local_modules/useFormModel';
import createStyle from '@local_modules/theme/createStyle';
import clientEnv from '@clientEnv';
import useLoading from '@components/useLoading';
import InputComponent from '@components/inputComponent';
import TextareaComponent from '@components/textareaComponent';
import useCookies from '@local_modules/cookieManager';
import { apiClient } from '@apiClient';
import { ICharacter } from '@type';
import { useErrorCatch } from '@components/useErrorCatch';
import useRouter from '@local_modules/router/useRouter';
import Checkbox from '@local_modules/tags/Checkbox';

export default function Page() {
  const { createLoading } = useLoading();
  const { createErrorCatch } = useErrorCatch();
  const router = useRouter();


  const [fields, modelValue] = useFormModel<ICharacter.CreateParams>({
    name: '',
    system: '',
    secret: '',
    visibility: ICharacter.VisibilityType.PRIVATE
  });

  const onClick = useCallback(async() => {
    const loading = await createLoading();
    loading.present();
    
    try {
      const { data } = await apiClient.character.create(fields);
      alert(data.message);

      router.back();
    } catch(error) {
      createErrorCatch(error);
    }

    loading.dismiss();
  }, [fields]);

  return (
    <Div style={styles.layout}>
      <Div style={styles.container}>
        <InputComponent label="캐릭터 이름" {...modelValue('name')}/>
        <TextareaComponent label="캐릭터 설정" {...modelValue('system')} maxLength={1000}/>
        <TextareaComponent label="캐릭터 비밀" {...modelValue('secret')} maxLength={500}/>
        <Button>공개</Button>
        <Button>V비공개</Button>
        <Button>링크공개</Button>

        <Button style={styles.submitButton} onClick={onClick}>생성</Button>
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
    backgroundColor: 'white',
    padding: `24 18 14`,
    borderRadius: borderRadius.base,
    boxShadow: boxShadow.base
  },
  inputGroup: {
    rowGap: 4
  },
  inputLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textLength: {
    flexDirection: 'row',
    fontSize: 14
  },
  textCount: {
    color: color.primary
  },
  label: {
    color: color.text
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.08)',
    color: color.text
  },
  textarea: {
    minHeight: 180,
    resize: 'none'
  },
  submitButton: {
    backgroundColor: color.primary,
    borderRadius: 50,
    color: 'white'
  }
});