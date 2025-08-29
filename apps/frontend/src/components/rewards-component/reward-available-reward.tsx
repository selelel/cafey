import { Award, Coffee, Cookie, Gift, Star } from 'lucide-react';
import type { Reward } from './reward-redeem-component';

// Simulate user points for demo
const rewards: Reward[] = [
  {
    icon: <Coffee />,
    title: 'Free Coffee',
    description: 'Any regular coffee of your choice',
    points: 500,
    available: true,
  },
  {
    icon: <Cookie />,
    title: 'Free Pastry',
    description: 'Choose from our daily selection',
    points: 300,
    available: true,
  },
  {
    icon: <Gift />,
    title: '20% Off Next Order',
    description: 'Valid for 30 days',
    points: 200,
    available: true,
  },
  {
    icon: <Award />,
    title: 'Premium Blend',
    description: 'Our signature premium coffee blend',
    points: 1000,
    available: false,
  },
  {
    icon: <Star />,
    title: 'Coffee for a Week',
    description: '7 free regular coffees',
    points: 2000,
    available: false,
  },
];

function AvailableReward() {
  return (
    <div>
      <h2 className='mb-4 flex items-center gap-2'>
        <Gift width='24' height='24' /> {/* UY */}
        Available Rewards
      </h2>
      <div className='space-y-3'>
        {rewards.map(reward => {
          const isDisabled = !reward.available;
          return (
            <div
              key={reward.title}
              data-slot='card'
              className={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl border transition-all ${
                isDisabled ? 'opacity-60' : ''
              }`}
            >
              <div data-slot='card-content' className='[&:last-child]:pb-6 p-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 bg-primary/10 rounded-lg text-primary'>
                      {reward.icon}
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-medium'>{reward.title}</h3>
                      <p className='text-sm text-muted-foreground'>
                        {reward.description}
                      </p>
                      <div className='flex items-center gap-2 mt-1'>
                        <span
                          data-slot='badge'
                          className='inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 text-xs'
                        >
                          {reward.points} points
                        </span>
                        {isDisabled && reward.extraBadge && (
                          <span
                            data-slot='badge'
                            className='inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground text-xs'
                          >
                            {reward.extraBadge}
                          </span>
                        )}
                        {isDisabled && !reward.extraBadge && (
                          <span
                            data-slot='badge'
                            className='inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground text-xs'
                          >
                            Not enough points
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    data-slot='button'
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([className*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 shrink-0"
                    disabled={isDisabled}
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AvailableReward;
