import { FunctionComponent } from 'react';
import classNames from 'classnames';
import MilitaryTech from '@mui/icons-material/MilitaryTech';
import Face from '@mui/icons-material/Face';
import Alarm from '@mui/icons-material/Alarm';
import { Story } from '@/types';
import { relativeDateTime } from '@/utils';

export const StoryDescriptionList: FunctionComponent<{
  story: Story;
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
        <MilitaryTech className="!size-4" />
        <span className="sr-only sm:not-sr-only">Points</span>
      </dt>
      <dd className="mr-1 font-semibold">{props.story.score}</dd>
      <dt className="text-gray-700 flex items-center gap-1">
        <Face className="!size-4" />
        <span className="sr-only sm:not-sr-only">Author</span>
      </dt>
      <dd className="mr-1 font-semibold">{props.story.by}</dd>
      <dt className="text-gray-700 flex items-center gap-1">
        <Alarm className="!size-4" />
        <span className="sr-only sm:not-sr-only ">Posted</span>
      </dt>
      <dd className="font-semibold">{relativeDateTime(props.story.time)}</dd>
    </dl>
  );
};
