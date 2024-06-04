import { ChangeEvent, FormEvent, useState } from 'react';
import { resetPassword } from '@/api';
import { isCorrectedEmail, recoverPasswordActiveLocalStorage } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router';

export const useForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (isCorrectedEmail(email)) {
      try {
        await resetPassword(email);
        recoverPasswordActiveLocalStorage.set('true');
        navigate(ROUTES.RESET_PASSWORD);
      } catch (error) {
        if (error instanceof Error) {
          window.alert(error.message);
        }
      }
    }
  };

  return { email, handleChangeEmail, handleSubmit };
};
