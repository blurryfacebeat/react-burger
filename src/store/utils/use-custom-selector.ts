import { useSelector } from 'react-redux';
import { TRootState } from '@/store';

export const useCustomSelector = <T extends keyof TRootState>(
  firstEntity: T,
) => {
  const storeState = useSelector((state: TRootState) => state[firstEntity]);

  return { storeState };
};
