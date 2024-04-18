import { useEffect, useState } from 'react';
import { getIngredients, TDataItem } from '@/api';

export const useApp = () => {
  const [dataItems, setDataItems] = useState<TDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getIngredients();

        if (response) {
          setDataItems(response);
        }
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }

        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return { dataItems, isLoading, isError, errorMessage };
};
