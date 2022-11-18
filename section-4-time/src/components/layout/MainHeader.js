import Link from 'next/link';
import React from 'react';
import classes from './MainHeader.module.css';

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/"> NextEvents</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <Link href="/events"> All Events</Link>
                </ul>
            </nav>
        </header>
    );
}
