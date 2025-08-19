import Header from '@/components/layout/header'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-background mx-auto w-full max-w-md h-screen">
        <Header />
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})