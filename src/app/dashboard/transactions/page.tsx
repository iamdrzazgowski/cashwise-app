import AddTransactionDialog from '@/components/add-transaction-dialog';
import { TransactionsTable } from '@/components/transactions-table';
import { Card, CardContent } from '@/components/ui/card';

export default function TransactionPage() {
    return (
        <div className='mx-auto max-w-7xl min-w-6xl space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-3xl font-bold text-foreground'>
                        Transactions
                    </h1>
                    <p className='text-muted-foreground'>
                        Manage your transactions
                    </p>
                </div>
                <AddTransactionDialog />
            </div>

            <Card className='border-border'>
                <CardContent className='p-0'>
                    <TransactionsTable />
                </CardContent>
            </Card>
        </div>
    );
}
