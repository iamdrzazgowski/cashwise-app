'use client';

import React, { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type TransactionType = 'INCOME' | 'EXPENSE';

type Transaction = {
    id: string;
    title: string;
    amount: number;
    type: TransactionType;
    date: Date;
    category: string;
    note?: string;
};

export default function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([
        {
            id: '1',
            title: 'Zakupy spożywcze',
            note: 'Biedronka – zakupy tygodniowe',
            amount: 245.5,
            type: 'EXPENSE',
            category: 'Jedzenie',
            date: new Date('2024-01-15'),
        },
        {
            id: '2',
            title: 'Wynagrodzenie',
            note: 'Umowa o pracę – styczeń',
            amount: 5000,
            type: 'INCOME',
            category: 'Praca',
            date: new Date('2024-01-14'),
        },
        {
            id: '3',
            title: 'Czynsz',
            note: 'Opłata za mieszkanie',
            amount: 1500,
            type: 'EXPENSE',
            category: 'Mieszkanie',
            date: new Date('2024-01-13'),
        },
        {
            id: '4',
            title: 'Paliwo',
            note: 'Stacja Orlen',
            amount: 180,
            type: 'EXPENSE',
            category: 'Transport',
            date: new Date('2024-01-12'),
        },
        {
            id: '5',
            title: 'Netflix',
            note: 'Subskrypcja miesięczna',
            amount: 49,
            type: 'EXPENSE',
            category: 'Rozrywka',
            date: new Date('2024-01-11'),
        },
    ]);

    const handleDelete = (id: string) => {
        setTransactions((prev) => prev.filter((t) => t.id !== id));
    };

    const handleEdit = (id: string) => {
        alert(`Edycja transakcji #${id}`);
    };

    const formatDate = (date: Date) =>
        date.toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });

    const formatAmount = (amount: number) =>
        new Intl.NumberFormat('pl-PL', {
            style: 'currency',
            currency: 'PLN',
        }).format(amount);

    return (
        <div className='w-full max-w-6xl mx-auto p-6'>
            <div className='rounded-md border'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-[50px] text-center'>
                                #
                            </TableHead>
                            <TableHead className='w-[120px]'>Data</TableHead>
                            <TableHead>Tytuł</TableHead>
                            <TableHead>Kategoria</TableHead>
                            <TableHead className='text-right'>Kwota</TableHead>
                            <TableHead className='text-right w-[120px]'>
                                Akcje
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={6}
                                    className='h-24 text-center'>
                                    Brak transakcji
                                </TableCell>
                            </TableRow>
                        ) : (
                            transactions.map((transaction, index) => (
                                <TableRow key={transaction.id}>
                                    <TableCell className='text-center text-muted-foreground'>
                                        {index + 1}
                                    </TableCell>
                                    <TableCell className='font-medium'>
                                        {formatDate(transaction.date)}
                                    </TableCell>
                                    <TableCell>
                                        <div className='flex flex-col'>
                                            <span className='font-medium'>
                                                {transaction.title}
                                            </span>
                                            {transaction.note && (
                                                <span className='text-sm text-muted-foreground'>
                                                    {transaction.note}
                                                </span>
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge>{transaction.category}</Badge>
                                    </TableCell>
                                    <TableCell className='text-right'>
                                        <span
                                            className={
                                                transaction.type === 'EXPENSE'
                                                    ? 'text-red-600 font-semibold'
                                                    : 'text-green-600 font-semibold'
                                            }>
                                            {transaction.type === 'EXPENSE'
                                                ? '-'
                                                : '+'}
                                            {formatAmount(transaction.amount)}
                                        </span>
                                    </TableCell>
                                    <TableCell className='text-right'>
                                        <div className='flex justify-end gap-2'>
                                            <Button
                                                variant='ghost'
                                                size='icon'
                                                onClick={() =>
                                                    handleEdit(transaction.id)
                                                }>
                                                <Pencil className='h-4 w-4' />
                                            </Button>
                                            <Button
                                                variant='ghost'
                                                size='icon'
                                                onClick={() =>
                                                    handleDelete(transaction.id)
                                                }>
                                                <Trash2 className='h-4 w-4' />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
