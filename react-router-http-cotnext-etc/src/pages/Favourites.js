import React, { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavouritesContext from '../store/favourite-context';

export default function Favourites() {
    const contextObject = useContext(FavouritesContext);
    console.log('Context obje in fav', contextObject);
    const renderFavs = () => {
        if (contextObject.totalFavourites === 0)
            return <h1>No favs added yet.</h1>;
        return <MeetupList meetups={contextObject.favourites} />;
    };
    return (
        <section>
            <h1>Favourites</h1>
            {renderFavs()}
        </section>
    );
}
