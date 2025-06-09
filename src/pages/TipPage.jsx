import React from 'react';
import { useParams } from 'react-router-dom';
import { tipPages } from '../data/tipPages';
import NotFound from './NotFound';
import './TipPage.css';

export default function TipPage() {
    const { tipId } = useParams();
    const tip = tipPages[tipId];

    if (!tip) {
        return <NotFound />;
    }

    return (
        <main className="tip-page">
            <div className="tip-hero">
                <img src={tip.image} alt={tip.title} loading="lazy" />
                <h1>{tip.title}</h1>
            </div>
            <div
                className="tip-content"
                dangerouslySetInnerHTML={{ __html: tip.content }}
            />
        </main>
    );
}
