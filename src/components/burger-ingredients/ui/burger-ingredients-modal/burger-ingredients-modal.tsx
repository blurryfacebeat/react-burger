import { FC } from 'react';
import { Modal } from '@/components';
import classNames from 'classnames';
import styles from './burger-ingredients-modal.module.scss';
import { BurgerIngredientsDetails } from '../burger-ingredients-details';
import { useNavigate, useParams } from 'react-router-dom';
import { useCustomSelector } from '@/store';

export const BurgerIngredientsModal: FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate(-1);
  };

  const {
    storeState: { ingredients },
  } = useCustomSelector<'ingredients'>('ingredients');

  const currentIngredient = ingredients.find(
    (item) => item._id === params.ingredientId,
  );

  return (
    <Modal
      data-test-id="ingredient-modal"
      className={classNames(styles.burgerIngredientsModal, 'pb-15')}
      title="Детали ингредиента"
      onClose={handleModalClose}
    >
      <BurgerIngredientsDetails item={currentIngredient} />
    </Modal>
  );
};
