import React from 'react';
// import {}
import Link from 'next/link';

export default function HomePage() {
    return (
        <div>
            <h1>Index Page</h1>
            <ul>
                <li>
                    <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/clients">Clients</Link>
                </li>
                <li></li>
            </ul>
        </div>
    );
}
