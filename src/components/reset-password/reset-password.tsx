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
import { ROUTES } from '@/router';

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
        <Text className="mb-6" textType="medium">
          Восстановление пароля
        </Text>
        <div className={classNames(styles.fields, 'mb-6')}>
          <PasswordInput
            placeholder="Введите новый пароль"
            value={password}
            onChange={handleChangePassword}
          />
          {/*В Input'ах указан ts-expect-error, так как это ошибка типов внутри библиотеки, это не моя вина */}
          {/* @ts-expect-error */}
          <Input
            placeholder="Введите код из письма"
            type="text"
            value={code}
            onChange={handleChangeCode}
          />
        </div>
        <Button disabled={!password || !code} htmlType="submit">
          Сохранить
        </Button>
        <div className={classNames(styles.subtext, 'mt-20')}>
          <Text textType="inactiveColor">Вспомнили пароль?</Text>
          <BaseLink to={ROUTES.LOGIN}>Войти</BaseLink>
        </div>
      </form>
    </MainLayout>
  );
};
