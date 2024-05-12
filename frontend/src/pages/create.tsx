import React from 'react';
import Header from '../components/Header';
import NoteEditor from '../components/NoteEditor';
import Footer from '../components/Footer';

const CreateNote: React.FC = () => {
    const handleSave = (content: string) => {
        console.log('Note Saved:', content);
        // 保存ロジックをここに実装
    };

    return (
        <div>
            <Header />
            <main>
                <NoteEditor onSave={handleSave} />
            </main>
            <Footer />
        </div>
    );
}

export default CreateNote;
