import React, { useState } from 'react';
import { Users, Filter, Plus, Mail, MessageSquare, Check, X } from 'lucide-react';

export const NetworkCRM = () => {
    const [contacts, setContacts] = useState([
        { id: '1', name: 'Rajeev Sharma', role: 'Partner, Sequoia India', status: 'Warm', lastContact: '2 days ago', priority: 'High' },
        { id: '2', name: 'Anita Patel', role: 'VP Ops, Adani Green', status: 'Active Dialogue', lastContact: '1 week ago', priority: 'Critical' },
        { id: '3', name: 'Dr. Michael Chen', role: 'Biomass Expert, MIT', status: 'Cold Outreach', lastContact: '3 weeks ago', priority: 'Medium' }
    ]);

    const [isAdding, setIsAdding] = useState(false);
    const [newContact, setNewContact] = useState({ name: '', role: '', status: 'Cold Outreach', priority: 'Low' });

    const handleAdd = () => {
        if (newContact.name.trim()) {
            setContacts([{ ...newContact, id: String(Date.now()), lastContact: 'Just now' }, ...contacts]);
            setNewContact({ name: '', role: '', status: 'Cold Outreach', priority: 'Low' });
            setIsAdding(false);
        }
    };

    return (
        <div className="animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">Network CRM</h1>
                <p className="page-description">Your rolodex. Investors, talent, and domain experts.</p>
            </div>

            <div className="grid-cols-4 mb-6">
                <div className="card metric-card glass-panel">
                    <span className="metric-label flex items-center gap-2"><Users size={14} /> Total Connections</span>
                    <span className="metric-val text-primary">{142 + contacts.length}</span>
                </div>
                <div className="card metric-card glass-panel">
                    <span className="metric-label flex items-center gap-2">Investor Pipeline</span>
                    <span className="metric-val text-primary" style={{ color: 'var(--accent-secondary)' }}>12</span>
                </div>
                <div className="card metric-card glass-panel">
                    <span className="metric-label flex items-center gap-2">Key Hires (Target)</span>
                    <span className="metric-val text-primary">3</span>
                </div>
            </div>

            <div className="card glass-panel">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="card-title mb-0"><Users size={18} color="var(--accent-secondary)" /> Key Relationships</h2>
                    <div className="flex gap-4">
                        <button className="btn btn-outline"><Filter size={16} /> Filter</button>
                        <button className="btn btn-primary" onClick={() => setIsAdding(true)} style={{ background: 'linear-gradient(135deg, var(--accent-secondary), var(--accent-primary))' }}><Plus size={16} /> Add Contact</button>
                    </div>
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name / Organization</th>
                                <th>Relevance / Role</th>
                                <th>Status</th>
                                <th>Last Touch</th>
                                <th>Priority</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isAdding && (
                                <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                                    <td>
                                        <input type="text" className="input inline-input" placeholder="Name" value={newContact.name} onChange={e => setNewContact({ ...newContact, name: e.target.value })} autoFocus />
                                    </td>
                                    <td>
                                        <input type="text" className="input inline-input" placeholder="Role/Org" value={newContact.role} onChange={e => setNewContact({ ...newContact, role: e.target.value })} />
                                    </td>
                                    <td>
                                        <select className="input inline-input dropdown" value={newContact.status} onChange={e => setNewContact({ ...newContact, status: e.target.value })}>
                                            <option value="Cold Outreach">Cold Outreach</option>
                                            <option value="Warm">Warm</option>
                                            <option value="Active Dialogue">Active</option>
                                        </select>
                                    </td>
                                    <td>Just now</td>
                                    <td>
                                        <select className="input inline-input dropdown" value={newContact.priority} onChange={e => setNewContact({ ...newContact, priority: e.target.value })}>
                                            <option value="Low">Low</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                            <option value="Critical">Critical</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div className="flex gap-2">
                                            <button className="btn btn-primary" style={{ padding: '0.25rem' }} onClick={handleAdd}><Check size={16} /></button>
                                            <button className="btn btn-outline" style={{ padding: '0.25rem' }} onClick={() => setIsAdding(false)}><X size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                            {contacts.map(c => (
                                <tr key={c.id}>
                                    <td>
                                        <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{c.name}</div>
                                    </td>
                                    <td style={{ color: 'var(--text-secondary)' }}>{c.role}</td>
                                    <td>
                                        <span className={`badge ${c.status === 'Warm' ? 'badge-info' : c.status === 'Active Dialogue' || c.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>
                                            {c.status}
                                        </span>
                                    </td>
                                    <td>{c.lastContact}</td>
                                    <td>
                                        <span style={{ color: c.priority === 'Critical' ? 'var(--danger)' : c.priority === 'High' ? 'var(--warning)' : 'var(--text-secondary)' }}>
                                            {c.priority}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="flex gap-2">
                                            <button className="btn btn-outline" style={{ padding: '0.25rem', border: 'none', background: 'rgba(255,255,255,0.05)' }}><Mail size={16} /></button>
                                            <button className="btn btn-outline" style={{ padding: '0.25rem', border: 'none', background: 'rgba(255,255,255,0.05)' }}><MessageSquare size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
