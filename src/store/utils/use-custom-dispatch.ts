import { useDispatch } from 'react-redux';
import { TAppDispatch } from '@/store';

export const useCustomDispatch = () => {
  const dispatch = useDispatch<TAppDispatch>();

  return { dispatch };
};
