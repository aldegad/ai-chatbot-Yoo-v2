import React from 'react';
import { StyleSheet } from 'react-native';
import Div from '@local_modules/tags/Div';
import H1 from '@local_modules/tags/H1';
import { color } from 'theme';
import { Link } from 'expo-router';

export default function App() {
  return (
    <Div style={styles.container}>
      <Link href="/chat">
        <H1 style={styles.text}>Your AI. Yoo</H1>
      </Link>
      {/* <Button style={styles.loginButton}>login</Button> */}
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
    color: 'white',
    marginBottom: 16
  },
  loginButton: {
    backgroundColor: 'white',
    color: color.primary,
    width: 180,
    borderRadius: 50
  }
});
