import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventsList from '../../src/components/container/Events/EventsList';
import ResultsTitle from '../../src/components/container/event-detail/results-title';
import Button from '../../src/components/base/Button/Button';
import ErrorAlert from '../..//src/components/base/error-alert/error-alert';

export default function EventFilterPage() {
    const router = useRouter();
    console.log('ROUTER', router);
    const { slug } = router.query || {};
    const year = slug?.[0];
    const month = slug?.[1];
    console.log('YYYYY', year, month);

    const numYear = +year;
    const numMonth = +month;
    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2024 ||
        numYear < 2020 ||
        month < 1 ||
        month > 12
    ) {
        return (
            <>
                <ErrorAlert>
                    <h1>Invalid filter</h1>{' '}
                </ErrorAlert>
                <div className="center">
                    <Button link="/events"> Show all events</Button>
                </div>
            </>
        );
    }

    const eventData = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });
    if (!eventData || eventData.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <h1>OOPs! No event found for chosen filter</h1>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events"> Show all events</Button>
                </div>
            </>
        );
    }
    if (!slug) return <p className="center">LOADING</p>;
    const dateObj = new Date(numYear, numMonth - 1);
    return (
        <div>
            EventFilterPag | Filtered events
            <ResultsTitle date={dateObj} />
            <EventsList eventsList={eventData} />
        </div>
    );
}
