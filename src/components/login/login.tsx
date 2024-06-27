import { FC } from 'react';
import { useLogin } from './hooks';
import { BaseLink, MainLayout, Text } from '@/components';
import classNames from 'classnames';
import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './login.module.scss';
import { ROUTES } from '@/router';

export const Login: FC = () => {
  const {
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  } = useLogin();

  return (
    <MainLayout>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Text className="mb-6" textType="medium">
          Вход
        </Text>
        <div className={classNames(styles.fields, 'mb-6')}>
          <EmailInput
            data-test-id="login-email-field"
            placeholder="E-mail"
            value={email}
            onChange={handleChangeEmail}
          />
          <PasswordInput
            data-test-id="login-password-field"
            placeholder="Пароль"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <Button data-test-id="login-button" htmlType="submit">
          Войти
        </Button>
        <div className={classNames(styles.subtextContainer, 'mt-20')}>
          <div className={styles.subtext}>
            <Text textType="inactiveColor">Вы — новый пользователь?</Text>
            <BaseLink to={ROUTES.REGISTER}>Зарегистрироваться</BaseLink>
          </div>
          <div className={styles.subtext}>
            <Text textType="inactiveColor">Забыли пароль?</Text>
            <BaseLink to={ROUTES.FORGOT_PASSWORD}>Восстановить пароль</BaseLink>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};
