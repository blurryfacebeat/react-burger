import { FC, ReactNode, useEffect, MouseEvent } from 'react';
import { ModalOverlay } from './ui';
import styles from './modal.module.scss';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { Text } from '@/components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

type TModalProps = {
  children: ReactNode;
  onClose: () => void;
  title?: string;
  className?: string;
};

export const Modal: FC<TModalProps> = ({
  children,
  title,
  className,
  onClose,
}) => {
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  useEffect(() => {
    document.documentElement.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <>
      {createPortal(
        <ModalOverlay onClose={onClose}>
          <div
            onClick={handleModalClick}
            className={classNames(styles.modal, 'p-10', className)}
          >
            <div className={styles.modalHeader}>
              {title && <Text textType="large">{title}</Text>}
              <span className={styles.closeIcon}>
                <CloseIcon onClick={onClose} type="primary" />
              </span>
            </div>
            {children}
          </div>
        </ModalOverlay>,
        document.getElementById('modal-root')!,
      )}
    </>
  );
};
