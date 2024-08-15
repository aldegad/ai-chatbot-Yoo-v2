import React, { createContext, useState, useContext, useCallback, ReactNode, useEffect, useRef } from 'react'
import { Modal, ModalProps } from 'react-native'

interface ModalContextType {
  createModal: (content: (props: { dismiss: () => void }) => React.ReactNode, options?: Partial<ModalProps>) => Promise<{ present: () => void; dismiss: () => void }>
}

const ModalContext = createContext<ModalContextType | null>(null)

interface ModalType {
  id: number
  content: (props: { dismiss: () => void }) => React.ReactNode
  visible: boolean
  options: Partial<ModalProps>
  present: () => void
  dismiss: () => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = useState<ModalType[]>([])
  const timersRef = useRef<{ [key: number]: NodeJS.Timeout }>({})

  const createModal = useCallback((content: (props: { dismiss: () => void }) => React.ReactNode, options: Partial<ModalProps> = {}) => {
    return new Promise<{ present: () => void; dismiss: () => void }>((resolve) => {
      const modal: ModalType = {
        id: Date.now(),
        content,
        visible: false,
        options,
        present: () => {
          setModals((prev) => prev.map(m => m.id === modal.id ? {...m, visible: true} : m))
        },
        dismiss: () => {
          setModals((prev) => prev.map(m => m.id === modal.id ? {...m, visible: false} : m))
          timersRef.current[modal.id] = setTimeout(() => {
            setModals((prev) => prev.filter((m) => m.id !== modal.id))
            delete timersRef.current[modal.id]
          }, 300)
        }
      }
      setModals((prev) => [...prev, modal])
      resolve({ present: modal.present, dismiss: modal.dismiss })
    })
  }, [])

  useEffect(() => {
    return () => {
      // Clean up any remaining timers when the component unmounts
      Object.values(timersRef.current).forEach(clearTimeout)
    }
  }, [])

  return (
    <ModalContext.Provider value={{ createModal }}>
      {children}
      {modals.map((modal) => (
        <Modal 
          key={modal.id} 
          transparent={modal.options.transparent ?? true} 
          visible={modal.visible}
          animationType={modal.options.animationType ?? "fade"}
          onRequestClose={modal.dismiss}
          {...modal.options}
        >
          {modal.content({ dismiss: modal.dismiss })}
        </Modal>
      ))}
    </ModalContext.Provider>
  )
}

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}