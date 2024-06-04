import { ChangeEvent, FormEvent, useState } from 'react';
import { register } from '@/api';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router';

export const useRegister = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await register(email, password, name);
      alert('Вы успешно зарегистрировались');
      navigate(ROUTES.HOME);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return {
    name,
    email,
    password,
    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  };
};
