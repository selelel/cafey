import { Main } from '@/components/commons'
import QuickTupUp from '@/components/tup-up-component/tp-quick-tup-up'
import RecentTransaction from '@/components/tup-up-component/tp-recent-transaction'
import WalletCard from '@/components/tup-up-component/tp-wallet-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/top-up')({
  component: TopUp,
})

function TopUp() {

  return (
    <Main className="space-y-6">
      <WalletCard/>
      <QuickTupUp />
      <RecentTransaction />
    </Main>
  )
}