import React from 'react';
import classes from './Event.module.css';
import Button from '../../base/Button/Button';
import DateIcon from '../../icons/date-icon';
import AddressIcon from '../../icons/address-icon';
import ArrowRightIcon from '../../icons/arrow-right-icon';

export default function Event(props) {
    const { data } = props;
    const { description, id, title, location, image, date } = data;
    // console.log('image', image);
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    // console.log('human readb', humanReadableDate);
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    {/* <h5>{description}</h5> */}
                </div>
                <div classes={classes.date}>
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div classes={classes.address}>
                    <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                    <span className={classes.icon}>
                        <ArrowRightIcon />
                    </span>
                    <span>Explore event</span>
                </Button>
            </div>
        </li>
    );
}
