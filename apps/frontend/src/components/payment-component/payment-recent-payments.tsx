import React from 'react'

type PaymentRowProps = {
  title: string
  subtitle: string
  amount: string
  status: string
  icon: 'qr' | 'scan' | 'card'
  color: 'green' | 'blue' | 'orange'
}

function PaymentRow({ title, subtitle, amount, status, icon, color }: PaymentRowProps) {
  const iconMap: Record<PaymentRowProps['icon'], React.ReactNode> = {
    qr: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-qr-code w-4 h-4"
        aria-hidden="true"
      >
        <rect width="5" height="5" x="3" y="3" rx="1"></rect>
        <rect width="5" height="5" x="16" y="3" rx="1"></rect>
        <rect width="5" height="5" x="3" y="16" rx="1"></rect>
        <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
        <path d="M21 21v.01"></path>
        <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
        <path d="M3 12h.01"></path>
        <path d="M12 3h.01"></path>
        <path d="M12 16v.01"></path>
        <path d="M16 12h1"></path>
        <path d="M21 12v.01"></path>
        <path d="M12 21v-1"></path>
      </svg>
    ),
    scan: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-scan-line w-4 h-4"
        aria-hidden="true"
      >
        <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
        <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
        <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
        <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
        <path d="M7 12h10"></path>
      </svg>
    ),
    card: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-credit-card w-4 h-4"
        aria-hidden="true"
      >
        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
        <line x1="2" x2="22" y1="10" y2="10"></line>
      </svg>
    ),
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-${color}-100 flex items-center justify-center`}>
          {iconMap[icon]}
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">{amount}</p>
        <span className="text-xs text-green-500">{status}</span>
      </div>
    </div>
  )
}

export function RecentPayments() {
  return (
    <div>
      <h2 className="mb-4 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-history w-5 h-5"
          aria-hidden="true"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
          <path d="M12 7v5l4 2"></path>
        </svg>
        Recent Payments
      </h2>

      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border" data-slot="card">
        <div className="p-4 space-y-3 [&:last-child]:pb-6" data-slot="card-content">
          <PaymentRow title="Cafay Downtown" subtitle="Today, 2:30 PM" amount="$8.50" status="Success" icon="qr" color="green" />
          <PaymentRow title="Cafay Mall" subtitle="Yesterday, 3:45 PM" amount="$12.25" status="Success" icon="scan" color="blue" />
          <PaymentRow title="Coffee & Co" subtitle="2 days ago, 9:20 AM" amount="$6.75" status="Success" icon="card" color="orange" />
        </div>
      </div>
    </div>
  )
}


