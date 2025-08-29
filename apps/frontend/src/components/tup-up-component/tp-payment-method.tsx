import { type JSX } from 'react'

type PaymentMethodProps =  {
    name: string;
    sub: string;
    icon: JSX.Element;
}

function PaymentMethod({ name, sub, icon }: PaymentMethodProps) {
  return (
    <div
      className="flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:border-primary/50 transition"
    >
        <div className="flex items-center gap-3">
            <div className="p-2 bg-muted rounded-lg">{icon}</div>
            <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{sub}</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentMethod