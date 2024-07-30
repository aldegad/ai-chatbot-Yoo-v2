"use client";

import React, { useCallback, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Div from '@local_modules/tags/Div'
import H1 from '@local_modules/tags/H1'
import { borderRadius, color } from 'theme'
import Button from '@local_modules/tags/Button'
import Input from '@local_modules/tags/Input'
import Label from '@local_modules/tags/Label'
import axios from 'axios';
import useFormModel from '@local_modules/useFormModel';
import createStyle from '@local_modules/createStyle';
import clientEnv from '@clientEnv';
import Textarea from '@local_modules/tags/Textarea';
import Span from '@local_modules/tags/Span';

export default function Page() {

  const [fields, modelValue] = useFormModel({
    characterName: '',
    characterSetting: ''
  });

  const onClick = useCallback(async() => {
    const response = await axios.post(`${clientEnv.LOCAL_ADDRESS}/api/chat`, {
      message: fields.characterSetting
    });
  }, [fields]);

  return (
    <Div style={styles.layout}>
      <Div style={styles.container}>
        <Div style={styles.inputGroup}>
          <Div style={styles.inputLabelRow}>
            <Label>캐릭터 이름</Label>
            <Div style={styles.textLength}><Span style={styles.textCount}>{fields.characterName.length}</Span>/15</Div>
          </Div>
          <Input style={styles.input} {...modelValue('characterName')}/>
        </Div>
        <Div style={styles.inputGroup}>
          <Div style={styles.inputLabelRow}>
            <Label>캐릭터 설정</Label>
            <Div style={styles.textLength}><Span style={styles.textCount}>{fields.characterSetting.length}</Span>/100</Div>
          </Div>
          <Textarea style={[styles.input, styles.textarea]} {...modelValue('characterSetting')}/>
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