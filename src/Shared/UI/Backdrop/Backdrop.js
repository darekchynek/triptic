import React from 'react';
import classes from './Backdrop.scss';

const backdrop = props => <div className={classes.Backdrop}>{props.children}</div>

export default backdrop;