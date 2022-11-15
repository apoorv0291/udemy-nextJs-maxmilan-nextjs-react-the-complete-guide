import React from 'react';
import Link from 'next/link';

export default function ClientListPage() {
    const clients = [
        { id: 'max', name: 'Axmilloan' },
        { id: 'man', name: 'Manuel' },
        { id: 'apo', name: 'Apoorv' },
        { id: 'apo2', name: 'Apoorv2' },
    ];
    return (
        <div>
            <h1>ClientListPage</h1>

            <ul>
                {clients.map((client) => {
                    return (
                        <li key={client.id}>
                            <Link href={`/clients/${client.id}`}>
                                {client.name}
                            </Link>
                        </li>
                    );
                })}
                {clients.map((client) => {
                    return (
                        <li key={client.id}>
                            <Link
                                href={{
                                    pathname: `/clients/[id]`,
                                    query: {
                                        id: client.id,
                                    },
                                }}
                            >
                                {client.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
