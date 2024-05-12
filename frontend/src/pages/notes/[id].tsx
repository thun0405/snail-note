import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import NoteEditor from '../../components/NoteEditor';
import Footer from '../../components/Footer';

const NoteDetail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const handleSave = (content: string) => {
        console.log(`Note Updated (ID: ${id}):`, content);
        // 更新ロジックをここに実装
    };

    // 仮のノートコンテンツ
    const noteContent = 'This is a detailed note fetched by ID.';

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

export default NoteDetail;
