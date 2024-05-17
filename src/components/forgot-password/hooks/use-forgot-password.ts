import { ChangeEvent, FormEvent, useState } from 'react';

export const useForgotPassword = () => {
  const [email, setEmail] = useState<string>('');

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return { email, handleChangeEmail, handleSubmit };
};
