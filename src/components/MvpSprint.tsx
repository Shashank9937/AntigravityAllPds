import React, { useState } from 'react';
import { Rocket, Plus, X } from 'lucide-react';

export const MvpSprint = () => {
    const [tasks, setTasks] = useState<{ [key: number]: string[] }>({
        1: ["Dashboard Layout", "Invoice Upload Flow"],
        2: ["Database Schema", "Receipt Parsing OCR"],
        3: ["Connect APIs", "Auth & Permissions"],
        4: ["Bug Squashing", "Pilot Onboarding Prep"]
    });

    const [addingForWeek, setAddingForWeek] = useState<number | null>(null);
    const [newTaskName, setNewTaskName] = useState('');
    const [coreJobLocked, setCoreJobLocked] = useState(true);

    const handleAddTask = (week: number) => {
        if (newTaskName.trim()) {
            setTasks({
                ...tasks,
                [week]: [...(tasks[week] || []), newTaskName]
            });
            setNewTaskName('');
            setAddingForWeek(null);
        }
    };

    return (
        <div className="animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">MVP Sprint Planner</h1>
                <p className="page-description">4-week roadmap to functional prototype. Core job only.</p>
            </div>

            <div className="card mb-6 glass-panel">
                <h2 className="card-title fw-bold">Core Job Definition</h2>
                <input
                    type="text"
                    className="input mb-4"
                    disabled={coreJobLocked}
                    defaultValue="Allow operations managers to automatically track and invoice biomass origin across the supply chain, saving 15 hours a week."
                />
                <div className="flex gap-4">
                    <button className="btn btn-primary" onClick={() => setCoreJobLocked(!coreJobLocked)}>
                        {coreJobLocked ? 'Unlock Core Job' : 'Lock Core Job'}
                    </button>
                    <button className="btn btn-outline" onClick={() => alert("AI feature generation would run here.")}>Generate Features (AI)</button>
                </div>
            </div>

            <div className="grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((week) => (
                    <div key={week} className="card p-4 glass-panel">
                        <h3 className="card-title text-muted mb-4">Week {week}</h3>

                        <div className="flex-col gap-2">
                            {week === 1 && <div className="badge badge-success mb-2 text-center w-full">Figma Wireframes</div>}
                            {week === 2 && <div className="badge badge-warning mb-2 text-center w-full">Backend Logic</div>}
                            {week === 3 && <div className="badge badge-info mb-2 text-center w-full">Frontend Hookup</div>}
                            {week === 4 && <div className="badge badge-danger mb-2 text-center w-full">Pilot Polish</div>}

                            {(tasks[week] || []).map((t, i) => (
                                <div key={i} className="task-item px-2 py-2" style={{ margin: '0' }}><Rocket size={14} className="flex-shrink-0" /> <span>{t}</span></div>
                            ))}

                            {addingForWeek === week ? (
                                <div className="task-item flex space-x-2 p-1" style={{ margin: '0', background: 'transparent' }}>
                                    <input
                                        type="text"
                                        className="input flex-1"
                                        style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                                        placeholder="Task name"
                                        value={newTaskName}
                                        onChange={(e) => setNewTaskName(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleAddTask(week)}
                                        autoFocus
                                    />
                                    <button className="btn btn-primary" style={{ padding: '0.25rem' }} onClick={() => handleAddTask(week)}><Plus size={14} /></button>
                                    <button className="btn btn-outline border-none" style={{ padding: '0.25rem' }} onClick={() => setAddingForWeek(null)}><X size={14} /></button>
                                </div>
                            ) : (
                                <button className="btn mt-4 w-full text-xs" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }} onClick={() => setAddingForWeek(week)}>+ Add Sprint Task</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
