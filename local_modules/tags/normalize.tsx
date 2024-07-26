import { StyleSheet } from "react-native";

export const normalizeStyles = StyleSheet.create({
  h1: {
    fontSize: 30
  },
  input: {
    borderColor: '#dfdfdf',
    borderWidth: 1,
    height: 38,
    width: 200,
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
    cursor: 'pointer'
  }
});