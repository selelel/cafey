import { Main } from '@/components/commons'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/payment')({
  component: Payment,
})

function Payment() {
  return (
    <Main className="space-y-6">
      {/* Balance Card */}
      <div className="p-4 space-y-6">
        <div
          data-slot="card"
          className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-gradient-to-r from-primary/10 to-accent/20"
        >
          <div data-slot="card-content" className="p-4 [&:last-child]:pb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">Available Balance</p>
                <p className="text-2xl font-medium text-primary">$85.50</p>
              </div>
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
                className="lucide lucide-wallet w-8 h-8 text-primary"
                aria-hidden="true"
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div
        dir="ltr"
        data-orientation="horizontal"
        data-slot="tabs"
        className="flex flex-col gap-2 w-full"
      >
        <div
          role="tablist"
          aria-orientation="horizontal"
          data-slot="tabs-list"
          className="bg-muted text-muted-foreground h-9 items-center justify-center rounded-xl p-[3px] grid w-full grid-cols-2"
          tabIndex={0}
          style={{ outline: 'none' }}
        >
          {/* Show QR tab */}
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="radix-content-qr"
            data-state="active"
            id="radix-trigger-qr"
            data-slot="tabs-trigger"
            className="data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 justify-center rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([className*='size-'])]:size-4 flex items-center gap-2"
            tabIndex={-1}
          >
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
            Show QR
          </button>

          {/* Scan Code tab */}
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-content-scan"
            data-state="inactive"
            id="radix-trigger-scan"
            data-slot="tabs-trigger"
            className="data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 justify-center rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([className*='size-'])]:size-4 flex items-center gap-2"
            tabIndex={-1}
          >
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
            Scan Code
          </button>
        </div>

        {/* QR Code Tab Panel */}
        <div
          data-state="active"
          role="tabpanel"
          aria-labelledby="radix-trigger-qr"
          id="radix-content-qr"
          tabIndex={0}
          data-slot="tabs-content"
          className="flex-1 outline-none space-y-4"
          style={{ animationDuration: '0s' }}
        >
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border"
          >
            <div
              data-slot="card-header"
              className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center"
            >
              <h4
                data-slot="card-title"
                className="leading-none flex items-center justify-center gap-2"
              >
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
                  className="lucide lucide-qr-code w-6 h-6"
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
                Your Payment QR Code
              </h4>
            </div>

            <div data-slot="card-content" className="px-6 space-y-4 [&:last-child]:pb-6">
              {/* QR Placeholder */}
              <div className="bg-white p-6 rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-1 w-40 h-40">
                    {/* Simplified: these squares simulate QR blocks */}
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-sm ${
                          i % 3 === 0 ? 'bg-primary' : 'bg-white'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center space-y-2">
                <p className="text-muted-foreground">Show this code to the cashier</p>
                <span
                  data-slot="badge"
                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 font-mono text-xs"
                >
                  ID: 23456789
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background text-foreground hover:bg-accent hover:text-accent-foreground px-4 py-2 h-12"
                >
                  Share Code
                </button>
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 h-12"
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scan Code Tab Panel */}
        <div
          data-state="inactive"
          role="tabpanel"
          aria-labelledby="radix-trigger-scan"
          id="radix-content-scan"
          hidden
          tabIndex={0}
          data-slot="tabs-content"
          className="flex-1 outline-none space-y-4"
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border cursor-pointer hover:bg-accent/50 transition-colors">
            <div className="p-4 text-center space-y-2 [&:last-child]:pb-6">
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
                className="lucide lucide-credit-card w-8 h-8 mx-auto text-primary"
                aria-hidden="true"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
              <p className="font-medium">Pay Bills</p>
              <p className="text-xs text-muted-foreground">Utilities &amp; more</p>
            </div>
          </div>

          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border cursor-pointer hover:bg-accent/50 transition-colors">
            <div className="p-4 text-center space-y-2 [&:last-child]:pb-6">
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
                className="lucide lucide-smartphone w-8 h-8 mx-auto text-primary"
                aria-hidden="true"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
              <p className="font-medium">Mobile Top-up</p>
              <p className="text-xs text-muted-foreground">Prepaid &amp; postpaid</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Payments */}
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
            {/* Payment 1 */}
            <PaymentRow
              title="Cafay Downtown"
              subtitle="Today, 2:30 PM"
              amount="$8.50"
              status="Success"
              icon="qr"
              color="green"
            />
            {/* Payment 2 */}
            <PaymentRow
              title="Cafay Mall"
              subtitle="Yesterday, 3:45 PM"
              amount="$12.25"
              status="Success"
              icon="scan"
              color="blue"
            />
            {/* Payment 3 */}
            <PaymentRow
              title="Coffee & Co"
              subtitle="2 days ago, 9:20 AM"
              amount="$6.75"
              status="Success"
              icon="card"
              color="orange"
            />
          </div>
        </div>
      </div>
    </Main>
  )
}

/* Extracted row component for clarity */
function PaymentRow({
  title,
  subtitle,
  amount,
  status,
  icon,
  color,
}: {
  title: string
  subtitle: string
  amount: string
  status: string
  icon: 'qr' | 'scan' | 'card'
  color: 'green' | 'blue' | 'orange'
}) {
  const iconMap = {
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
        <div
          className={`w-10 h-10 rounded-full bg-${color}-100 flex items-center justify-center`}
        >
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
