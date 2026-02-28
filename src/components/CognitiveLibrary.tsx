import React, { useState } from 'react';
import { BookOpen, Brain, BookMarked, Layers } from 'lucide-react';
import booksData from '../data/books.json';

export const CognitiveLibrary = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = booksData.filter((book: any) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">Cognitive OS & Library</h1>
                <p className="page-description">Decision-making frameworks and the ultimate founder's reading list.</p>
            </div>

            <div className="card glass-panel mb-8">
                <div className="flex items-center gap-3 mb-6">
                    <Brain size={24} color="var(--accent-primary)" />
                    <h2 className="card-title text-xl mb-0">Cognitive Tools & Decision Frameworks</h2>
                </div>

                <div className="grid-cols-2 gap-6 pb-4">
                    <div className="card flex-col gap-3 p-5 rounded bg-tertiary border border-border" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <div className="flex items-center gap-3 mb-2">
                            <Layers size={20} color="var(--warning)" />
                            <strong className="text-primary text-lg">Inversion Principle</strong>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed">Instead of asking "How do I succeed?", ask "How do I guarantee failure?" and relentlessly avoid those actions. Working backward exposes hidden structural risks.</p>
                    </div>

                    <div className="card flex-col gap-3 p-5 rounded bg-tertiary border border-border" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <div className="flex items-center gap-3 mb-2">
                            <Layers size={20} color="var(--success)" />
                            <strong className="text-primary text-lg">Second-Order Thinking</strong>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed">Every action has a consequence, and every consequence has a subsequent consequence. Always ask: "And then what?" before making structural decisions.</p>
                    </div>

                    <div className="card flex-col gap-3 p-5 rounded bg-tertiary border border-border" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <div className="flex items-center gap-3 mb-2">
                            <Layers size={20} color="var(--accent-primary)" />
                            <strong className="text-primary text-lg">Regret Minimization Framework</strong>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed">Project yourself to age 80 and look back on this decision. Will you regret not having tried it more than you'd regret failing? If yes, take the leap.</p>
                    </div>

                    <div className="card flex-col gap-3 p-5 rounded bg-tertiary border border-border" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <div className="flex items-center gap-3 mb-2">
                            <Layers size={20} color="var(--danger)" />
                            <strong className="text-primary text-lg">The Sunk Cost Trap</strong>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed">Past investments of time or money are irrecoverable. Decisions should be made purely on current reality and future value, entirely disregarding what's already spent.</p>
                    </div>
                </div>
            </div>

            <div className="card glass-panel pb-12">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <BookMarked size={24} color="var(--accent-secondary)" />
                        <h2 className="card-title text-xl mb-0">The Reading List</h2>
                        <span className="badge badge-info ml-2">{booksData.length} Books</span>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Search books, authors, topics..."
                            className="input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ width: '300px' }}
                        />
                    </div>
                </div>

                <div className="grid-cols-3 gap-6">
                    {filteredBooks.map((book: any, i: number) => (
                        <div key={i} className="flex flex-col gap-2 p-5 rounded border" style={{ borderColor: 'var(--border-subtle)', background: 'rgba(255,255,255,0.02)', transition: 'all 0.2s', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}>
                            <h3 className="text-md font-bold text-primary mb-1 mt-0 leading-tight">{book.title}</h3>
                            <span className="text-xs italic mb-3" style={{ color: 'var(--accent-secondary)' }}>{book.author}</span>
                            <p className="text-sm text-secondary" style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>{book.desc}</p>
                        </div>
                    ))}
                </div>
                {filteredBooks.length === 0 && (
                    <div className="text-center p-8 text-secondary w-full">
                        No books found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};
