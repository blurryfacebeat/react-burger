import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmResetPassword } from '@/api';
import { ROUTES } from '@/router';
import { recoverPasswordActiveLocalStorage } from '@/utils';

export const useResetPassword = () => {
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleChangeCode = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await confirmResetPassword(password, code);
      window.alert('Пароль успешно изменен');
      recoverPasswordActiveLocalStorage.remove();
      navigate(ROUTES.LOGIN);
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    }
  };

  useEffect(() => {
    if (!recoverPasswordActiveLocalStorage.get()) {
      navigate(ROUTES.FORGOT_PASSWORD);
    }
  }, [navigate]);

  return {
    code,
    password,
    handleChangeCode,
    handleChangePassword,
    handleSubmit,
  };
};
