import { FC } from 'react';
import { Text } from '@/components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './error-placeholder.module.scss';

type TErrorPlaceholderProps = {
  text: string;
};

export const ErrorPlaceholder: FC<TErrorPlaceholderProps> = ({ text }) => {
  const handleClick = () => {
    location.reload();
  };

  return (
    <div className={styles.errorPlaceholder}>
      <Text textType="large">{text}</Text>
      <Button
        type="primary"
        size="large"
        htmlType="button"
        onClick={handleClick}
      >
        Обновить страницу
      </Button>
    </div>
  );
};
