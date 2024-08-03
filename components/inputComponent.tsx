import Ionicons from '@expo/vector-icons/Ionicons';
import createStyle from "@local_modules/createStyle";
import Button from "@local_modules/tags/Button";
import Div from "@local_modules/tags/Div";
import Input from "@local_modules/tags/Input";
import Label from "@local_modules/tags/Label";
import Span from "@local_modules/tags/Span";
import { InputElementChangeEvent, InputType } from "@local_modules/tags/type";
import { color } from "@theme/index";
import { useMemo, useState } from "react";

export type InputComponentProps = {
  label?: string,
  type?: InputType,
  value?: string,
  placeholder?: string,
  maxLength?: number,
  onEnter?: (e:any) => void
  onChange?: (e:InputElementChangeEvent) => void
}
export default function InputComponent({ label, ...inputProps }:InputComponentProps) {
  const { value, maxLength:_maxLength, type:_type } = inputProps;
  const [passwordVisible, setPasswordVisible] = useState(false);

  const maxLength = _maxLength || 20;
  const type = useMemo(() => {
    switch(_type) {
      case 'password':
        return passwordVisible === true ? 'text' : 'password';
      default:
        return _type;
    }
  }, [passwordVisible]);

  const onTogglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <Div style={styles.inputComponent}>
      <Div style={styles.inputLabelRow}>
        { label ? <Label style={styles.label}>{label}</Label> : null }
        <Div style={styles.textLength}><Span style={styles.textCount}>{value?.length||'0'}</Span>/{maxLength}</Div>
      </Div>
      <Div>
        <Input 
          {...inputProps}
          maxLength={maxLength}
          type={type}
          style={[styles.input, type === 'password' ? styles.inputWithIconRight : null]}/>
        {
          _type === 'password' ?
          <Button style={styles.togglePasswordVisibleButton} onClick={onTogglePasswordVisible}>
            {
              passwordVisible ?
              <Ionicons name="eye-off"/> : 
              <Ionicons name="eye"/>
            }
          </Button> : null
        }
      </Div>
    </Div>
  )
}

const styles = createStyle({
  inputComponent: {
    rowGap: 4
  },
  inputLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textLength: {
    flexDirection: 'row',
    fontSize: 14
  },
  textCount: {
    color: color.primary
  },
  label: {
    color: color.text
  },
  inputContentRow: {
    position: 'relative'
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.08)',
    color: color.text
  },
  inputWithIconRight: {
    paddingRight: 40
  },
  togglePasswordVisibleButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: 38,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color.primary,
    backgroundColor: 'transparent',
    border: 0
  }
})