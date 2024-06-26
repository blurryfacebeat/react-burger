import { FC, useEffect, useRef, useState } from 'react';
import {
  EmailInput,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';

type TProfileInputProps = {
  type: 'password' | 'email' | 'text';
  placeholder: string;
  value: string;
  isLoading: boolean;
  defaultValue?: string;
  onChange: (value: string) => void;
};

export const ProfileInput: FC<TProfileInputProps> = ({
  type,
  placeholder,
  defaultValue,
  isLoading,
  onChange,
  value,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const targetRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => {
    if (!isEdit) {
      setIsEdit(true);
      setTimeout(() => {
        targetRef.current?.focus();
      }, 0);
    } else {
      onChange(defaultValue || '');
      setIsEdit(false);
    }
  };

  useEffect(() => {
    if (isLoading) {
      setIsEdit(false);
    }
  }, [isLoading]);

  return (
    <>
      {type === 'email' ? (
        <>
          <EmailInput
            placeholder={placeholder}
            value={value}
            disabled={!isEdit}
            /* @ts-ignore - здесь ts-ignore по причине ошибки в UI-kit. Без этого я не могу сделать кастомное поле, как по дизайну и по требованиям */
            icon={isEdit ? 'CloseIcon' : 'EditIcon'}
            onChange={(event) => onChange(event.target.value)}
            onIconClick={handleIconClick}
          />
        </>
      ) : (
        <>
          {/*В Input'ах указан ts-expect-error, так как это ошибка типов внутри библиотеки, это не моя вина */}
          {/* @ts-expect-error */}
          <Input
            placeholder={placeholder}
            type={type}
            value={value}
            ref={targetRef}
            disabled={!isEdit}
            icon={isEdit ? 'CloseIcon' : 'EditIcon'}
            onChange={(event) => onChange(event.target.value)}
            onIconClick={handleIconClick}
          />
        </>
      )}
    </>
  );
};
