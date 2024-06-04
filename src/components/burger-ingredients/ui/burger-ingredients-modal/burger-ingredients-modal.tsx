import { FC } from 'react';
import { Modal } from '@/components';
import classNames from 'classnames';
import styles from './burger-ingredients-modal.module.scss';
import { BurgerIngredientsDetails } from '../burger-ingredients-details';
import { useDispatch } from 'react-redux';
import { setSelectedIngredient, TAppDispatch } from '@/store';
import { useNavigate } from 'react-router-dom';

export const BurgerIngredientsModal: FC = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const navigate = useNavigate();

  const handleModalClose = () => {
    dispatch(setSelectedIngredient(null));
    navigate(-1);
  };

  return (
    <Modal
      className={classNames(styles.burgerIngredientsModal, 'pb-15')}
      title="Детали ингредиента"
      onClose={handleModalClose}
    >
      <BurgerIngredientsDetails />
    </Modal>
  );
};
