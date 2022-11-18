import React from 'react';
import { getFeaturedEvents } from '../dummy-data';
import EventsList from '../src/components/container/Events/EventsList';

export default function HomePage() {
    const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <h1>The Home Page for featured events</h1>
            <EventsList eventsList={featuredEvents} />
        </div>
    );
}
