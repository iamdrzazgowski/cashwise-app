import { TransactionsTable } from '@/components/transactions-table';
import { auth } from '@/lib/auth';
import { transactionRepository } from '@/lib/repositories/transaction.repository';
import { headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
        redirect('/login');
    }

    const userTransactions = await transactionRepository.findByUserId(
        session.user.id
    );

    const transactions = userTransactions.map((transaction) => ({
        ...transaction,
        amount: transaction.amount.toNumber(),
    }));

    return (
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
            <div className='grid gap-4 md:grid-cols-3'>
                <div className='bg-muted/50 rounded-xl h-28' />
                <div className='bg-muted/50 rounded-xl h-28' />
                <div className='bg-muted/50 rounded-xl h-28' />
            </div>

            <div className='grid gap-4 md:grid-cols-2 h-full'>
                <div className='bg-muted/50 rounded-xl h-full flex flex-col'>
                    {/* Header */}
                    <div className='flex items-center justify-between px-4 py-3 border-b border-muted'>
                        <h3 className='text-sm font-semibold'>
                            Your Transactions
                        </h3>

                        <Link
                            href='/dashboard/transactions'
                            className='text-xs font-medium text-primary hover:underline'>
                            View all
                        </Link>
                    </div>

                    {/* Content */}
                    <div className='flex-1 overflow-auto p-4'>
                        <TransactionsTable transactionsData={transactions} />
                    </div>
                </div>
                <div className='bg-muted/50 rounded-xl h-full' />
            </div>
        </div>
    );
}
