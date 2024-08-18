"use client"

import React, { useCallback, useState } from 'react'
import Div from '@local_modules/tags/Div'
import { borderRadius, boxShadow, color } from 'theme'
import useFormModel from '@local_modules/useFormModel'
import InputComponent from '@components/inputComponent'
import createStyle from '@local_modules/theme/createStyle'
import useParams from '@local_modules/router/useParams'
import { apiClient } from '@apiClient'

export default function Page() {
  const params = useParams();
  const characterId = params.characterId;

  const { fields, modelValue } = useFormModel({
    userMessage: ''
  })
  const [chatList, setChatList] = useState<string[]>([]);

  const onSend = useCallback(async() => {
    const { data } = await apiClient.chat.send({
      characterId,
      message: fields.userMessage
    })
    setChatList([data.message])
  }, [fields]);

  return (
    <Div style={styles.layout}>
      <Div style={styles.container}>
        <Div>{characterId}</Div>
        <Div style={styles.chatList}>
          {
            chatList.map((chat, index) => (
              <Div key={index} style={styles.chatItem}>
                {chat}
              </Div>
            ))
          }
        </Div>
        <InputComponent {...modelValue('userMessage')} onEnter={onSend}/>
      </Div>
    </Div>
  )
}

const styles = createStyle({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary
  },
  container: {
    flex: 1,
    maxHeight: 400,
    backgroundColor: 'white',
    borderRadius: borderRadius.base,
    boxShadow: boxShadow.base,
    padding: 18
  },
  chatList: {
    rowGap: 8
  },
  chatItem: {
    
  }
})
