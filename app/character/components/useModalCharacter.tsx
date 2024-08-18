import Div from "@local_modules/tags/Div"
import createStyle from "@local_modules/theme/createStyle"
import { useModal } from "@local_modules/useModal"
import { borderRadius, color } from "@theme/index"

const useModalcharacter = () => {
  const { createModal } = useModal()

  const createCharacter = async() => {
    const characterModal = await createModal(() => (
      <Div style={styles.modal}>
        
      </Div>
    ), {
      transparent: true,
      animationType: 'fade'
    })
    return characterModal
  }
  
  return { createCharacter }
}
export default useModalcharacter

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