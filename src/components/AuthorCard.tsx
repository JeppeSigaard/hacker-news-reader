import { FunctionComponent, Suspense, use } from 'react';
import Face from '@mui/icons-material/Face';
import { Story, User } from '@/types';
import { useStories } from '@/hooks';
import { SuspenseFallBack, UserDescriptionList } from '@/components';

const AuthorCardView: FunctionComponent<{
  userPromise: Promise<User | null>;
}> = (props) => {
  const user = use(props.userPromise);

  if (!user) {
    return null;
  }

  return (
    <div className="py-4">
      <header className="flex items-center gap-2">
        <Face className="!size-6" />
        <h3 className="text-xl font-bold">{user.id}</h3>
      </header>
      <UserDescriptionList user={user} />
    </div>
  );
};

export const AuthorCard: FunctionComponent<{ userSlug: Story['by'] }> = (
  props
) => {
  const { getUser } = useStories();

  return (
    <Suspense fallback={<SuspenseFallBack className="h-30" />}>
      <AuthorCardView userPromise={getUser(props.userSlug)} />
    </Suspense>
  );
};
