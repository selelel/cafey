import { Main } from '@/components/commons';
import AvailableReward from '@/components/rewards-component/reward-available-reward';
import CafeCard from '@/components/rewards-component/reward-cafe-card';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/top-up')({
  component: TopUp,
});

function TopUp() {
  return (
    <Main className='space-y-6'>
     <CafeCard />
     <AvailableReward />
    </Main>
    );
}
