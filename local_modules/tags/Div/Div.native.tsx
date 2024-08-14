import { useNativeElement } from '@local_modules/tags/styleUtils.native'
import { ElementProps } from '@local_modules/tags/type'

export default function NativeDiv(props: ElementProps) {
  const NativeElement = useNativeElement('div', props)
  return NativeElement
}