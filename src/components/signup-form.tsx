'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import GoogleLogo from './ui/google-logo';

export default function SignUpForm() {
    return (
        <form
            action=''
            className='bg-muted m-auto h-fit w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]'>
            <div className='bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6'>
                <div className='text-center'>
                    <h1 className='mb-1 mt-4 text-xl font-semibold'>
                        Create a CashWise Account
                    </h1>
                    <p className='text-sm'>
                        Welcome! Create an account to get started
                    </p>
                </div>

                <div className='mt-6 space-y-6'>
                    <div className='space-y-1'>
                        <Label htmlFor='fullname' className='block text-sm'>
                            Fullname
                        </Label>
                        <Input
                            type='text'
                            required
                            name='fullname'
                            id='fullname'
                        />
                    </div>

                    <div className='space-y-1'>
                        <Label htmlFor='email' className='block text-sm'>
                            E-mail
                        </Label>
                        <Input type='email' required name='email' id='email' />
                    </div>

                    <div className='space-y-1'>
                        <Label htmlFor='pwd' className='text-sm'>
                            Password
                        </Label>

                        <Input
                            type='password'
                            required
                            name='pwd'
                            id='pwd'
                            className='input sz-md variant-mixed'
                        />
                    </div>

                    <div className='space-y-1'>
                        <Label htmlFor='pwd' className='text-sm'>
                            Password
                        </Label>

                        <Input
                            type='password'
                            required
                            name='pwd'
                            id='pwd'
                            className='input sz-md variant-mixed'
                        />
                    </div>

                    <Button className='w-full'>Sign In</Button>
                </div>

                <div className='my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3'>
                    <hr className='border-dashed' />
                    <span className='text-muted-foreground text-xs'>
                        Or continue With
                    </span>
                    <hr className='border-dashed' />
                </div>

                <Button type='button' variant='outline' className='w-full'>
                    <GoogleLogo />
                </Button>
            </div>

            <div className='p-3'>
                <p className='text-accent-foreground text-center text-sm'>
                    Have an account ?
                    <Button asChild variant='link' className='px-2'>
                        <Link href='/login' replace={true}>
                            Sign In
                        </Link>
                    </Button>
                </p>
            </div>
        </form>
    );
}
