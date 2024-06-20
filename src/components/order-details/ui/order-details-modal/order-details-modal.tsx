import { FC } from 'react';
import { OrderDetails } from '../../order-details.tsx';
import { Modal } from '@/components';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './order-details-modal.module.scss';

export const OrderDetailsModal: FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate(-1);
  };

  return (
    <Modal
      withSmallTitle
      className={styles.container}
      title={`#${params.orderNumber}`}
      onClose={handleModalClose}
    >
      <OrderDetails />
    </Modal>
  );
};
