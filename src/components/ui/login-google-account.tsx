'use client';

import { authClient } from '@/lib/auth-client';
import { Button } from './button';
import GoogleLogo from './google-logo';

export default function LoginWithGoogleAccount() {
    const handleLoginWithGoogle = async () => {
        await authClient.signIn.social({
            provider: 'google',
            callbackURL: '/dashboard',
        });
    };

    return (
        <Button
            type='button'
            variant='outline'
            className='w-full'
            onClick={handleLoginWithGoogle}>
            <GoogleLogo />
        </Button>
    );
}
