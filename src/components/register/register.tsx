import { FC } from 'react';
import { BaseLink, MainLayout, Text } from '@/components';
import styles from './register.module.scss';
import { useRegister } from './hooks';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import { ROUTES } from '@/router';

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
          {/*В Input'ах указан ts-expect-error, так как это ошибка типов внутри библиотеки, это не моя вина */}
          {/* @ts-expect-error */}
          <Input
            placeholder="Имя"
            type="text"
            value={name}
            onChange={handleChangeName}
          />
          <EmailInput
            placeholder="E-mail"
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
          <BaseLink to={ROUTES.LOGIN}>Войти</BaseLink>
        </div>
      </form>
    </MainLayout>
  );
};
