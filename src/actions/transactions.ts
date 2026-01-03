'use server';

import { auth } from '@/lib/auth';
import { transactionRepository } from '@/lib/repositories/transaction.repository';
import { TransactionData } from '@/types/transaction';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

export async function createTransactionAction(data: TransactionData) {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) throw new Error('There is no valid session');

    const date = new Date(data.date);
    const transactionData = {
        ...data,
        date,
    };

    await transactionRepository.create(session.user.id, transactionData);
    revalidatePath('/dashboard/transactions');
}

export async function deleteTransactionAction(transactionId: string) {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) throw new Error('There is no valid session');

    await transactionRepository.delete(session.user.id, transactionId);
    revalidatePath('/dashboard/transactions');
}

export async function updateTransactionAction(data: TransactionData) {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) throw new Error('There is no valid session');

    const { id, ...rest } = data;

    await transactionRepository.update(session.user.id, id, rest);
    revalidatePath('/dashboard/transactions');
}
