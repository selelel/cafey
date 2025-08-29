import { Link, useLocation } from '@tanstack/react-router';
import { Gift, QrCode } from 'lucide-react';
import type { ReactNode } from 'react';

type NavButtonProps = {
  to?: string; // if provided → Link, else → button
  icon: ReactNode;
  label: string;
  isActive?: boolean;
};

function NavButton({ to, icon, label, isActive }: NavButtonProps) {
  const baseClasses =
    'justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 ' +
    "[&_svg]:pointer-events-none [&_svg:not([className*='size-'])]:size-4 [&_svg]:shrink-0 " +
    'outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ' +
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ' +
    'rounded-md px-3 has-[>svg]:px-2.5 flex-1 flex flex-col items-center gap-1 h-auto py-2';

  const activeClasses = isActive
    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
    : 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50';

  const className = `${baseClasses} ${activeClasses}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {icon}
        <span className='text-xs'>{label}</span>
      </Link>
    );
  }

  return (
    <button className={className}>
      {icon}
      <span className='text-xs'>{label}</span>
    </button>
  );
}

function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className='absolute bottom-0 w-full max-w-md bg-card border-t border-border p-2'>
      <div className='flex justify-around'>
        <NavButton
          to='/'
          icon={<Gift />}
          label='Rewards'
          isActive={pathname === '/'}
        />
        <NavButton
          to='/top-up'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-credit-card w-5 h-5'
              aria-hidden='true'
            >
              <rect width='20' height='14' x='2' y='5' rx='2'></rect>
              <line x1='2' x2='22' y1='10' y2='10'></line>
            </svg>
          }
          label='Top Up'
          isActive={pathname === '/top-up'}
        />
        <NavButton to='/payment' icon={<QrCode />} label='Payment' isActive={pathname === '/payment'}/>
      </div>
    </nav>
  );
}

export default Navigation;
