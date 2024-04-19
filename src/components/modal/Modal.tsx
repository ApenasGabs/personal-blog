import { FC, ReactNode } from "react";

type ModalProps = {
  showModal: boolean;
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ showModal, children }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">{children}</div>
    </div>
  );
};

export default Modal;
