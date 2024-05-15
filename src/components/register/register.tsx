import { FC } from 'react';
import { BaseLink, MainLayout, Text } from '@/components';
import styles from './register.module.scss';
import { useRegister } from './hooks';
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';

export const Register: FC = () => {
  const {
    name,
    email,
    password,
    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  } = useRegister();

  return (
    <MainLayout>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Text className="mb-6" textType="medium">
          Регистрация
        </Text>
        <div className={classNames(styles.fields, 'mb-6')}>
          {/* @ts-expect-error */}
          <Input
            placeholder="Имя"
            type="text"
            value={name}
            onChange={handleChangeName}
          />
          {/* @ts-expect-error */}
          <Input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <PasswordInput
            placeholder="Пароль"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <Button htmlType="submit">Зарегистрироваться</Button>
        <div className={classNames(styles.subtext, 'mt-20')}>
          <Text textType="inactiveColor">Уже зарегистрированы?</Text>
          <BaseLink to="/login">Войти</BaseLink>
        </div>
      </form>
    </MainLayout>
  );
};
