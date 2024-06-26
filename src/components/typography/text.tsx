import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

type TTextType =
  | 'default'
  | 'large'
  | 'medium'
  | 'small'
  | 'inactiveColor'
  | 'digitsDefault'
  | 'digitsMedium'
  | 'digitsLarge';

type TTextProps = PropsWithChildren<{
  textType?: TTextType;
  className?: string;
  onClick?: () => void;
}>;

export const Text: FC<TTextProps> = ({
  children,
  className,
  textType = 'default',
  onClick,
  ...otherProps
}) => {
  const getTextTypeClass = () => {
    switch (textType) {
      case 'default':
        return 'text_type_main-default';
      case 'large':
        return 'text_type_main-large';
      case 'medium':
        return 'text_type_main-medium';
      case 'small':
        return 'text_type_main-small';
      case 'inactiveColor':
        return 'text_type_main-default text_color_inactive';
      case 'digitsDefault':
        return 'text_type_digits-default';
      case 'digitsMedium':
        return 'text_type_digits-medium';
      case 'digitsLarge':
        return 'text_type_digits-large';
    }
  };

  return (
    <p
      className={classNames('text', getTextTypeClass(), className)}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </p>
  );
};
