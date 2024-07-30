"use client"

import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import Div from '@local_modules/tags/Div'
import { borderRadius, color } from 'theme'
import Button from '@local_modules/tags/Button'
import useFormModel from '@local_modules/useFormModel'
import axios from 'axios'
import clientEnv from '@clientEnv'
import { SignUpParams } from '@app/type.api'
import InputComponent from '@components/inputComponent'
import { isValidEmail, isValidPassword } from '@components/validation'

export default function Page() {

  const [fields, modelValue] = useFormModel({
    email: '',
    password: ''
  })

  const onClick = useCallback(async() => {
    console.log(fields);
    if(!isValidEmail(fields.email)) return alert('유효한 이메일이 아닙니다');
    if(!isValidPassword(fields.password)) return alert('비밀번호는 영문+숫자 8자이상 입력해주세요.');
    
    const response = await axios.post<null, null, SignUpParams>(`${clientEnv.LOCAL_ADDRESS}/api/public/signUp`, {
      email: fields.email,
      password: fields.password
    })
    console.log(response);
  }, [fields])

  return (
    <Div style={styles.layout}>
      <Div style={styles.container}>
        <InputComponent label="email" {...modelValue('email')}/>
        <InputComponent label="password" placeholder="영문+숫자 8자이상" type="password" {...modelValue('password')}/>
        <Button style={styles.button} onClick={onClick}>회원가입</Button>
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
