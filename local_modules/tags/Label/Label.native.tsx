import { useNativeElement } from '@local_modules/tags/styleUtils.native';
import { ElementProps } from '@local_modules/tags/type';

export default function NativeLabel(props: ElementProps) {
  const NativeElement = useNativeElement('label', props);
  return NativeElement;
}