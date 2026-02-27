import React, { useState } from 'react';
import { useStore } from '../store';
import { CheckCircle2, Circle, Clock, Flame, Zap, Plus, X } from 'lucide-react';

export const Dashboard = () => {
    const { tasks, toggleTask, addTask } = useStore();
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const deepWorkHours = tasks.filter(t => t.type === 'deep_work' && t.completed).length * 2;

    const handleAddTask = () => {
        if (newTaskTitle.trim()) {
            addTask({
                id: String(Date.now()),
                title: newTaskTitle,
                completed: false,
                type: 'deep_work'
            });
            setNewTaskTitle('');
            setIsAddingTask(false);
        }
    };

    return (
        <div className="animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">Daily Execution</h1>
                <p className="page-description">Your strict daily operating manual. Zero distractions.</p>
            </div>

            <div className="grid-cols-4 mb-8 mt-6">
                <div className="card metric-card glass-panel" style={{ borderTop: '3px solid var(--accent-primary)' }}>
                    <span className="metric-label">Deep Work Hours</span>
                    <span className="metric-val text-primary">{deepWorkHours} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/ 8</span></span>
                    <div className="progress-bar mt-6"><div className="progress-fill" style={{ width: `${Math.min((deepWorkHours / 8) * 100, 100)}%` }}></div></div>
                </div>
                <div className="card metric-card glass-panel" style={{ borderTop: '3px solid var(--success)' }}>
                    <span className="metric-label">Customer Signals</span>
                    <span className="metric-val text-primary">2 <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/ 3</span></span>
                    <div className="progress-bar mt-6"><div className="progress-fill" style={{ width: '66%', background: 'linear-gradient(90deg, #10b981, #059669)', boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}></div></div>
                </div>
                <div className="card metric-card glass-panel">
                    <span className="metric-label">Hypotheses Tested</span>
                    <span className="metric-val text-primary">1</span>
                </div>
                <div className="card metric-card glass-panel" style={{ borderTop: '3px solid var(--danger)' }}>
                    <span className="metric-label">Daily Kill Criteria</span>
                    <span className="metric-val text-danger" style={{ color: 'var(--danger)' }}>0</span>
                </div>
            </div>

            <div className="grid-cols-2 mt-8">
                <div className="card flex-col gap-6 glass-panel">
                    <h2 className="card-title text-xl mb-4"><Flame size={20} color="var(--accent-primary)" /> Today's Core Outputs</h2>
                    {tasks.filter(t => t.type === 'deep_work').map(t => (
                        <div key={t.id} className="task-item" onClick={() => toggleTask(t.id)}>
                            <input type="checkbox" className="checkbox" checked={t.completed} readOnly />
                            <span className="text-lg" style={{
                                textDecoration: t.completed ? 'line-through' : 'none',
                                color: t.completed ? 'var(--text-muted)' : 'var(--text-primary)',
                                transition: 'all 0.3s'
                            }}>
                                {t.title}
                            </span>
                        </div>
                    ))}

                    {isAddingTask ? (
                        <div className="task-item flex space-x-2 p-2">
                            <input
                                type="text"
                                className="input flex-1"
                                placeholder="Enter task description..."
                                value={newTaskTitle}
                                onChange={(e) => setNewTaskTitle(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
                                autoFocus
                            />
                            <button className="btn btn-primary" onClick={handleAddTask}><Plus size={16} /></button>
                            <button className="btn btn-outline border-none" onClick={() => setIsAddingTask(false)}><X size={16} /></button>
                        </div>
                    ) : (
                        <button className="btn btn-outline border-dashed w-full mt-4" style={{ border: '1px dashed var(--border-color)' }} onClick={() => setIsAddingTask(true)}>+ Add Output Block</button>
                    )}
                </div>

                <div className="card flex-col gap-6 glass-panel">
                    <h2 className="card-title text-xl mb-4"><Zap size={20} color="var(--warning)" /> Daily Operating Schedule</h2>
                    <div className="task-item" style={{ opacity: 0.5 }}>
                        <Clock size={18} /> <span className="text-lg">05:00 - Ignition & Deep Read</span> <span className="badge badge-success ml-auto shadow-sm">DONE</span>
                    </div>
                    <div className="task-item" style={{ opacity: 0.5 }}>
                        <Clock size={18} /> <span className="text-lg">07:00 - Family Business Ops</span> <span className="badge badge-success ml-auto shadow-sm">DONE</span>
                    </div>
                    <div className="task-item" style={{ borderColor: 'var(--accent-primary)', background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent)' }}>
                        <Clock size={18} color="var(--accent-primary)" /> <span className="text-lg font-bold" style={{ color: 'var(--accent-primary)' }}>08:00 - Deep Work 1: Customers</span> <span className="badge badge-info ml-auto shadow-sm" style={{ boxShadow: '0 0 8px rgba(59,130,246,0.3)' }}>CURRENT</span>
                    </div>
                    <div className="task-item border-dashed">
                        <Clock size={18} /> <span className="text-lg">11:00 - Deep Work 2: Validation</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

