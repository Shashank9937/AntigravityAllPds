import React, { useState } from 'react';
import { useStore } from '../store';
import { Target, ThumbsDown, ArrowRightCircle } from 'lucide-react';

export const IdeaEngine = () => {
    const { ideas, addIdea } = useStore();
    const [name, setName] = useState('');
    const [painLevel, setPainLevel] = useState(5);
    const [tam, setTam] = useState(5);
    const [ease, setEase] = useState(5);

    const handleAdd = () => {
        if (!name.trim()) return;
        addIdea({ id: String(Date.now()), name, painLevel, tam, ease, score: painLevel + tam + ease });
        setName(''); setPainLevel(5); setTam(5); setEase(5);
    };

    return (
        <div className="animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">Idea Scoring Engine</h1>
                <p className="page-description">10-10-10 filter and evaluation matrix. Find what matters.</p>
            </div>

            <div className="card glass-panel mb-6 flex-col gap-6">
                <h2 className="card-title">New Hypothesis Entry</h2>
                <input
                    type="text"
                    className="input"
                    placeholder="One-sentence hypothesis or problem statement"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <div className="grid-cols-3">
                    <div className="flex-col gap-2">
                        <label className="metric-label" style={{ color: 'var(--text-primary)' }}>Pain Severity (1-10)</label>
                        <input type="range" min="1" max="10" value={painLevel} onChange={(e) => setPainLevel(Number(e.target.value))} />
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{painLevel} / 10 - {painLevel < 6 ? 'Vitamin' : 'Painkiller'}</span>
                    </div>
                    <div className="flex-col gap-2">
                        <label className="metric-label" style={{ color: 'var(--text-primary)' }}>TAM Potential (1-10)</label>
                        <input type="range" min="1" max="10" value={tam} onChange={(e) => setTam(Number(e.target.value))} />
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{tam} / 10</span>
                    </div>
                    <div className="flex-col gap-2">
                        <label className="metric-label" style={{ color: 'var(--text-primary)' }}>Ease of Validation (1-10)</label>
                        <input type="range" min="1" max="10" value={ease} onChange={(e) => setEase(Number(e.target.value))} />
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{ease} / 10</span>
                    </div>
                </div>

                <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }} onClick={handleAdd}>+ Add Hypothesis</button>
            </div>

            <h2 className="card-title mt-6"><Target size={18} /> Scored Matrix</h2>
            <div className="table-container mt-4">
                <table>
                    <thead>
                        <tr>
                            <th>Idea Name</th>
                            <th>Pain</th>
                            <th>TAM</th>
                            <th>Ease</th>
                            <th>Total Score</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ideas.sort((a, b) => b.score - a.score).map((idea) => (
                            <tr key={idea.id}>
                                <td style={{ fontWeight: 600 }}>{idea.name}</td>
                                <td>{idea.painLevel}</td>
                                <td>{idea.tam}</td>
                                <td>{idea.ease}</td>
                                <td>
                                    <span className={`badge ${idea.score >= 20 ? 'badge-success' : idea.score < 14 ? 'badge-danger' : 'badge-warning'}`}>
                                        {idea.score}
                                    </span>
                                </td>
                                <td>
                                    {idea.score >= 20 ? (
                                        <button className="btn badge-success"><ArrowRightCircle size={14} /> Pursue</button>
                                    ) : (
                                        <button className="btn badge-danger" style={{ color: 'var(--danger)', background: 'transparent' }}><ThumbsDown size={14} /> Kill</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
