import React, { useState } from 'react';
import { Shield, BookOpen, Activity, Moon } from 'lucide-react';

export const DisciplineTracker = () => {
    const [morningRituals, setMorningRituals] = useState([
        { id: '1', task: 'Drink water (0.5L)', done: false },
        { id: '2', task: "5-Min Journal: Today's #1 Priority", done: false },
        { id: '3', task: 'Deep Read / Learn (No news/socials)', done: false },
        { id: '4', task: 'Physical Run / Gym', done: false, icon: <Activity size={14} className="inline mr-1" color="var(--success)" /> }
    ]);

    const [eveningRituals, setEveningRituals] = useState([
        { id: '1', task: 'Dinner & Family Time (100% Present)', done: true },
        { id: '2', task: 'Update Metrics Dashboard', done: false },
        { id: '3', task: "Set Tomorrow's Top 3 Outputs", done: false },
        { id: '4', task: 'Devices Down (No exceptions)', done: false, isDanger: true }
    ]);

    const toggleMorning = (id: string) => {
        setMorningRituals(prev => prev.map(r => r.id === id ? { ...r, done: !r.done } : r));
    };

    const toggleEvening = (id: string) => {
        setEveningRituals(prev => prev.map(r => r.id === id ? { ...r, done: !r.done } : r));
    };

    return (
        <div className="animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">Discipline & Rituals</h1>
                <p className="page-description">Habits are the compound interest of founder execution.</p>
            </div>

            <div className="grid-cols-2 gap-6">
                <div className="card flex-col gap-6 glass-panel">
                    <h2 className="card-title text-xl"><Shield size={20} color="var(--accent-primary)" /> Morning Ignition (5:00 - 6:00 AM)</h2>
                    <div className="flex-col gap-4">
                        {morningRituals.map((ritual) => (
                            <div key={ritual.id} className="task-item cursor-pointer hover:bg-white/5" onClick={() => toggleMorning(ritual.id)}>
                                <input type="checkbox" className="checkbox" checked={ritual.done} readOnly />
                                <span style={{ textDecoration: ritual.done ? 'line-through' : 'none', color: ritual.done ? 'var(--text-muted)' : 'var(--text-primary)', transition: 'all 0.2s' }}>
                                    {ritual.icon}
                                    {ritual.task}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card flex-col gap-6 glass-panel">
                    <h2 className="card-title text-xl"><Moon size={20} color="var(--warning)" /> Evening Shutdown (8:30 - 9:30 PM)</h2>
                    <div className="flex-col gap-4">
                        {eveningRituals.map((ritual) => (
                            <div key={ritual.id} className={`task-item cursor-pointer hover:bg-white/5 ${ritual.isDanger ? 'border-danger' : ''}`} style={ritual.isDanger ? { borderColor: 'rgba(239, 68, 68, 0.3)' } : {}} onClick={() => toggleEvening(ritual.id)}>
                                <input type="checkbox" className="checkbox" checked={ritual.done} readOnly />
                                <span style={{
                                    textDecoration: ritual.done ? 'line-through' : 'none',
                                    color: ritual.done ? 'var(--text-muted)' : ritual.isDanger ? 'var(--danger)' : 'var(--text-primary)',
                                    transition: 'all 0.2s'
                                }}>
                                    {ritual.task}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card mt-6 glass-panel">
                <h2 className="card-title text-xl"><BookOpen size={20} /> Non-Negotiable Rules Audit</h2>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Rule Name</th>
                                <th>Check Window/Action</th>
                                <th>Enforcement Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Social Media Scroll (Distraction Audit)</td>
                                <td>Only 7:00 - 7:30 PM. App Blocker on.</td>
                                <td><span className="badge badge-success">COMPLIANT</span></td>
                            </tr>
                            <tr>
                                <td>Reactive Email/Messages</td>
                                <td>Only 3 windows: 7:45 AM, 1 PM, 5 PM.</td>
                                <td><span className="badge badge-warning">SLIPPED ONCE TODAY</span></td>
                            </tr>
                            <tr>
                                <td>Cognitive Firewall Protocol</td>
                                <td>First 2 hrs of deep work sacred. No calls.</td>
                                <td><span className="badge badge-success">COMPLIANT</span></td>
                            </tr>
                            <tr>
                                <td>Audio Protocol (Commute/Drive)</td>
                                <td>Must produce 1 voice memo insight. No empty listening.</td>
                                <td><span className="badge badge-danger">FAILED YESTERDAY</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
