'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import TransactionForm from './transaction-form';
import { mapFormToTransaction } from '@/lib/transactions';
import { TransactionData } from '@/types/transaction';

export default function EditTransactionDialog({
    open,
    setOpen,
    transactionData,
    updateTransactionAction,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
    transactionData: TransactionData;
    updateTransactionAction: (data: TransactionData) => Promise<void>;
}) {
    const handleSuccess = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Edit Transaction</DialogTitle>
                    <DialogDescription>
                        Update the transaction details below and click
                        &quot;Save changes&quot; to apply your updates.
                    </DialogDescription>
                </DialogHeader>

                <TransactionForm
                    onSuccess={handleSuccess}
                    defaultValues={mapFormToTransaction(transactionData)}
                    mode='EDIT'
                    updateTransactionAction={updateTransactionAction}
                />
            </DialogContent>
        </Dialog>
    );
}
