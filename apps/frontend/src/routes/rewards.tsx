import { Main } from '@/components/commons';
import CafeCard from '@/components/rewards-component/cafe-card';
import { Progress } from '@/components/ui/progress';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/rewards')({
  component: Rewards,
});

function Rewards() {
  return (
    <Main>
     <CafeCard />
    </Main>
    );
}
