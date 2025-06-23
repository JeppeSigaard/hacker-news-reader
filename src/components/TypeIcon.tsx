import { Story } from '@/types';
import { FunctionComponent } from 'react';
import MenuBook from '@mui/icons-material/MenuBook';
import WorkIcon from '@mui/icons-material/Work';

export const TypeIcon: FunctionComponent<{
  type: Story['type'];
  classNames?: string;
}> = (props) => {
  const iconClasses = '!size-7 text-gray-600 mr-1';
  return props.type === 'story' ? (
    <MenuBook className={iconClasses} />
  ) : (
    <WorkIcon className={iconClasses} />
  );
};
