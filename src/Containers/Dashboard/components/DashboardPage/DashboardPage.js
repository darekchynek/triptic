import React from 'react';
import Classes from './Dashobard.scss';
import DashboardItem from '../DashboardItem/DashboardItem';

const DashboardPage = props => {

    return (
        <div className={Classes.container}>
            <DashboardItem></DashboardItem>
        </div>
    );
}

export default DashboardPage;