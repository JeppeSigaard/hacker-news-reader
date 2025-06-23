import { FunctionComponent, Suspense, use } from 'react';
import { useParams } from 'react-router';
import { useStories } from '@/hooks';
import { StoryDetail, SuspenseFallBack } from '@/components';

export const Story: FunctionComponent = () => {
  const { storyId } = useParams();
  const { getStory } = useStories();

  if (!storyId) {
    return null;
  }

  return (
    <Suspense fallback={<SuspenseFallBack className="h-60" />}>
      <StoryDetail storyPromise={getStory(storyId)} />
    </Suspense>
  );
};
