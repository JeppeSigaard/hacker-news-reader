import { StoryPreview } from '@/components';
import { Story } from '@/types';
import { FunctionComponent, use } from 'react';

export const HomePageView: FunctionComponent<{
  storiesPromise: Promise<Story[]>;
}> = (props) => {
  const stories = use(props.storiesPromise);

  return (
    <ol>
      {stories.map((story) => (
        <li key={story.id}>
          <StoryPreview story={story} />
        </li>
      ))}
    </ol>
  );
};
