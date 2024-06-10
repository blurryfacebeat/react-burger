import { ChangeEvent, FormEvent, useState } from 'react';
import { loginAsync, useCustomDispatch } from '@/store';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { dispatch } = useCustomDispatch();

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    dispatch(loginAsync(email, password));
  };

  return {
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  };
};
