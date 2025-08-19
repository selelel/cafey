import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="mx-auto w-full max-w-md h-screen bg-slate-200">
        <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
            Home
            </Link>{' '}
            <Link to="/about" className="[&.active]:font-bold">
            About
            </Link>
        </div>
        <Outlet />
        </div>
      <TanStackRouterDevtools />
    </>
  ),
})