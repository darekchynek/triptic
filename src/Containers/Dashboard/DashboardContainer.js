import React, { Component } from 'react';
import Classes from './DashboardContainer.scss';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index';
import DashboardTitle from './components/DashboardTitle/DashboardTitle';
import DashboardMenu from './components/DashboardMenu/DashboardMenu';
import DashboardPage from './components/DashboardPage/DashboardPage';
import DashboardFooter from './components/DashboardFooter/DashboardFooter';

class DashboardContainer extends Component {

  render() {
    return (
      <div className={Classes.container}>
        <DashboardTitle></DashboardTitle>
        <DashboardMenu></DashboardMenu>
        <DashboardPage></DashboardPage>
        <DashboardFooter></DashboardFooter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(DashboardContainer);
