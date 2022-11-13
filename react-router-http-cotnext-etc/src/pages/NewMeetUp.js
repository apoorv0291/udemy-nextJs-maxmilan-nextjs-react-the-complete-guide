import React, { useState } from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

const FIREBASE_URL = 'https://react-refrsher-2-default-rtdb.firebaseio.com/';

export default function NewMeetUpPage() {
    const history = useHistory();
    const onAddMeetup = (data) => {
        console.log('On add meetup handler', data);
        fetch(`${FIREBASE_URL}meetups.json`, {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            console.log('RES', res);
            history.replace('/');
        });
    };
    return (
        <section>
            <div>NewMeetUpPage</div>
            <NewMeetupForm onAddMeetup={onAddMeetup} />
        </section>
    );
}
