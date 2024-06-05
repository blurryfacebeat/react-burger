import { FC } from 'react';
import { Modal } from '@/components';
import classNames from 'classnames';
import styles from './burger-ingredients-modal.module.scss';
import { BurgerIngredientsDetails } from '../burger-ingredients-details';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TRootState } from '@/store';

export const BurgerIngredientsModal: FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate(-1);
  };

  const ingredients = useSelector(
    (state: TRootState) => state.ingredients.ingredients,
  );

  const currentIngredient = ingredients.find(
    (item) => item._id === params.ingredientId,
  );

  return (
    <Modal
      className={classNames(styles.burgerIngredientsModal, 'pb-15')}
      title="Детали ингредиента"
      onClose={handleModalClose}
    >
      <BurgerIngredientsDetails item={currentIngredient} />
    </Modal>
  );
};
