import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Identifier, XYCoord } from 'dnd-core';

type TUseBurgerConstructorItemDndProps = {
  id: string;
  index?: number;
  isDraggable?: boolean;
  onMoveCard?: (dragIndex: number, hoverIndex: number) => void;
};

type TDragItem = {
  index: number;
  id: string;
  type: string;
};

const itemType = 'constructor-item';

export const useBurgerConstructorItemDnd = ({
  id,
  index,
  onMoveCard,
  isDraggable,
}: TUseBurgerConstructorItemDndProps) => {
  const targetRef = useRef<HTMLLIElement>(null);

  const [, drop] = useDrop<TDragItem, void, { handlerId: Identifier | null }>({
    accept: itemType,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: TDragItem, monitor) {
      if (!targetRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index as number;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = targetRef.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      onMoveCard?.(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: itemType,
    item: () => {
      return { id, index };
    },
    collect: (monitor: { isDragging: () => boolean }) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: isDraggable,
  });

  drag(drop(targetRef));

  return { targetRef, isDragging };
};
