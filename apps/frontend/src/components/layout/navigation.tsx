function Navigation() {
  return (
    <nav className='absolute bottom-0 w-full max-w-md bg-card border-t border-border p-2'>
      <div className='flex justify-around'>
        <button
          data-slot='button'
          className="justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 has-[&gt;svg]:px-2.5 flex-1 flex flex-col items-center gap-1 h-auto py-2"
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-gift w-5 h-5'
            aria-hidden='true'
          >
            <rect x='3' y='8' width='18' height='4' rx='1'></rect>
            <path d='M12 8v13'></path>
            <path d='M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7'></path>
            <path d='M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5'></path>
          </svg>
          <span className='text-xs'>Rewards</span>
        </button>
        <button
          data-slot='button'
          className="justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-md px-3 has-[&gt;svg]:px-2.5 flex-1 flex flex-col items-center gap-1 h-auto py-2"
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-credit-card w-5 h-5'
            aria-hidden='true'
          >
            <rect width='20' height='14' x='2' y='5' rx='2'></rect>
            <line x1='2' x2='22' y1='10' y2='10'></line>
          </svg>
          <span className='text-xs'>Top Up</span>
        </button>
        <button
          data-slot='button'
          className="justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-md px-3 has-[&gt;svg]:px-2.5 flex-1 flex flex-col items-center gap-1 h-auto py-2"
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-qr-code w-5 h-5'
            aria-hidden='true'
          >
            <rect width='5' height='5' x='3' y='3' rx='1'></rect>
            <rect width='5' height='5' x='16' y='3' rx='1'></rect>
            <rect width='5' height='5' x='3' y='16' rx='1'></rect>
            <path d='M21 16h-3a2 2 0 0 0-2 2v3'></path>
            <path d='M21 21v.01'></path>
            <path d='M12 7v3a2 2 0 0 1-2 2H7'></path>
            <path d='M3 12h.01'></path>
            <path d='M12 3h.01'></path>
            <path d='M12 16v.01'></path>
            <path d='M16 12h1'></path>
            <path d='M21 12v.01'></path>
            <path d='M12 21v-1'></path>
          </svg>
          <span className='text-xs'>Payment</span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
