import React, { useState } from 'react';
import { Target, AlertTriangle, CheckCircle2, Plus, X } from 'lucide-react';

export const WarPlan = () => {
    const [killCriteria, setKillCriteria] = useState([
        "Phase 1: Cannot find 10 people with clearly-stated problem by Day 60",
        "Phase 2: Week-1 retention below 30% and not improving by Day 150",
        "Phase 3: No repeatable acquisition channel producing CAC:LTV > 1:3 by Day 240",
        "Phase 4: No term sheets despite 40+ qualified investor convos by Day 340"
    ]);
    const [isAdding, setIsAdding] = useState(false);
    const [newCriteria, setNewCriteria] = useState('');

    const milestones = [
        { day: 'Months 1-3', target: 'PHASE 1: Signal Extraction (Find 10 who pay)', status: 'done' },
        { day: 'Months 4-6', target: 'PHASE 2: Signal Amplification (Retain & Referral)', status: 'active' },
        { day: 'Months 7-9', target: 'PHASE 3: Machine Building (Repeatable CAC)', status: 'pending' },
        { day: 'Months 10-12', target: 'PHASE 4: Capital & Scale (Fundraise leverage)', status: 'pending' },
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
                <h1 className="page-title">12-Month Venture Timeline</h1>
                <p className="page-description">The four phases to venture scale. Build fast. Kill false assumptions faster.</p>
            </div>

            <div className="grid-cols-2 mb-6 gap-6">
                <div className="card h-full glass-panel">
                    <h2 className="card-title text-xl mb-6"><Target size={20} color="var(--accent-primary)" /> Venture Phases</h2>
                    <div className="flex-col gap-4">
                        {milestones.map((m, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-lg transition-transform hover:translate-x-1" style={{
                                background: m.status === 'active' ? 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent)' : 'rgba(255,255,255,0.02)',
                                border: m.status === 'active' ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                                opacity: m.status === 'pending' ? 0.6 : 1,
                                boxShadow: m.status === 'active' ? '0 0 15px rgba(59,130,246,0.1)' : 'none'
                            }}>
                                <div style={{ fontWeight: 600, width: '90px', color: m.status === 'active' ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>{m.day}</div>
                                <div className="text-sm" style={{ flex: 1, color: m.status === 'active' ? '#fff' : '' }}>{m.target}</div>
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
                    <h2 className="card-title text-danger text-xl mb-2"><AlertTriangle size={20} color="var(--danger)" /> Kill Conditions Phase Check</h2>
                    <p className="mb-6 text-secondary" style={{ color: 'var(--text-secondary)' }}>If any condition is met, pivot or stop immediately.</p>
                    <div className="flex-col gap-3">
                        {killCriteria.map((c, i) => (
                            <div key={i} className="task-item p-3" style={{ borderColor: 'rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.05)' }}>
                                <AlertTriangle size={18} color="var(--danger)" /> <span className="text-sm">{c}</span>
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
