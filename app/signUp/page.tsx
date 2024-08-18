"use client"

import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import Div from '@local_modules/tags/Div'
import { borderRadius, color, fontSize } from 'theme'
import Button from '@local_modules/tags/Button'
import useFormModel from '@local_modules/useFormModel'
import InputComponent from '@components/inputComponent'
import { isValidEmail, isValidPassword } from '@components/validation'
import useRouter from '@local_modules/router/useRouter'
import H1 from '@local_modules/tags/H1'
import useLoading from '@components/useLoading'
import { apiClient } from '@apiClient'
import { useErrorCatch } from '@components/useErrorCatch'

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
      const response = await apiClient.user.signUp({
        email: fields.email,
        password: fields.password
      })

      alert(response.data.message);
      router.replace('/login');
    } catch(error:any) {
      createErrorCatch(error);
    }

    loading.dismiss();
  }, [fields])

  return (
    <Div style={styles.layout}>
      <Div style={styles.container}>
        <H1 style={styles.title}>회원가입</H1>
        <InputComponent label="email" {...modelValue('email')}/>
        <InputComponent label="password" placeholder="영문+숫자 8자이상" type="password" {...modelValue('password')} onEnter={onSubmit}/>
        <Button style={styles.button} onClick={onSubmit}>회원가입</Button>
      </Div>
    </Div>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
  },
  title: {
    fontSize: fontSize.h1
  },
  container: {
    rowGap: 12,
    maxWidth: 300,
    width: '100%',
    backgroundColor: 'white',
    padding: 24,
    borderRadius: borderRadius.base
  },
  button: {
    backgroundColor: color.primary,
    color: 'white'
  }
})
