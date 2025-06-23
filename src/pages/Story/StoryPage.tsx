import { FunctionComponent, Suspense, use } from 'react';
import { useParams } from 'react-router';
import { useStories } from '@/client/StoryProvider';
import { SuspenseFallBack } from '@/components';
import { StoryView } from '.';

export const StoryPage: FunctionComponent = () => {
  const { storyId } = useParams();
  const { getStory } = useStories();

  if (!storyId) {
    return null;
  }

  return (
    <Suspense fallback={<SuspenseFallBack className="h-60" />}>
      <StoryView storyPromise={getStory(storyId)} />
    </Suspense>
  );
};
