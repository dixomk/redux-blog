import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './header.css';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { pathname } = { ...this.props };
        return (<header className={styles.mainHeader}>
            <nav>
                <ul className={styles.mainMenu}>
                    <li className={`${styles.mainMenuItem} ${(pathname == '/') ? styles.activeMenu : ''}`}><Link to='/'>Home</Link></li>
                    <li className={`${styles.mainMenuItem} ${(pathname == '/blog') ? styles.activeMenu : ''}`}><Link to='/blog'>Blog</Link></li>
                    <li className={`${styles.mainMenuItem} ${(pathname == '/contact') ? styles.activeMenu : ''}`}>Contact</li>
                    <li className={styles.mainMenuItem}>{this.props.user ? 'Logout' : 'Login'}</li>
                </ul>
            </nav>
            <img className={styles.logo} src='/images/logo.jpg' />
        </header>);
    }
}

export default Header;
