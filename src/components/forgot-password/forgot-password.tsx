import { FC } from 'react';
import { useForgotPassword } from './hooks';
import styles from './forgot-password.module.scss';
import { BaseLink, MainLayout, Text } from '@/components';
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';

export const ForgotPassword: FC = () => {
  const { email, handleChangeEmail, handleSubmit } = useForgotPassword();

  return (
    <MainLayout>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Text className="mb-6" textType="medium">
          Восстановление пароля
        </Text>
        <div className="mb-6">
          {/* @ts-expect-error */}
          <Input
            placeholder="Укажите e-mail"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <Button htmlType="submit">Восстановить</Button>
        <div className={classNames(styles.subtext, 'mt-20')}>
          <Text textType="inactiveColor">Вспомнили пароль?</Text>
          <BaseLink to="/login">Войти</BaseLink>
        </div>
      </form>
    </MainLayout>
  );
};
