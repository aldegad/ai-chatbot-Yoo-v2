"use client"

import React, { useCallback } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Div from '@local_modules/tags/Div'
import H1 from '@local_modules/tags/H1'
import { color } from 'theme'
import Button from '@local_modules/tags/Button'
import Input from '@local_modules/tags/Input'
import useFormModel from '@local_modules/useFormModel'
import axios from 'axios'
import clientEnv from '@clientEnv'

export default function Page() {

  const [fields, modelValue] = useFormModel({
    userMessage: '',
    characterSetting: ''
  })

  const onClick = useCallback(async() => {
    const response = await axios.post(`${clientEnv.LOCAL_ADDRESS}/api/chat`, {
      message: fields.userMessage
    })
  }, [fields]);

  return (
    <Div style={styles.container}>
      holly
    </Div>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: color.primary
  }
})
