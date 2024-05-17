import { FC } from 'react';
import { useResetPassword } from './hooks';
import { BaseLink, MainLayout, Text } from '@/components';
import styles from './reset-password.module.scss';
import classNames from 'classnames';
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const ResetPassword: FC = () => {
  const {
    code,
    password,
    handleChangeCode,
    handleChangePassword,
    handleSubmit,
  } = useResetPassword();

  return (
    <MainLayout>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={classNames(styles.fields, 'mb-6')}>
          <PasswordInput
            placeholder="Введите новый пароль"
            value={password}
            onChange={handleChangePassword}
          />
          {/* @ts-expect-error */}
          <Input
            placeholder="Введите код из письма"
            type="text"
            value={code}
            onChange={handleChangeCode}
          />
        </div>
        <Button htmlType="submit">Сохранить</Button>
        <div className={classNames(styles.subtext, 'mt-20')}>
          <Text textType="inactiveColor">Вспомнили пароль?</Text>
          <BaseLink to="/login">Войти</BaseLink>
        </div>
      </form>
    </MainLayout>
  );
};
