import { FormEvent, useEffect, useRef, useState } from 'react';
import { setProfile, useCustomDispatch, useCustomSelector } from '@/store';
import { updateProfile } from '@/api';
import { isCorrectedEmail } from '@/utils';

export const useUpdateProfile = () => {
  const {
    storeState: { profile },
  } = useCustomSelector<'profile'>('profile');
  const { dispatch } = useCustomDispatch();

  const oldPassword = useRef<string>('');

  const [isUpdateLoading, setIsUpdateLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>(oldPassword.current);

  const setDefaultFields = () => {
    if (profile) {
      setName(profile.name);
      setEmail(profile.email);
      setPassword(oldPassword.current);
    }
  };

  useEffect(() => {
    setDefaultFields();
  }, [profile]);

  const isFieldsChanged: boolean =
    name !== profile?.name ||
    email !== profile?.email ||
    oldPassword.current !== password;

  const handleChangeName = (value: string) => {
    setName(value);
  };

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!isFieldsChanged) {
      return;
    }

    if (isCorrectedEmail(email)) {
      try {
        setIsUpdateLoading(true);

        await updateProfile(email, name, password || undefined);

        dispatch(setProfile({ email, name }));
        oldPassword.current = password;
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      } finally {
        setIsUpdateLoading(false);
      }
    }
  };

  const handleReset = () => {
    setDefaultFields();
  };

  return {
    name,
    email,
    password,
    isFieldsChanged,
    isUpdateLoading,
    defaultName: profile?.name,
    defaultEmail: profile?.email,
    defaultPassword: oldPassword.current,
    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
    handleReset,
  };
};
