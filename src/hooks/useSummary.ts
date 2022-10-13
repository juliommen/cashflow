import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/transactionsContext'

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )
  const summary = useMemo(() => {
    // Nota C
    return transactions.reduce(
      (total, transaction) => {
        if (transaction.type === 'income') {
          total.income += transaction.price
          total.total += transaction.price
        } else {
          total.outcome += transaction.price
          total.total -= transaction.price
        }
        return total
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}
