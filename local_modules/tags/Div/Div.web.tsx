import { useNativeElement } from '@local_modules/tags/styleUtils.web';
import { ElementProps } from '@local_modules/tags/type';

export default function WebDiv(props: ElementProps) {
  const NativeElement = useNativeElement('div', props)
  return NativeElement
}