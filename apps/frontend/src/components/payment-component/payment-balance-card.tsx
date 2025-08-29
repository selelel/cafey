
export function BalanceCard() {
  return (
    <div className="space-y-6">
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
  )
}


