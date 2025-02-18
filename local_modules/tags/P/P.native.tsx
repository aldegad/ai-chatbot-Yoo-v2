// tags/P/native.tsx
import { useNativeElement } from '@local_modules/tags/styleUtils.native';
import { ElementProps } from '@local_modules/tags/type';

export default function NativeP(props: ElementProps) {
  const NativeElement = useNativeElement('p', props);
  return NativeElement;
}