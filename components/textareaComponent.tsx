import createStyle from "@local_modules/theme/createStyle";
import Div from "@local_modules/tags/Div";
import Input from "@local_modules/tags/Input";
import Label from "@local_modules/tags/Label";
import Span from "@local_modules/tags/Span";
import Textarea from "@local_modules/tags/Textarea";
import { InputElementChangeEvent, InputType } from "@local_modules/tags/type";
import { color } from "@theme/index";

export type InputComponentProps = {
  label?: string,
  type?: InputType,
  value?: string,
  placeholder?: string,
  maxLength?: number,
  onEnter?: (e:any) => void
  onChange?: (e:InputElementChangeEvent) => void
}
export default function TextareaComponent({ label, value, maxLength:_maxLength, ...restInputProps }:InputComponentProps) {
  const maxLength = _maxLength || 20; 

  return (
    <Div style={styles.inputComponent}>
      <Div style={styles.inputLabelRow}>
        { label ? <Label style={styles.label}>{label}</Label> : null }
        <Div style={styles.textLength}><Span style={styles.textCount}>{value?.length||'0'}</Span>/{maxLength}</Div>
      </Div>
      <Textarea
        {...restInputProps}
        maxLength={maxLength}
        style={styles.input}/>
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
  input: {
    backgroundColor: 'rgba(0,0,0,0.08)',
    color: color.text
  }
})