import React from 'react';
import { StyleSheet } from 'react-native';
import Div from '@local_modules/tags/Div';
import Span from '@local_modules/tags/Span';
import Br from '@local_modules/tags/Br';

export default function App() {
  return (
    <Div style={styles.container}>
      <Span style={styles.text}>Welcome to Expo + Next.js 👋</Span>
      <Br />
      <Div style={styles.subMessage}>
        sub message
        <Br />
        another line
        <Div style={styles.nestedDiv}>
          Nested Div inside Span
        </Div>
      </Div>
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', // 웹과 네이티브 모두 가운데 정렬
    fontSize: 30, // 이 스타일이 네이티브에서는 Text로 전달됩니다.
  },
  subMessage: {
    fontSize: 20, // 이 스타일도 네이티브에서는 Text로 전달됩니다.
    color: 'gray',
  },
  text: {
    margin: 10,
    fontSize: 30, // 이 스타일이 네이티브에서는 Text로 전달됩니다.
  },
  subText: {
    fontSize: 20, // 이 스타일도 네이티브에서는 Text로 전달됩니다.
    color: 'gray',
  },
  nestedDiv: {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightgray',
  },
});
