import React, { useRef } from 'react';
import Button from '../../base/Button/Button';
import classes from './events-search.module.css';
import { useRouter } from 'next/router';

export default function EventSsearch(props) {
    const yearRef = useRef();
    const monthRef = useRef();
    const router = useRouter();
    const submitHanlder = (e) => {
        e.preventDefault();
        console.log('submit handler');
        const year = yearRef.current.value;
        const month = monthRef.current.value;
        console.log('submit handler', year, month);
        props.onSearch(year, month);
        // router.push();
    };
    return (
        <form className={classes.form} onSubmit={submitHanlder}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year"> Year</label>
                    <select id="year" ref={yearRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month"> Year</label>
                    <select id="month" ref={monthRef}>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">MArch</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">July</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">OCt</option>
                        <option value="11">NOv</option>
                        <option value="12">DEc</option>
                    </select>
                </div>
            </div>
            <Button> find events </Button>
        </form>
    );
}
