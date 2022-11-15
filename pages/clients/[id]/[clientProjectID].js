import React from 'react';
import { useRouter } from 'next/router';

export default function ClientProjectID() {
    const router = useRouter();
    console.log('XXX::RR:', router.query);
    return <div>Speicifc details of a client project clientProjectID</div>;
}
