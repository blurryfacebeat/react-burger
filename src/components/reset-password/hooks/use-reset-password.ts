import { ChangeEvent, FormEvent, useState } from 'react';

export const useResetPassword = () => {
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeCode = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return {
    code,
    password,
    handleChangeCode,
    handleChangePassword,
    handleSubmit,
  };
};
