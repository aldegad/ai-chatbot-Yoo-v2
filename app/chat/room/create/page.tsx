"use client"

import React, { useCallback } from 'react'
import Div from '@local_modules/tags/Div'
import H1 from '@local_modules/tags/H1'
import { borderRadius, boxShadow, color } from 'theme'
import Button from '@local_modules/tags/Button'
import useFormModel from '@local_modules/useFormModel'
import InputComponent from '@components/inputComponent'
import { isValidEmail, isValidPassword } from '@components/validation'
import useRouter from '@local_modules/router/useRouter'
import useLoading from '@components/useLoading'
import { apiClient } from '@apiClient'
import { useErrorCatch } from '@components/useErrorCatch'
import createStyle from '@local_modules/theme/createStyle'

export default function Page() {
  const router = useRouter();
  const { createLoading } = useLoading();
  const { createErrorCatch } = useErrorCatch();

  const { fields, modelValue } = useFormModel({
    email: '',
    password: ''
  })

  const onSubmit = useCallback(async() => {
    if(!isValidEmail(fields.email)) return alert('유효한 이메일이 아닙니다');
    if(!isValidPassword(fields.password)) return alert('비밀번호는 영문+숫자 8자이상 입력해주세요.');
    
    const loading = await createLoading();
    loading.present();

    try {
      const { data } = await apiClient.user.login({
        email: fields.email,
        password: fields.password
      })
      alert(data.message);

      router.replace('/character');
    } catch (error) {
      createErrorCatch(error);
    }

    loading.dismiss();
  }, [fields])

  return (
    <Div style={styles.layout}>
      <Div style={styles.container}>
        <H1 style={styles.title}>대화 생성</H1>
        <InputComponent label="email" type="email" {...modelValue('email')}/>
        <InputComponent label="password" placeholder="영문+숫자 8자이상" type="password" {...modelValue('password')} onEnter={onSubmit}/>
        <Button style={styles.button} onClick={onSubmit}>대화 생성</Button>
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
  },
  title: {
    fontSize: 16,
  },
  container: {
    rowGap: 12,
    maxWidth: 300,
    width: '100%',
    backgroundColor: 'white',
    padding: 24,
    borderRadius: borderRadius.base,
    boxShadow: boxShadow.base
  },
  button: {
    backgroundColor: color.primary,
    color: 'white'
  }
})