import React from 'react';
import { StyleSheet } from 'react-native';
import Div from '@local_modules/tags/Div';
import H1 from '@local_modules/tags/H1';
import { color } from 'theme';

export default function App() {

  return (
    <Div style={styles.container}>
      <H1 style={styles.text}>Your AI. Yoo</H1>
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
    backgroundColor: color.primary
  },
  text: {
    margin: 0,
    fontWeight: 500,
    color: 'white'
  }
});
