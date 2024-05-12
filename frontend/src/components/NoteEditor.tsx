import React, { useState } from 'react';

interface NoteEditorProps {
    onSave: (content: string) => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ onSave }) => {
    const [content, setContent] = useState('');

    return (
        <div>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={() => onSave(content)}>Save</button>
        </div>
    );
}

export default NoteEditor;
