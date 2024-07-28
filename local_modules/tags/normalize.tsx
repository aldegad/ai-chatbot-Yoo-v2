import { StyleSheet } from "react-native";

export const normalizeStyles = StyleSheet.create({
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
    cursor: 'pointer',
    alignItems: 'center'
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