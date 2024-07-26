import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Div from '@local_modules/tags/Div';
import axios from 'axios';
import env from '@env';
import Input from '@local_modules/tags/Input';
import { SvgLogo } from '@components/images';
import H1 from '@local_modules/tags/H1';
import { useTheme } from '@local_modules/AppConfig/ThemeContext';
import { AppTheme } from 'theme';

export default function App() {
  const { color } = useTheme<AppTheme>();

  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const onEnter = (e:any) => {
    axios.post(`${env.LOCAL_ADDRESS}/api/chat`, { message: message })
    .then((response) => setResponse(response.data.message))
    .catch((error) => console.error('Error fetching data:', error));
  }

  return (
    <Div style={styles.container}>
      <H1 style={{ fontWeight: 300, color: color.primary }}>Your AI. Yoo</H1>
      <Div>test</Div>
      <Div style={{ backgroundColor: 'red', width: 100, minHeight: 0 }}>{response}</Div>
      <Input value={message} onChange={(e) => setMessage(e.instance.value)} onEnter={onEnter}></Input>
      <SvgLogo/>
    </Div>
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
    margin: 0,
    fontFamily: 'Bold'
  }
});
