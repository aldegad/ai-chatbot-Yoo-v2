// tags/normalize.tsx
import { StyleSheet } from "react-native";

export const normalizeStyles = StyleSheet.create({
  input: {
    borderColor: '#dfdfdf',
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    minHeight: 38,
    width: '100%',
    minWidth: 200,
    textAlign: 'left',
    padding: 8,
    fontSize: 16,
    borderRadius: 8
  },
  button: {
    backgroundColor: 'white',
    fontWeight: 600,
    fontSize: 16,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    cursor: 'pointer',
    flexDirection: 'column',
    textAlign: 'center'
  },
  label: {
    fontSize: 12,
    fontWeight: 600
  },
  h1: {
    fontSize: 30,
    fontWeight: 600,
    flexDirection: 'row'
  },
  p: {
    fontSize: 14,
    flexDirection: 'row'
  }
});