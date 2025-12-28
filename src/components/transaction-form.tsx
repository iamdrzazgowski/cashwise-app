'use client';

import type React from 'react';
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

export interface TransactionFormData {
    type: 'income' | 'expense';
    title: string;
    category: string;
    amount: number;
    date: string;
    note: string | null;
}

const type = 'income';

export default function TransactionForm() {
    return (
        <form>
            <div className='space-y-4 py-4'>
                <div className='space-y-2'>
                    <Label htmlFor='type'>Typ transakcji</Label>
                    <Select>
                        <SelectTrigger id='type'>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='income'>Przychód</SelectItem>
                            <SelectItem value='expense'>Wydatek</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='title'>Tytuł</Label>
                    <Input
                        id='title'
                        placeholder='np. Zakupy spożywcze'
                        required
                    />
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='category'>Kategoria</Label>
                    <Select required>
                        <SelectTrigger id='category'>
                            <SelectValue placeholder='Wybierz kategorię' />
                        </SelectTrigger>
                        <SelectContent>
                            {type === 'income' ? (
                                <>
                                    <SelectItem value='Pensja'>
                                        Pensja
                                    </SelectItem>
                                    <SelectItem value='Dodatkowy dochód'>
                                        Dodatkowy dochód
                                    </SelectItem>
                                    <SelectItem value='Zwrot'>Zwrot</SelectItem>
                                </>
                            ) : (
                                <>
                                    <SelectItem value='Żywność'>
                                        Żywność
                                    </SelectItem>
                                    <SelectItem value='Transport'>
                                        Transport
                                    </SelectItem>
                                    <SelectItem value='Rachunki'>
                                        Rachunki
                                    </SelectItem>
                                    <SelectItem value='Rozrywka'>
                                        Rozrywka
                                    </SelectItem>
                                    <SelectItem value='Jedzenie na mieście'>
                                        Jedzenie na mieście
                                    </SelectItem>
                                </>
                            )}
                        </SelectContent>
                    </Select>
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='amount'>Kwota (PLN)</Label>
                    <Input
                        id='amount'
                        type='number'
                        step='0.01'
                        min='0'
                        placeholder='0.00'
                        required
                    />
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='date'>Data</Label>
                    <Input id='date' type='date' required />
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='note'>Notatka (opcjonalna)</Label>
                    <Textarea
                        id='note'
                        placeholder='Dodatkowe informacje...'
                        rows={3}
                    />
                </div>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant='outline'>Cancel</Button>
                </DialogClose>
                <Button type='submit'>Save changes</Button>
            </DialogFooter>
        </form>
    );
}
