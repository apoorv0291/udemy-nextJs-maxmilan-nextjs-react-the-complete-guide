import React from 'react';
import { useRouter } from 'next/router';

export default function IdPortfolio() {
    const router = useRouter();
    console.log('router', router);
    console.log('router', router.pathname);
    console.log('router', router.asPath);
    console.log('router', router.query);
    const { id } = router.query;
    return (
        <div>
            <h1>Protfolio project page</h1>
        </div>
    );
}
