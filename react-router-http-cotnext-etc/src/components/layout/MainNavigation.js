import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavouritesContext from '../../store/favourite-context';

export default function MainNavigation() {
    const contextObject = useContext(FavouritesContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup"> New Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favourites">
                            {' '}
                            Favourites Meetups{' '}
                            <sup className={classes.badge}>
                                {contextObject.totalFavourites}
                            </sup>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
