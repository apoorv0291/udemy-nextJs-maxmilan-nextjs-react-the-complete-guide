import React from 'react';
import { getEventById } from '../../dummy-data';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Event from '../../src/components/container/Events/Event';
import EventSummary from '../../src/components/container/event-detail/event-summary';
import EventLogistics from '../../src/components/container/event-detail/event-logistics';
import EventContent from '../../src/components/container/event-detail/event-content';
import ErrorAlert from '../..//src/components/base/error-alert/error-alert';

export default function SpecificEventDetails() {
    const router = useRouter();
    const { query } = router;
    const eventData = getEventById(query.eventID);
    console.log('Event data', eventData);
    if (!eventData) {
        return (
            <ErrorAlert>
                <h3>NO event found, wrong id</h3>
            </ErrorAlert>
        );
    }
    return (
        <Fragment>
            {/* <Event data={eventData} /> */}
            <EventSummary title={eventData.title} />
            <EventLogistics
                date={eventData.date}
                address={eventData.location}
                image={eventData.image}
                imageAlt={eventData.title}
            />
            <EventContent>
                <p>{eventData.description}</p>
            </EventContent>
        </Fragment>
    );
}
