import { FunctionComponent } from 'react';
import { Link } from 'react-router';
import { Story } from '@/types';
import { TypeIcon, StoryDescriptionList } from '@/components';
import { getHostnameFromUrlString } from '@/utils';

export const StoryPreview: FunctionComponent<{ story: Story }> = (props) => {
  return (
    <Link to={`/story/${props.story.id}`}>
      <article className="border-b border-b-gray-300 py-4 overflow-hidden">
        <header className="flex items-start justify-start gap-3 w-full">
          <TypeIcon type={props.story.type} />
          <hgroup className="block">
            <h3 className="text-lg font-bold line-clamp-2 leading-6">
              {props.story.title}
            </h3>
            {!!props.story.url && (
              <p className="text-gray-500 text-sm line-clamp-1 break-all">
                {getHostnameFromUrlString(props.story.url)}
              </p>
            )}
          </hgroup>
        </header>
        <footer>
          <StoryDescriptionList story={props.story} className="pl-10" />
        </footer>
      </article>
    </Link>
  );
};
