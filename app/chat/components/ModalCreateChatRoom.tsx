import InputComponent from "@components/inputComponent"
import Button from "@local_modules/tags/Button"
import Div from "@local_modules/tags/Div"
import createStyle from "@local_modules/theme/createStyle"
import useFormModel from "@local_modules/useFormModel"
import { useModal } from "@local_modules/useModal"
import { borderRadius, color } from "@theme/index"
import { IChatRoom } from "@type"
import { Schema } from "mongoose"

const ModalCreateRoom = async() => {
  const { createModal } = useModal()

  const { fields, modelValue, resetFields } = useFormModel<Omit<IChatRoom.CreateParams, 'characterId'>>({
    userName: '',
    userSystem: ''
  })

  const createChatRoom = async(props: { characterId: Schema.Types.ObjectId }) => {
    resetFields()

    const chatRoom = await createModal(() => (
      <Div style={styles.modal}>
        <Div style={styles.container}>
          <InputComponent label="* 유저 캐릭터 이름" maxLength={20} {...modelValue('userName')}/>
          <InputComponent label="유저 설정" placeholder="유저 캐릭터의 설정입니다." maxLength={500} {...modelValue('userSystem')}/>
          <Button>대화 생성</Button>
        </Div>
      </Div>
    ))

    return chatRoom
  }

  return { createChatRoom }
}
export default ModalCreateRoom

const styles = createStyle({
  modal: {
    flex: 1,
    backgroundColor: color.backdrop,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: color.white,
    borderRadius: borderRadius.base,
    padding: '20 20 10 20',
    width: '100%',
    maxWidth: 280,
    textAlign: 'center',
    gap: 12
  },
  title: {
    fontSize: 18,
    fontWeight: 600
  },
  content: {
    fontSize: 14
  },
  buttonRow: {
    flexDirection: 'row',
    rowGap: 12
  },
  button: {
    flex: 1
  }
})