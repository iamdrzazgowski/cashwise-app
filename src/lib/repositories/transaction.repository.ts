import prisma from '../prisma';

interface TransactionFormData {
    type: 'INCOME' | 'EXPENSE';
    title: string;
    category: string;
    amount: number;
    date: Date;
    note: string | null;
}

export const transactionRepository = {
    findByUserId(userId: string) {
        return prisma.transaction.findMany({
            where: {
                userId,
            },
        });
    },
    create(userId: string, transactionData: TransactionFormData) {
        return prisma.transaction.create({
            data: {
                userId,
                ...transactionData,
            },
        });
    },
};
