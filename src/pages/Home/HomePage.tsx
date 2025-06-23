import { FunctionComponent, Suspense, use } from 'react';
import { useStories } from '@/client/StoryProvider';
import { SuspenseFallBack } from '@/components';
import { HomePageView } from './';

export const HomePage: FunctionComponent = () => {
  const { getStories } = useStories();
  return (
    <Suspense fallback={<SuspenseFallBack className="h-60" />}>
      <HomePageView storiesPromise={getStories()} />
    </Suspense>
  );
};
