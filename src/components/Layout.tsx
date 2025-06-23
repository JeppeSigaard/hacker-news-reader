import { FunctionComponent } from 'react';
import { Outlet } from 'react-router';
import { AppHeader } from './AppHeader';

export const Layout: FunctionComponent = () => {
  return (
    <div className="p-4 overflow-hidden max-w-[48rem] mx-auto">
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
