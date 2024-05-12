import React from 'react';
import Link from 'next/link';

interface Note {
    id: number;
    title: string;
    content: string;
}

interface NoteItemProps {
    note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
    return (
        <li>
            <h4>{note.title}</h4>
            <p>{note.content.substring(0, 100)}...</p>
            <Link href={`/notes/${note.id}`}>
                Read More
            </Link>
        </li>
    );
}

export default NoteItem;
