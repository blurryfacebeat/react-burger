import { FC } from 'react';
import styles from './profile-info.module.scss';
import { useUpdateProfile } from './hooks';
import {
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const ProfileInfo: FC = () => {
  const {
    name,
    email,
    password,
    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  } = useUpdateProfile();

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <EmailInput
        isIcon
        placeholder="Имя"
        value={name}
        onChange={handleChangeName}
      />
      <EmailInput
        isIcon
        placeholder="Логин"
        value={email}
        onChange={handleChangeEmail}
      />
      <PasswordInput
        icon="EditIcon"
        placeholder="Пароль"
        value={password}
        onChange={handleChangePassword}
      />
    </form>
  );
};
