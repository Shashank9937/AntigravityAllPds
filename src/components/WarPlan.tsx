import React, { useState } from 'react';
import { Target, AlertTriangle, CheckCircle2, Plus, X } from 'lucide-react';

export const WarPlan = () => {
    const [killCriteria, setKillCriteria] = useState([
        "3 consecutive users reject the pain",
        "TAM < $100M after deeper bottom-up calc",
        "Cannot reach decision makers after 40 attempts"
    ]);
    const [isAdding, setIsAdding] = useState(false);
    const [newCriteria, setNewCriteria] = useState('');

    const milestones = [
        { day: 'Day 7', target: '5 Expert Interviews Complete', status: 'done' },
        { day: 'Day 14', target: 'Problem Statement & TAM Validated', status: 'active' },
        { day: 'Day 21', target: 'Initial Solution Concept Pitched', status: 'pending' },
        { day: 'Day 30', target: 'Pre-sale or LOI Secured', status: 'pending' },
    ];

    const handleAdd = () => {
        if (newCriteria.trim()) {
            setKillCriteria([...killCriteria, newCriteria]);
            setNewCriteria('');
            setIsAdding(false);
        }
    };

    return (
        <div className="animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">30-Day War Plan</h1>
                <p className="page-description">Daily milestone mapping and kill triggers.</p>
            </div>

            <div className="grid-cols-2 mb-6 gap-6">
                <div className="card h-full glass-panel">
                    <h2 className="card-title text-xl mb-6"><Target size={20} color="var(--accent-primary)" /> Execution Milestones</h2>
                    <div className="flex-col gap-4">
                        {milestones.map((m, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-lg transition-transform hover:translate-x-1" style={{
                                background: m.status === 'active' ? 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent)' : 'rgba(255,255,255,0.02)',
                                border: m.status === 'active' ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                                opacity: m.status === 'pending' ? 0.6 : 1,
                                boxShadow: m.status === 'active' ? '0 0 15px rgba(59,130,246,0.1)' : 'none'
                            }}>
                                <div style={{ fontWeight: 600, width: '60px', color: m.status === 'active' ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>{m.day}</div>
                                <div className="text-lg" style={{ flex: 1, color: m.status === 'active' ? '#fff' : '' }}>{m.target}</div>
                                <div>
                                    {m.status === 'done' && <CheckCircle2 color="var(--success)" size={20} />}
                                    {m.status === 'active' && <span className="badge badge-info shadow-sm" style={{ boxShadow: '0 0 8px rgba(59,130,246,0.3)' }}>IN PROGRESS</span>}
                                    {m.status === 'pending' && <span className="badge" style={{ background: 'var(--bg-primary)' }}>LOCKED</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card h-full glass-panel" style={{ borderTop: '3px solid var(--danger)' }}>
                    <h2 className="card-title text-danger text-xl mb-2"><AlertTriangle size={20} color="var(--danger)" /> Kill Criteria Triggers</h2>
                    <p className="mb-6 text-secondary" style={{ color: 'var(--text-secondary)' }}>If any condition is met, pivot immediately.</p>
                    <div className="flex-col gap-4">
                        {killCriteria.map((c, i) => (
                            <div key={i} className="task-item" style={{ borderColor: 'rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.05)' }}>
                                <AlertTriangle size={18} color="var(--danger)" /> <span className="text-lg">{c}</span>
                            </div>
                        ))}

                        {isAdding ? (
                            <div className="task-item flex space-x-2 p-2" style={{ background: 'transparent' }}>
                                <input
                                    type="text"
                                    className="input flex-1"
                                    placeholder="Enter kill condition..."
                                    value={newCriteria}
                                    onChange={(e) => setNewCriteria(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                                    autoFocus
                                />
                                <button className="btn btn-primary" style={{ background: 'var(--danger)', color: '#fff' }} onClick={handleAdd}><Plus size={16} /></button>
                                <button className="btn btn-outline border-none" onClick={() => setIsAdding(false)}><X size={16} /></button>
                            </div>
                        ) : (
                            <button className="btn mt-4 w-full" style={{ background: 'rgba(239,68,68,0.1)', color: 'var(--danger)', border: '1px dashed rgba(239,68,68,0.3)' }} onClick={() => setIsAdding(true)}>+ Add Kill Criterion</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
