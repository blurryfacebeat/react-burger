import { INGREDIENTS_MAP } from '@/utils';
import { useState } from 'react';
import { TTabItem } from '@/components/tabs/tabs.tsx';
import { TIngredientItem } from '@/api';

type TUseBurgerIngredientsTabsProps = {
  data: Record<string, TIngredientItem[]>;
};

export const useBurgerIngredientsTabs = ({
  data,
}: TUseBurgerIngredientsTabsProps) => {
  const tabs: TTabItem[] = Object.keys(data).map((key) => ({
    value: key,
    label: INGREDIENTS_MAP[key],
  }));

  const [currentTab, setCurrentTab] = useState<string>(tabs[0].value);

  const handleSetCurrentTab = (value: string) => {
    setCurrentTab(value);
  };

  return { tabs, currentTab, handleSetCurrentTab };
};
