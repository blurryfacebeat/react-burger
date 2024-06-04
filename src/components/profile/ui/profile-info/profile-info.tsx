import { FC } from 'react';
import styles from './profile-info.module.scss';
import { useUpdateProfile } from './hooks';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileInput } from '@/components';

export const ProfileInfo: FC = () => {
  const {
    name,
    email,
    password,
    isFieldsChanged,
    isUpdateLoading,
    defaultName,
    defaultPassword,
    defaultEmail,
    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
    handleReset,
  } = useUpdateProfile();

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <ProfileInput
        type="text"
        placeholder="Имя"
        value={name}
        defaultValue={defaultName}
        isLoading={isUpdateLoading}
        onChange={handleChangeName}
      />
      <ProfileInput
        type="email"
        placeholder="Логин"
        value={email}
        defaultValue={defaultEmail}
        isLoading={isUpdateLoading}
        onChange={handleChangeEmail}
      />
      <ProfileInput
        type="password"
        placeholder="Пароль"
        value={password}
        defaultValue={defaultPassword}
        isLoading={isUpdateLoading}
        onChange={handleChangePassword}
      />
      {isFieldsChanged && (
        <div className={styles.buttons} onClick={handleReset}>
          <Button
            disabled={isUpdateLoading}
            htmlType="reset"
            type="secondary"
            size="medium"
          >
            Отмена
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isUpdateLoading}
            htmlType="submit"
          >
            {isUpdateLoading ? 'Загрузка...' : 'Сохранить'}
          </Button>
        </div>
      )}
    </form>
  );
};
