import { useNativeElement } from '@local_modules/tags/styleUtils.web';
import { ElementProps } from '@local_modules/tags/type';

export default function WebH2(props: ElementProps) {
  const NativeElement = useNativeElement('h2', props)
  return NativeElement
}