import { MouseEvent } from 'react';

type TUseBurgerIngredientsItemsScrollProps = {
  onSetActiveTab: (value: string) => void;
};

export const useBurgerIngredientsItemsScroll = ({
  onSetActiveTab,
}: TUseBurgerIngredientsItemsScrollProps) => {
  const handleScrollCapture = (event: MouseEvent<HTMLDivElement>) => {
    const containerBounds = event.currentTarget.getBoundingClientRect();
    const titles = event.currentTarget.querySelectorAll(
      '[data-target=ingredientsHeader]',
    );

    let closestDistance = Number.MAX_SAFE_INTEGER;
    let closestHeaderIndex = -1;

    for (let i = 0; i < titles.length; i++) {
      const headerBounds = titles[i].getBoundingClientRect();
      const distanceToTop = Math.abs(headerBounds.top - containerBounds.top);

      if (distanceToTop < closestDistance) {
        closestDistance = distanceToTop;
        closestHeaderIndex = i;
      }
    }

    if (closestHeaderIndex !== -1) {
      const tabId = titles[closestHeaderIndex].getAttribute('id');
      onSetActiveTab(tabId?.split('-')[0] as string);
    }
  };

  return { handleScrollCapture };
};
