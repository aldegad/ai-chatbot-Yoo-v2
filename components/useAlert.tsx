import createStyle from "@local_modules/theme/createStyle";
import { useModal } from "@local_modules/useModal";
import Div from "@local_modules/tags/Div";
import { borderRadius, color } from "@theme/index";
import Button from "@local_modules/tags/Button";

export type AlertProps = {
  title?: string
  content?: string
  buttons?: {
    text: string
    onClick: () => void
  }[]
}
export default function useAlert() {
  const { createModal } = useModal()
  
  const createAlert = async({ title, content, buttons }:AlertProps) => {
    const loading = await createModal(({ dismiss }) => (
        <Div style={styles.modal} onClick={dismiss}>
          <Div style={styles.container}>
            {
              title && <Div style={styles.title}>{ title }</Div>
            }
            {
              content && <Div style={styles.content}>{ content }</Div>
            }
            <Div style={styles.buttonRow}>
            {!buttons ? (
                <Button 
                  style={styles.button} 
                  onClick={dismiss}
                >
                  확인
                </Button>
              ) : (
                buttons.map((button, index) => (
                  <Button
                    key={index}
                    style={styles.button}
                    onClick={() => {
                      button.onClick();
                      dismiss();
                    }}
                  >
                    {button.text}
                  </Button>
                ))
              )}
            </Div>
          </Div>
        </Div>
      ),
      {
        transparent: true,
        animationType: 'fade'
      }
    )
    return loading
  }

  return { createAlert }
}

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