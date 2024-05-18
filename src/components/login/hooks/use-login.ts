import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '@/api';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    }
  };

  return {
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  };
};
