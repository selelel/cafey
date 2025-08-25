import { Main } from '@/components/commons'
import { createFileRoute } from '@tanstack/react-router'
import { CreditCard, Smartphone, Building, Wallet, Plus } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/top-up')({
  component: TopUp,
})

function TopUp() {
  const [amount, setAmount] = useState<number>(0)

  const quickAmounts = [10, 25, 50, 100]

  const paymentMethods = [
    {
      name: 'Visa Card',
      sub: '**** 4532',
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      name: 'Apple Pay',
      sub: 'iPhone',
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      name: 'Bank Transfer',
      sub: 'Chase Bank',
      icon: <Building className="w-5 h-5" />,
    },
  ]

  return (
    <Main className="space-y-6">
      {/* Wallet Balance Card */}
      <div className="flex flex-col gap-6 rounded-xl border bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="grid auto-rows-min grid-rows-[auto_auto] gap-1.5 px-6 pt-6">
          <h4 className="flex items-center gap-2 text-lg font-medium">
            <Wallet className="w-6 h-6" />
            Cafay Wallet
          </h4>
        </div>
        <div className="px-6 pb-6">
          <div className="text-3xl font-medium">$85.50</div>
          <p className="text-primary-foreground/80">Available Balance</p>
        </div>
      </div>

      {/* Quick Top-up */}
      <div>
        <h2 className="mb-4">Quick Top-up</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickAmounts.map((val) => (
            <button
              key={val}
              onClick={() => setAmount(val)}
              className="inline-flex items-center justify-center rounded-md border bg-background px-4 py-2 h-12 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground"
            >
              ${val}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div>
        <label
          htmlFor="custom-amount"
          className="flex items-center gap-2 text-sm font-medium"
        >
          Custom Amount
        </label>
        <div className="relative mt-2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            $
          </span>
          <input
            id="custom-amount"
            type="number"
            value={amount || ''}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="0.00"
            className="pl-7 w-full rounded-md border px-3 py-2 text-base outline-none"
          />
        </div>
      </div>

      {/* Payment Methods */}
      <div>
        <h2 className="mb-4">Payment Method</h2>
        <div className="space-y-3">
          {paymentMethods.map((pm, i) => (
            <div
              key={i}
              className="flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:border-primary/50 transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted rounded-lg">{pm.icon}</div>
                <div>
                  <p className="font-medium">{pm.name}</p>
                  <p className="text-sm text-muted-foreground">{pm.sub}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Add new */}
          <div className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-dashed p-4 text-muted-foreground hover:border-primary/50">
            <Plus className="w-5 h-5" />
            <span>Add New Payment Method</span>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        disabled={!amount}
        className="w-full h-12 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        Top Up ${amount.toFixed(2)}
      </button>

      {/* Recent Transactions */}
      <div>
        <h2 className="mb-4">Recent Transactions</h2>
        <div className="rounded-xl border p-4 space-y-3">
          <Transaction
            title="Payment at Cafay Downtown"
            time="Today, 2:30 PM"
            amount="-8.50"
            type="expense"
          />
          <Transaction
            title="Top-up via Visa Card"
            time="Yesterday, 9:15 AM"
            amount="+50.00"
            type="income"
          />
          <Transaction
            title="Payment at Cafay Mall"
            time="2 days ago, 3:45 PM"
            amount="-12.25"
            type="expense"
          />
        </div>
      </div>
    </Main>
  )
}

function Transaction({
  title,
  time,
  amount,
  type,
}: {
  title: string
  time: string
  amount: string
  type: 'income' | 'expense'
}) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{time}</p>
      </div>
      <span
        className={`font-medium ${
          type === 'income' ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {amount.startsWith('-') ? amount : `+${amount}`}
      </span>
    </div>
  )
}
