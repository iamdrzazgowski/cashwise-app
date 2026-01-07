'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { DialogFooter } from './ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useTransition } from 'react';
import { Spinner } from './ui/spinner';
import { TransactionData, TransactionFormData } from '@/types/transaction';
import { mapFormToTransaction } from '@/lib/transactions';

interface TransactionFormProps {
    onSuccess: () => void;
    defaultValues?: Partial<TransactionFormData>;
    mode?: 'CREATE' | 'EDIT';
    createTransactionAction?: (data: TransactionData) => Promise<void>;
    updateTransactionAction?: (data: TransactionData) => Promise<void>;
}

export default function TransactionForm({
    onSuccess,
    defaultValues,
    mode = 'CREATE',
    createTransactionAction,
    updateTransactionAction,
}: TransactionFormProps) {
    const defaultFormValues: Partial<TransactionFormData> = defaultValues
        ? mapFormToTransaction(defaultValues)
        : { type: 'INCOME' as const, note: null };

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<TransactionFormData>({
        defaultValues: defaultFormValues,
    });
    const [pending, startTransition] = useTransition();

    const type = useWatch({ control, name: 'type' });

    const onSubmit = async (data: TransactionFormData) => {
        startTransition(() => {
            const payload: TransactionData = {
                ...data,
                date: new Date(data.date),
                id: data.id!,
            };

            const action =
                mode === 'CREATE'
                    ? createTransactionAction
                    : updateTransactionAction;

            if (!action) {
                console.error(
                    `Missing action for mode: ${mode}. Please provide ${
                        mode === 'CREATE'
                            ? 'createTransactionAction'
                            : 'updateTransactionAction'
                    }.`
                );
                return;
            }

            action(payload)
                .then(() => {
                    onSuccess();
                })
                .catch((err) => {
                    console.error(err);
                });
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-4 py-4'>
                <div className='space-y-2'>
                    <Label htmlFor='type'>Transaction type</Label>
                    <Controller
                        name='type'
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='INCOME'>
                                        Income
                                    </SelectItem>
                                    <SelectItem value='EXPENSE'>
                                        Expense
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='title'>Title</Label>
                    <Input
                        id='title'
                        placeholder='e.g. Grocery shopping'
                        {...register('title', {
                            required: true,
                        })}
                    />
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='category'>Category</Label>
                    <Controller
                        name='category'
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder='Select a category' />
                                </SelectTrigger>
                                <SelectContent>
                                    {type === 'INCOME' ? (
                                        <>
                                            <SelectItem value='Salary'>
                                                Salary
                                            </SelectItem>
                                            <SelectItem value='Additional income'>
                                                Additional income
                                            </SelectItem>
                                            <SelectItem value='Refund'>
                                                Refund
                                            </SelectItem>
                                        </>
                                    ) : (
                                        <>
                                            <SelectItem value='Food'>
                                                Food
                                            </SelectItem>
                                            <SelectItem value='Transport'>
                                                Transport
                                            </SelectItem>
                                            <SelectItem value='Bills'>
                                                Bills
                                            </SelectItem>
                                            <SelectItem value='Entertainment'>
                                                Entertainment
                                            </SelectItem>
                                            <SelectItem value='Dining out'>
                                                Dining out
                                            </SelectItem>
                                        </>
                                    )}
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='amount'>Amount (USD)</Label>
                    <Input
                        id='amount'
                        type='number'
                        step='0.01'
                        min='0'
                        placeholder='0.00'
                        {...register('amount', {
                            required: true,
                            valueAsNumber: true,
                        })}
                    />
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='date'>Date</Label>
                    <Input
                        id='date'
                        type='date'
                        {...register('date', { required: true })}
                    />
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='note'>Note (optional)</Label>
                    <Textarea
                        id='note'
                        placeholder='Additional information...'
                        rows={3}
                        {...register('note')}
                    />
                </div>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant='outline'>Cancel</Button>
                </DialogClose>
                <Button type='submit'>
                    {pending ? (
                        <Spinner />
                    ) : mode === 'EDIT' ? (
                        'Save changes'
                    ) : (
                        'Add transaction'
                    )}
                </Button>
            </DialogFooter>
        </form>
    );
}
