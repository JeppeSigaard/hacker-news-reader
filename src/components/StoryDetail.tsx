import {
  AuthorCard,
  StoryDescriptionList,
  SuspenseFallBack,
} from '@/components';
import { Story } from '@/types';
import { FunctionComponent, Suspense, use } from 'react';
import { Link, useParams } from 'react-router';
import LinkIcon from '@mui/icons-material/LinkTwoTone';
import { useStories } from '@/hooks';

const StoryDetailView: FunctionComponent<{
  storyPromise: Promise<Story | null>;
}> = (props) => {
  const story = use(props.storyPromise);

  if (!story) {
    return (
      <article className="py-4">
        <header>
          <h1 className="text-3xl sm:text-5xl font-bold">
            Article not found 😔
          </h1>
        </header>
        <main>
          <p>
            We could not find the article you're looking for. Try refreshing the
            page or go back to{' '}
            <Link to="/" className="underline">
              the stories overview
            </Link>
          </p>
        </main>
      </article>
    );
  }

  return (
    <article className="py-4">
      <header className="border-b border-b-gray-200 pb-3">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4">
          {story.title}
        </h1>
        <StoryDescriptionList story={story} />
      </header>
      <main className="grid gap-4 py-4 border-b border-b-gray-200 overflow-hidden break-all">
        {!!story.text && (
          <section dangerouslySetInnerHTML={{ __html: story.text }} />
        )}
        {!!story.url && (
          <Link
            to={story.url}
            className="p-3 border border-gray-300 rounded-xl flex gap-2 items-center"
          >
            <LinkIcon className="rotate-45 !size-6" />
            <span className="line-clamp-1 break-all">{story.url}</span>
          </Link>
        )}
      </main>
      <footer>
        <AuthorCard userSlug={story.by} />
      </footer>
    </article>
  );
};

export const StoryDetail: FunctionComponent = () => {
  const { storyId } = useParams();
  const { getStory } = useStories();

  if (!storyId) {
    return null;
  }

  return (
    <Suspense fallback={<SuspenseFallBack className="h-60" />}>
      <StoryDetailView storyPromise={getStory(storyId)} />
    </Suspense>
  );
};
