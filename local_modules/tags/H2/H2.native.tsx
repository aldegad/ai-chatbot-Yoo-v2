import { useNativeElement } from '@local_modules/tags/styleUtils.native';
import { ElementProps } from '@local_modules/tags/type';

export default function NativeH2(props: ElementProps) {
  const NativeElement = useNativeElement('h2', props)
  return NativeElement
}