import { Wallet } from "lucide-react"

function WalletCard() {
  return (
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
  )
}

export default WalletCard