"use client";

import Div from '@local_modules/tags/Div'
import { StyleSheet } from 'react-native'
import Button from '@local_modules/tags/Button'
import { color } from '@theme/index'
import H1 from '@local_modules/tags/H1'
import useRouter from '@local_modules/router/useRouter'
import Span from '@local_modules/tags/Span'
import createStyle from '@local_modules/createStyle';

export default function App() {
  const router = useRouter();

  const onClick = () => {
    router.push('/character');
  }
  // header setting은 나중에 하자.
  return (
    <Div style={styles.container}>
      <H1 style={styles.title}>Your AI. <Span>Yoo</Span></H1>
      <Button style={styles.loginButton} onClick={onClick}>Login</Button>
    </Div>
  )
}

const styles = createStyle({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: color.primary
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    color: 'white',
    marginBottom: 16
  },
  loginButton: {
    borderRadius: 50,
    fontWeight: 600,
    width: 180,
    color: color.primary
  }
})