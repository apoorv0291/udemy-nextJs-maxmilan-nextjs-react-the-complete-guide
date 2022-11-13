import React from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

export default function MeetupList({ meetups }) {
    console.log('DATA', meetups);
    const renderMeetupList = () => {
        const items = meetups.map((item) => {
            return (
                <MeetupItem
                    key={item.id}
                    imgSrc={item.image}
                    title={item.title}
                    description={item.description}
                    address={item.address}
                    id={item.id}
                />
            );
        });

        return items;
    };
    return <ul className={classes.list}>{renderMeetupList()}</ul>;
}
