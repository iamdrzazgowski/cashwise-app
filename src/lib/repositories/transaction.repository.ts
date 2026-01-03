import prisma from '../prisma';
import { TransactionData } from '../../types/transaction';

export const transactionRepository = {
    findByUserId(userId: string) {
        return prisma.transaction.findMany({
            where: {
                userId,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    },
    create(userId: string, transactionData: TransactionData) {
        return prisma.transaction.create({
            data: {
                userId,
                ...transactionData,
            },
        });
    },
    delete(userId: string, transactionId: string) {
        return prisma.transaction.delete({
            where: {
                id: transactionId,
                userId: userId,
            },
        });
    },
    update(
        userId: string,
        transactionId: string,
        transactionData: Partial<Omit<TransactionData, 'id'>>
    ) {
        return prisma.transaction.update({
            where: { userId, id: transactionId },
            data: {
                ...transactionData,
            },
        });
    },
};
