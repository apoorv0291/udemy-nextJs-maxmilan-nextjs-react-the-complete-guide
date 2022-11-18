import React from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventsList from '../../src/components/container/Events/EventsList';
import EventSsearch from '../../src/components/container/event-detail/events-search';

export default function AllEvents() {
    const allEvents = getAllEvents();
    const router = useRouter();

    const onSearch = (year, month) => {
        const fullPAth = `/events/${year}/${month}`;
        router.push(fullPAth);
    };
    return (
        <div>
            <EventSsearch onSearch={onSearch} />
            <EventsList eventsList={allEvents} />
        </div>
    );
}
