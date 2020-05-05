import React from 'react';
import { Link } from 'react-router-dom';
import kodflixLogo from '../kodflix_logo.png';
import './Header.css';

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src={kodflixLogo} alt="Kodflix logo" className="KodflixLogo" />
            </Link>
        </header>
    )
}
