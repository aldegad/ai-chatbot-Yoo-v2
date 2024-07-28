import { useNativeElement } from '@local_modules/tags/styleUtils.native';
import { ElementProps } from '@local_modules/tags/type';

export default function NativeH1(props: ElementProps) {
  const NativeElement = useNativeElement('h1', props);
  return NativeElement;
}