"use client";

import React, { useCallback, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Div from '@local_modules/tags/Div'
import H1 from '@local_modules/tags/H1'
import { color } from 'theme'
import Button from '@local_modules/tags/Button'
import Input from '@local_modules/tags/Input'
import Label from '@local_modules/tags/Label'
import axios from 'axios';
import useFormModel from '@local_modules/useFormModel';
import createStyle from '@local_modules/createStyle';

export default function Page() {

  const [fields, modelValue] = useFormModel({
    characterName: '',
    characterSetting: ''
  });

  const onClick = useCallback(async() => {
    /* const response = await axios.post(`${env.LOCAL_ADDRESS}/api/chat`, {
      message: fields.characterSetting
    }); */
  }, [fields]);

  return (
    <Div style={styles.layout}>
      <Div style={styles.container}>
        <Div style={styles.inputGroup}>
          <Label>캐릭터 이름</Label>
          <Input style={styles.input} {...modelValue('characterName')}/>
        </Div>
        <Div style={styles.inputGroup}>
          <Label>캐릭터 설정</Label>
          <Input style={styles.input} {...modelValue('characterSetting')}/>
        </Div>
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
    maxWidth: 200,
    width: '100%'
  },
  inputGroup: {
    rowGap: 4
  },
  label: {
    color: color.text
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: color.text
  },
  submitButton: {
    backgroundColor: 'white',
    color: color.primary
  }
});
