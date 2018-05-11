import React from 'react';
import Classes from './LoginFooter.scss';

const LoginFooter = props => {
    return (
        <div className={Classes.position}>
            <p className={Classes.paragraph}>Contact</p>
            <p className={Classes.paragraph}>About Triptik</p>
            <p className={Classes.paragraph}>Development</p>
            <p className={Classes.paragraph}>Privacy Policy</p>
        </div>
      );
}

export default LoginFooter;