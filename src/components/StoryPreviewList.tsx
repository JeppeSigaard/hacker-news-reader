import { FunctionComponent, Suspense, use } from 'react';
import { useStories } from '@/hooks';
import { StoryPreview, SuspenseFallBack } from '.';
import { Story } from '@/types';

const StoryPreviewListView: FunctionComponent<{
  storiesPromise: Promise<Story[]>;
}> = (props) => {
  const stories = use(props.storiesPromise);

  return (
    <ol className="overflow-hidden break-all">
      {stories.map((story) => (
        <li key={story.id}>
          <StoryPreview story={story} />
        </li>
      ))}
    </ol>
  );
};

export const StoryPreviewList: FunctionComponent = () => {
  const { getStories } = useStories();
  return (
    <Suspense fallback={<SuspenseFallBack className="h-60" />}>
      <StoryPreviewListView storiesPromise={getStories()} />
    </Suspense>
  );
};
