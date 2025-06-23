import { FunctionComponent } from 'react';
import { Spinner } from './Spinner';
import classNames from 'classnames';

export const SuspenseFallBack: FunctionComponent<{
  className?: string;
}> = (props) => {
  return (
    <div
      className={classNames(
        'flex items-center justify-center',
        props.className
      )}
    >
      <Spinner className="size-8 animate-spin" />
    </div>
  );
};
