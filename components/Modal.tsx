import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

type ModalType = {
  comp: React.ReactNode;
  state: boolean;
  setState: (b: false) => void;
};

const Modal = ({ comp, state, setState }: ModalType) => {
  useEffect(() => {
    if (state) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'scroll';
    }
  }, [state]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const Modalbox = () => {
    return (
      <div className={`modal-box ${state ? 'show' : 'hide'}`}>
        <div onClick={() => setState(false)}></div>
        <div>
          <div>{comp}</div>
        </div>
      </div>
    );
  };

  return mounted
    ? createPortal(<Modalbox />, document.body as HTMLElement)
    : null;
};

export default Modal;
