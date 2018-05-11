import React from 'react';
import Classes from './DashboardTitle.scss';
import logo from '../../../../assets/driver-logo.png';

const DashboardTitle = props => {
    return (
        <div className={Classes.titleContainer}>
            <div className={Classes.mainTitle}>Triptic</div>
        </div>
      );
}

export default DashboardTitle;