import { FC, ReactNode } from 'react';
import styles from './modal-overlay.module.scss';

type TModalOverlayProps = {
  children: ReactNode;
  onClose: () => void;
};

export const ModalOverlay: FC<TModalOverlayProps> = ({ children, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      {children}
    </div>
  );
};
