import React from 'react';

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div>layout</div>
            <div>{children}</div>
        </div>
    );
}
