import { FunctionComponent } from 'react';
import { Link, useParams } from 'react-router';

import BackArrow from '@mui/icons-material/ArrowBackIosNew';
import Home from '@mui/icons-material/Home';

export const AppHeader: FunctionComponent = () => {
  const { storyId } = useParams();

  return (
    <Link to="/">
      <header className="h-15 flex items-center gap-4 border-b border-b-gray-200 sticky top-0 bg-white">
        {!!storyId ? (
          <BackArrow className="!size-7" />
        ) : (
          <Home className="!size-7" />
        )}
        <h1 className="text-xl font-bold">Hacker news reader</h1>
      </header>
    </Link>
  );
};
