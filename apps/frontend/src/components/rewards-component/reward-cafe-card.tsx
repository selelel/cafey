import { Progress } from '../ui/progress';
import { Star } from 'lucide-react';

function CafeCard() {
  return (
    <div
      data-slot='card'
      className='text-card-foreground flex flex-col gap-6 rounded-xl border bg-gradient-to-r from-primary/10 to-accent/20'
    >
      <div
        data-slot='card-header'
        className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center pb-2'
      >
        <h4
          data-slot='card-title'
          className='leading-none flex items-center justify-center gap-2'
        >
          <Star width='24' height='24' className=' w-6 h-6 text-primary' />
          Your Cafay Points
        </h4>
      </div>
      <div
        data-slot='card-content'
        className='px-6 [&:last-child]:pb-6 text-center space-y-4'
      >
        <div>
          <div className='text-3xl font-medium text-primary'>1,250</div>
          <p className='text-muted-foreground'>Available Points</p>
        </div>
        <div className='space-y-2'>
          <div className='flex justify-between text-sm'>
            <span>Progress to next reward</span>
            <span>250 points to go</span>
          </div>
          <Progress value={50} />
        </div>
      </div>
    </div>
  );
}

export default CafeCard;
