import { ButtonElementProps } from '@local_modules/tags/type';
import { useNativeElement } from '@local_modules/tags/styleUtils.native';

export default function NativeButton(props: ButtonElementProps) {
  const NativeElement = useNativeElement('button', props);
  return NativeElement;
}