import { FunctionComponent } from 'react';
import { Outlet } from 'react-router';
import { AppHeader } from './AppHeader';

export const Layout: FunctionComponent = () => {
  return (
    <div className="px-4 pb-4 max-w-[48rem] mx-auto">
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
