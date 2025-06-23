import { AuthorCard, StoryDescriptionList } from '@/components';
import { Story } from '@/types';
import { FunctionComponent, use } from 'react';
import { Link } from 'react-router';
import LinkIcon from '@mui/icons-material/LinkTwoTone';

export const StoryDetail: FunctionComponent<{
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
        <h1 className="text-3xl sm:text-5xl font-bold">{story.title}</h1>
        <StoryDescriptionList story={story} />
      </header>
      <main className="grid gap-4 py-4 border-b border-b-gray-200">
        {!!story.text && <p>{story.text}</p>}
        <Link
          to={story.url}
          className="p-3 border border-gray-300 rounded-xl flex gap-2 items-center"
        >
          <LinkIcon className="rotate-45 !size-6" />
          <span className="line-clamp-1 break-all">{story.url}</span>
        </Link>
      </main>
      <footer>
        <AuthorCard userSlug={story.by} />
      </footer>
    </article>
  );
};
