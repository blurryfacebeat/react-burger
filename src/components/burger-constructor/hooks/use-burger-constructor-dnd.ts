import { useDrop } from 'react-dnd';
import { BURGER_INGREDIENT_DRAG_AND_DROP_NAME } from '@/components';
import { swipeIngredientsInBurgerConstructor, TAppDispatch } from '@/store';
import { useDispatch } from 'react-redux';

export const useBurgerConstructorDnd = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: BURGER_INGREDIENT_DRAG_AND_DROP_NAME,
    drop: () => ({
      name: 'burgerConstructor',
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    dispatch(
      swipeIngredientsInBurgerConstructor({
        fromIndex: dragIndex,
        toIndex: hoverIndex,
      }),
    );
  };

  return {
    canDrop,
    isOver,
    drop,
    moveCard,
  };
};
