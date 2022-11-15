import React from 'react';
import { useRouter } from 'next/router';
export default function ClientProjects() {
    const router = useRouter();
    const clickhandler = () => {
        console.log('Handler Clicked');
        router.push('/clients/max/projectA');
        router.push({
            pathname: '/clients/[id]/[clientProjectID]',
            query: {
                id: 'apoorv',
                clientProjectID: 'projectA',
            },
        });
    };
    return (
        <div>
            <h1>ClientProjects - Projects of a given client</h1>
            <button onClick={clickhandler}> Load Project A </button>
        </div>
    );
}
