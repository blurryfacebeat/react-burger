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

    for (let i = 0; i < titles.length; i++) {
      const headerBounds = titles[i].getBoundingClientRect();

      if (
        headerBounds.top >= containerBounds.top &&
        headerBounds.top <= containerBounds.bottom
      ) {
        const tabId = titles[i].getAttribute('id');
        onSetActiveTab(tabId?.split('-')[0] as string);

        return;
      }
    }
  };

  return { handleScrollCapture };
};
