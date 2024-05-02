import { useDrag } from 'react-dnd';
import { BURGER_INGREDIENT_DRAG_AND_DROP_NAME } from '@/components';
import { addIngredientToConstructor, TAppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { TIngredientItem } from '@/api';

type TUseBurgerIngredientsItemDndProps = {
  item: TIngredientItem;
};

type TDropResult = {
  id: string;
};

export const useBurgerIngredientsItemDnd = ({
  item,
}: TUseBurgerIngredientsItemDndProps) => {
  const dispatch = useDispatch<TAppDispatch>();

  const [{ isDragging }, drag] = useDrag(() => ({
    item,
    type: BURGER_INGREDIENT_DRAG_AND_DROP_NAME,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<TDropResult>();

      if (item && dropResult) {
        dispatch(addIngredientToConstructor(item));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return {
    isDragging,
    drag,
  };
};
