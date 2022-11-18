import React from 'react';
import Event from './Event';
import classes from './EventsList.module.css';

export default function EventsList(props) {
    const { eventsList } = props;

    const renderEventList = () => {
        const List = eventsList.map((event) => {
            return <Event data={event} id={event.id} />;
        });

        return <ul className={classes.list}>{List}</ul>;
    };
    return <div>{renderEventList()}</div>;
}
