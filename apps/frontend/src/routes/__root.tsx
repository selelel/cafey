import Header from '@/components/layout/header';
import Navigation from '@/components/layout/navigation';
import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='relative bg-background mx-auto w-full max-w-md h-screen overflow-hidden'>
        <Header />
        <Outlet />
        <Navigation />
      </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
