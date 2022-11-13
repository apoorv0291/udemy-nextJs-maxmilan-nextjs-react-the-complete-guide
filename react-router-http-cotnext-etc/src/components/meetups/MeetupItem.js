import React, { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../Base/Card';
import FavouritesContext from '../../store/favourite-context';

export default function MeetupItem({
    imgSrc,
    address,
    title,
    description,
    id,
}) {
    const contextValue = useContext(FavouritesContext);
    console.log('CTX VALUE', contextValue);
    const isItemFav = contextValue.isMeetupFavourite(id);
    const toggleFavouritesHandler = () => {
        if (isItemFav) {
            contextValue.deleteFavourite(id);
        } else {
            contextValue.addFavourite({
                id,
                image: imgSrc,
                title,
                address,
                description,
            });
        }
    };

    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={imgSrc} alt={title} />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavouritesHandler}>
                        {isItemFav ? 'Remove from fav' : 'Add to favourites'}
                    </button>
                </div>
            </li>
        </Card>
    );
}
