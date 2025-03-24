import { createContext, useState } from 'react';

const ModalContext = createContext(
  {
    modalState: false,
    closeModal: () => {},
  }
)

export function ModalContextProvider({children}){
  const [showModal, setShowModal] = useState(false);

  function handleClose(){
    setShowModal(previous => !previous)
  }

  const modalContextValues = {
    modalState: showModal,
    closeModal: handleClose,
  }

  return (
    <ModalContext value={modalContextValues}>
      {children}
    </ModalContext>
  )
}

export default ModalContext;
