import { createContext, useState } from 'react';

const initialValue = {
    favourites: [],
    totalFavourites: 0,
    addFavourite: (meetup) => {},
    isMeetupFavourite: (meetupID) => {},
    deleteFavourite: (meetupID) => {},
};
const FavouritesContext = createContext(initialValue);

export function FavouritesContextProvider({ children }) {
    const [userFav, setUserFav] = useState([]);

    const addFavouritesHandler = (favMeetup) => {
        debugger;
        setUserFav((prevState) => prevState.concat(favMeetup));
    };

    const deleteFavouritesHandler = (favMeetupID) => {
        setUserFav((prevState) =>
            prevState.filter((item) => item.id !== favMeetupID)
        );
    };

    const isMeetupFavouriteHandler = (favMeetupID) => {
        return userFav?.some((item) => item.id === favMeetupID);
    };

    const context = {
        favourites: userFav,
        totalFavourites: userFav.length,
        addFavourite: addFavouritesHandler,
        deleteFavourite: deleteFavouritesHandler,
        isMeetupFavourite: isMeetupFavouriteHandler,
    };
    return (
        <FavouritesContext.Provider value={context}>
            {children}
        </FavouritesContext.Provider>
    );
}

export default FavouritesContext;
