"use client"

import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import Div from '@local_modules/tags/Div'
import { borderRadius, color } from 'theme'
import Button from '@local_modules/tags/Button'
import useFormModel from '@local_modules/useFormModel'
import axios, { AxiosResponse } from 'axios'
import clientEnv from '@clientEnv'
import { SignUpParams, SignUpResponse } from '@app/type.api'
import InputComponent from '@components/inputComponent'
import { isValidEmail, isValidPassword } from '@components/validation'
import useRouter from '@local_modules/router/useRouter'
import H1 from '@local_modules/tags/H1'

export default function Page() {
  const router = useRouter();

  const [fields, modelValue] = useFormModel({
    email: '',
    password: ''
  })

  const onSubmit = useCallback(async() => {
    if(!isValidEmail(fields.email)) return alert('유효한 이메일이 아닙니다');
    if(!isValidPassword(fields.password)) return alert('비밀번호는 영문+숫자 8자이상 입력해주세요.');
    
    try {
      const response = await axios.post<SignUpResponse, AxiosResponse<SignUpResponse>, SignUpParams>(`${clientEnv.LOCAL_ADDRESS}/api/public/signUp`, {
        email: fields.email,
        password: fields.password
      })

      alert(response.data.message);
      router.replace('/login');
    } catch(e:any) {
      if(axios.isAxiosError(e) && e.response) {
        alert(e.response.data.error);
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
      console.error(`API Error: `, e);
    }
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
    fontSize: 16,
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
