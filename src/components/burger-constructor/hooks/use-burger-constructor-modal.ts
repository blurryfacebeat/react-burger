import {
  closeCurrentOrderModal,
  useCustomDispatch,
  useCustomSelector,
} from '@/store';

export const useBurgerConstructorModal = () => {
  const { dispatch } = useCustomDispatch();

  const {
    storeState: { isModalOpen },
  } = useCustomSelector<'currentOrder'>('currentOrder');

  const handleModalClose = () => {
    dispatch(closeCurrentOrderModal());
  };

  return {
    isModalOpen,
    handleModalClose,
  };
};
