import React from 'react'

export function QuickActions() {
  return (
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
  )
}


