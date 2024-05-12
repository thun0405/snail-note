import React from 'react';
import Header from '../components/Header';
import NoteList from '../components/NoteList';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    const notes = [
        { id: 1, title: 'First Note', content: 'This is the first note.' },
        { id: 2, title: 'Second Note', content: 'This is the second note.' }
    ];

    return (
        <div>
            <Header />
            <main>
                <NoteList notes={notes} />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
