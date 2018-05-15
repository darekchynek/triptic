import React from 'react';
import classes from './Loading.scss';
import Backdrop from '../Backdrop/Backdrop';
import loading from '../../../assets/loading-gear.svg';

const Loading = props => (
    <Backdrop>
        <div className={classes.ImgContainer}>
            <img className={classes.Loading} src={loading} alt="loading gear" />
        </div>
    </Backdrop>
)
export default Loading;