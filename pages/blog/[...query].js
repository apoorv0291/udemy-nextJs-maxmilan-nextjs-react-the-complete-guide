import React from 'react';
import { useRouter } from 'next/router';

export default function QqueryBlogPost() {
    const router = useRouter();
    console.log('XXX::RR:', router.query);

    return <div>[...query]</div>;
}
