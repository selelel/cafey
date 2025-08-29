import Transaction from './tp-transaction'

function RecentTransaction() {
  return (
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
  )
}

export default RecentTransaction