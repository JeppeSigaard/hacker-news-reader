import { FunctionComponent } from 'react';
import { Link, Outlet, useParams } from 'react-router';
import BackArrow from '@mui/icons-material/ArrowBackIosNew';
import Home from '@mui/icons-material/Home';

export const Layout: FunctionComponent = () => {
  const { storyId } = useParams();
  return (
    <div className="p-4 overflow-hidden max-w-[48rem] mx-auto">
      <Link to="/">
        <header className="h-15 flex items-center gap-4 border-b border-b-gray-200">
          {!!storyId ? (
            <BackArrow className="!size-7" />
          ) : (
            <Home className="!size-7" />
          )}
          <h1 className="text-xl font-bold">Hacker news reader</h1>
        </header>
      </Link>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};
