export default function FooterSection() {
    return (
        <footer className='border-b bg-white py-12 dark:bg-transparent'>
            <div className='mx-auto max-w-5xl px-6'>
                <div className='center'>
                    <span className='text-muted-foreground order-last block text-center text-sm md:order-first'>
                        © {new Date().getFullYear()} CashWise, All rights
                        reserved
                    </span>
                </div>
            </div>
        </footer>
    );
}
