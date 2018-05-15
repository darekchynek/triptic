import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './LoginFooter.scss';

const LoginFooter = props => {
    return (
        <div className={Classes.position}>
            <Link to='/contact'><p className={Classes.paragraph}>Contact</p></Link>
            <Link to='/about'><p className={Classes.paragraph}>About Triptik</p></Link>
            <Link to='/development'><p className={Classes.paragraph}>Development</p></Link>
            <Link to='/privacy-policy'><p className={Classes.paragraph}>Privacy Policy</p></Link>
        </div>
      );
}

export default LoginFooter;