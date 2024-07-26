import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Div from '@local_modules/tags/Div';
import axios from 'axios';
import env from '@env';
import Input from '@local_modules/tags/Input';
import AppConfig from '@local_modules/AppConfig';
import { SvgLogo } from '@components/images';

export default function App() {
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const onEnter = (e:any) => {
    axios.post(`${env.LOCAL_ADDRESS}/api/chat`, { message: message })
    .then((response) => setResponse(response.data.message))
    .catch((error) => console.error('Error fetching data:', error));
  }

  return (
    <AppConfig>
      <Div style={styles.container}>
        <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
        <Div style={styles.text}>{response}</Div>
        <Input value={message} onChange={(e) => setMessage(e.instance.value)} onEnter={onEnter}></Input>
        <SvgLogo/>
      </Div>
    </AppConfig>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', // 웹과 네이티브 모두 가운데 정렬
    fontSize: 20,
  },
  text: {
    margin: 10,
    fontFamily: 'Bold'
  }
});
