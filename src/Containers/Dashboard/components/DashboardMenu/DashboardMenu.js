import React from 'react';
import Classes from './DashboardMenu.scss';
import DashboardSearch from '../DashboardSearch/DashboardSearch';

const DashboardMenu = props => {
    return (
        <div className={Classes.menuBox}>
            <div className={Classes.menuContainer}>
                <div className={Classes.menuItems}>Trips</div>
                <div className={Classes.menuItems}>Mix</div>
                <div className={Classes.menuItems}>Dix</div>
                <DashboardSearch></DashboardSearch>
            </div>
        </div>
    );
}

export default DashboardMenu;