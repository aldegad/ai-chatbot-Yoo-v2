"use client";

import Link from '@local_modules/router/Link';
import Div from '@local_modules/tags/Div';
import { StyleSheet } from 'react-native';
import Button from '@local_modules/tags/Button';
import { color } from '@theme/index';
import H1 from '@local_modules/tags/H1';

export default function App() {

  const onClick = () => {

  }

  return (
    <Div style={styles.container}>
      <Div>
        <H1 style={styles.title}>Your AI. Yoo</H1>
        <Button onClick={() => onClick}>Login</Button>
      </Div>
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: color.primary
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 16
  }
})