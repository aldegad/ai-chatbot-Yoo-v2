"use client";

import { useEffect } from 'react'
import Div from '@local_modules/tags/Div'
import Button from '@local_modules/tags/Button'
import { color } from '@theme/index'
import H1 from '@local_modules/tags/H1'
import useRouter from '@local_modules/router/useRouter'
import Span from '@local_modules/tags/Span'
import createStyle from '@local_modules/theme/createStyle'
import useAlert from '@components/useAlert'

export default function App() {
  const router = useRouter()

  const onNavToLogin = () => {
    router.push('/login')
  }
  const onNavToSignUp = () => {
    router.push('/signUp')
  }

  // header setting은 나중에 하자.
  return (
    <Div style={styles.container}>
      <H1 style={styles.title}>Your AI. <Span>Yoo</Span></H1>
      <Div style={styles.buttonGroup}>
        <Button style={styles.button} onClick={onNavToLogin}>Login</Button>
        <Button style={styles.button} onClick={onNavToSignUp}>Sign Up</Button>
      </Div>
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
  buttonGroup: {
    gap: 12
  },
  button: {
    borderRadius: 50,
    fontWeight: 600,
    width: 180,
    color: color.primary
  }
})