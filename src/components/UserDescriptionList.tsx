import { FunctionComponent } from 'react';
import classNames from 'classnames';
import Alarm from '@mui/icons-material/Alarm';
import SelfImprovement from '@mui/icons-material/SelfImprovement';
import { User } from '@/types';
import { relativeDateTime } from '@/utils';

export const UserDescriptionList: FunctionComponent<{
  user: User;
  className?: string;
}> = (props) => {
  return (
    <dl
      className={classNames(
        'flex gap-1 text-xs pt-2 items-center',
        props.className
      )}
    >
      <dt className="text-gray-700 flex items-center gap-1">
        <SelfImprovement className="!size-4" />
        <span className="sr-only sm:not-sr-only">Karma</span>
      </dt>
      <dd className="mr-1 font-semibold">{props.user.karma}</dd>
      <dt className="text-gray-700 flex items-center gap-1">
        <Alarm className="!size-4" />
        <span className="sr-only sm:not-sr-only ">Created</span>
      </dt>
      <dd className="font-semibold">{relativeDateTime(props.user.created)}</dd>
    </dl>
  );
};
