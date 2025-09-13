
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
  

export default Transaction