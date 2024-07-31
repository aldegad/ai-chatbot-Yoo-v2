"use client";

import React, { useCallback } from 'react'
import Div from '@local_modules/tags/Div'
import { borderRadius, color } from 'theme'
import Button from '@local_modules/tags/Button'
import axios from 'axios';
import useFormModel from '@local_modules/useFormModel';
import createStyle from '@local_modules/createStyle';
import clientEnv from '@clientEnv';
import useLoading from '@components/useLoading';
import InputComponent from '@components/inputComponent';
import TextareaComponent from '@components/textareaComponent';
import useCookies from '@local_modules/useCookies';

export default function Page() {
  const { createLoading } = useLoading();
  const { getCookie } = useCookies();

  const [fields, modelValue] = useFormModel({
    name: '',
    system: ''
  });

  const onClick = useCallback(async() => {
    const loading = await createLoading();
    loading.present();

    const token = getCookie('token');
    
    const response = await axios.post(`${clientEnv.LOCAL_ADDRESS}/api/protected/character`, {
      name: fields.name,
      system: fields.system
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    loading.dismiss();
  }, [fields]);

  return (
    <Div style={styles.layout}>
      <Div style={styles.container}>
        <InputComponent label="캐릭터 이름" {...modelValue('name')}/>
        <TextareaComponent label="캐릭터 설정" {...modelValue('system')}/>

        <Button style={styles.submitButton} onClick={onClick}>다음</Button>
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
    padding: `24 12 14`,
    borderRadius: borderRadius.base
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