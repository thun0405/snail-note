import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <Link href="/">
                    Home
                </Link>
                <Link href="/create">
                    Create New Note
                </Link>
            </nav>
        </header>
    );
}

export default Header;
