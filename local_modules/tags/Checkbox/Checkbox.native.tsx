
import { CheckboxElementProps } from '@local_modules/tags/type';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function NativeCheckbox({ 
  label,
  value,
  disabled,
  onChange
}: CheckboxElementProps){
  const onToogleCheckbox = () => {
    onChange?.({
      instance: {
        value: !value
      }
    });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onToogleCheckbox}>
      <View style={[styles.checkbox, value && styles.checked]}>
        {value && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
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