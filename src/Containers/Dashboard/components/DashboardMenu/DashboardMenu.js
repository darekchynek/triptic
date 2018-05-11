import React from 'react';
import Classes from './DashboardMenu.scss';
import DashboardSearch from '../DashboardSearch/DashboardSearch';

const DashboardMenu = props => {
    return (
        <div>
            <DashboardSearch></DashboardSearch>
        </div>
    );
}

export default DashboardMenu;