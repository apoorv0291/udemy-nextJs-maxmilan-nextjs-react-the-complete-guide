import React, { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
const FIREBASE_URL = 'https://react-refrsher-2-default-rtdb.firebaseio.com/';

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://static.uacdn.net/web-cms/uncentre_LP_b041622b0f.jpg?q=75&w=1000&fm=webp',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];
export default function AllMeetUpPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [meetupData, setMeetupData] = useState([]);

    useEffect(() => {
        fetch(`${FIREBASE_URL}meetups.json`)
            .then((res) => {
                console.log('FETCHING ALL DTA', res);
                return res.json();
            })
            .then((res) => {
                console.log('json parsed', res);
                setIsLoading(false);
                const meetups = [];
                for (let key in res) {
                    meetups.push({ id: key, ...res[key] });
                }
                setMeetupData(Object.values(meetups));
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <h1>AllMeetUps are loading</h1>
            </section>
        );
    }
    return (
        <section>
            <h1>AllMeetUpPage</h1>
            <MeetupList meetups={meetupData} />
        </section>
    );
}
