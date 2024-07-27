import Div from '@local_modules/tags/Div';
import { StyleSheet } from 'react-native';

export default function Home() {
  return (
    <Div style={styles.container}>
      <Div>Hello Yoo web</Div>
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})