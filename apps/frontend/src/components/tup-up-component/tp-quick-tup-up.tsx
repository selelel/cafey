import { Building, CreditCard, Plus, Smartphone } from "lucide-react"
import { useState } from "react"
import PaymentMethod from "./tp-payment-method"

function QuickTupUp() {
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
        <>
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

            <div>
        <h2 className="mb-4">Payment Method</h2>
        <div className="space-y-3">
          {paymentMethods.map((pm, i) => (
            <PaymentMethod key={i} {...pm}/>
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
        </>
    )
}

export default QuickTupUp