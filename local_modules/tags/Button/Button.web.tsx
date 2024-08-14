import { ButtonElementProps } from '@local_modules/tags/type';
import { useNativeElement } from '@local_modules/tags/styleUtils.web';

export default function WebButton(props: ButtonElementProps) {
  const NativeElement = useNativeElement('button', props)
  return NativeElement
}
