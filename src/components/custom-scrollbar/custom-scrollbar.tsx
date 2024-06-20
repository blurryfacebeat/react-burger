import { FC } from 'react';
import SimpleBar, { Props } from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './custom-scrollbar.styles.scss';

export const CustomScrollbar: FC<Props> = ({ children, ...otherProps }) => {
  return (
    <SimpleBar {...otherProps} autoHide={false}>
      {children}
    </SimpleBar>
  );
};
