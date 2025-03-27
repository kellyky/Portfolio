import { createContext, memo, useState } from 'react';

const ModalContext = createContext(
  {
    modalState: false,
    closeModal: () => {},
  }
)

function ModalContextProviderComponent({children}){
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

export const ModalContextProvider = memo(ModalContextProviderComponent);
export default ModalContext;
