export interface TransactionData {
    id: string;
    type: 'INCOME' | 'EXPENSE';
    title: string;
    category: string;
    amount: number;
    date: Date;
    note: string | null;
}

export interface TransactionFormData {
    id?: string;
    type: 'INCOME' | 'EXPENSE';
    title: string;
    category: string;
    amount: number;
    date: string;
    note: string | null;
}
