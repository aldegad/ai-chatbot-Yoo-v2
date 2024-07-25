import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Div from '@local_modules/tags/Div';
import Span from '@local_modules/tags/Span';
import Br from '@local_modules/tags/Br';
import axios from 'axios';
import env from '@env';
import Input from '@local_modules/tags/Input';

export default function App() {
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  useEffect(() => {
    console.log(`${env.LOCAL_ADDRESS}`);
  }, []);

  const onEnter = (e:any) => {
    console.log(e);
    axios.post(`${env.LOCAL_ADDRESS}/api/chat`, { message: message })
    .then((response) => setResponse(response.data.message))
    .catch((error) => console.error('Error fetching data:', error));
  }

  return (
    <Div style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Div style={styles.text}>{response}</Div>
      <Input value={message} onChange={(e) => setMessage(e.instance.value)} onEnter={onEnter}></Input>
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', // 웹과 네이티브 모두 가운데 정렬
    fontSize: 16, // 이 스타일이 네이티브에서는 Text로 전달됩니다.
  },
  text: {
    margin: 10,
    fontSize: 14, // 이 스타일이 네이티브에서는 Text로 전달됩니다.
  }
});
