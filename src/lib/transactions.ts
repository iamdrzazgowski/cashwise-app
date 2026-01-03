import { TransactionData, TransactionFormData } from '@/types/transaction';

type TransactionInput =
    | Partial<Omit<TransactionData, 'date'> & { date?: Date | string }>
    | Partial<TransactionFormData>;

export function mapFormToTransaction(transaction: TransactionInput) {
    return {
        ...transaction,
        date: transaction.date
            ? typeof transaction.date === 'string'
                ? new Date(transaction.date).toISOString().split('T')[0]
                : transaction.date.toISOString().split('T')[0]
            : undefined,
    };
}
