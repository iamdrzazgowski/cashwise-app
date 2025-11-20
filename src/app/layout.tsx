import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
    title: 'CashWise - Your Financial Partner',
    description:
        'CashWise is your financial partner, helping you manage your money and investments.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='dark'>
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
