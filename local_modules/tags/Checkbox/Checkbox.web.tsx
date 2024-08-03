
import { CheckboxElementProps } from '@local_modules/tags/type';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function WebCheckbox({ 
  label,
  value,
  disabled,
  onChange
}: CheckboxElementProps) {
  const onToogleCheckbox = () => {
    onChange?.({
      instance: {
        value: !value
      }
    });
  }

  return (
    <label style={styles.container}>
      <input
        type="checkbox"
        checked={value}
        onChange={onToogleCheckbox}
        style={styles.checkbox}
      />
      <span style={styles.label}>{label}</span>
    </label>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#000',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
  },
  label: {
    fontSize: 16,
  },
});