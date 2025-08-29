import { Main } from '@/components/commons'
import { createFileRoute } from '@tanstack/react-router'
import { BalanceCard } from '@/components/payment-component/payment-balance-card'
import { QRTabs } from '@/components/payment-component/payment-qr-tabs'
import { QuickActions } from '@/components/payment-component/payment-quick-actions'
import { RecentPayments } from '@/components/payment-component/payment-recent-payments'

export const Route = createFileRoute('/payment')({
  component: Payment,
})

function Payment() {
  return (
    <Main className="space-y-6">
      <BalanceCard />
      <QRTabs />
      <QuickActions />
      <RecentPayments />
    </Main>
  )
}

/* Payment row moved to components/payment/RecentPayments */
