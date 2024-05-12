import React from 'react';
import NoteItem from './NoteItem';

interface Note {
    id: number;
    title: string;
    content: string;
}

interface NoteListProps {
    notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
    return (
        <ul>
            {notes.map(note => (
                <NoteItem key={note.id} note={note} />
            ))}
        </ul>
    );
}

export default NoteList;
