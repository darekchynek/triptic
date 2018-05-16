import React from 'react';
import * as classes from './Popup.scss';

const popup = props => {
    return (
        <div className={classes.Popup}>
            <h2>{props.header}</h2>
            <a onClick={props.onClose} className={classes.Close}>&times;</a>
            <div className={classes.Content}>{props.content}</div>
        </div>
    );
};

export default popup;