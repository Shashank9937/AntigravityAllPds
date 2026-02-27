import React, { useState } from 'react';
import { Phone, CheckCircle, Clock, Plus, X } from 'lucide-react';

export const ValidationTracker = () => {
    const [logs, setLogs] = useState([
        { id: '1', date: 'Oct 12', company: 'Agri-Corp Biomass Hub', role: 'Ops Manager', pain: 'High', objection: 'Price of switching, training', wtp: 'LOI Sent' },
        { id: '2', date: 'Oct 11', company: 'Green Energy Systems', role: 'Founder', pain: 'Medium', objection: 'Not a top 3 priority right now', wtp: 'No' },
        { id: '3', date: 'Oct 10', company: 'Sustainable Carbon Co.', role: 'Procurement', pain: 'High', objection: 'Compliance tracking is a nightmare', wtp: 'Testing' }
    ]);

    const [isAdding, setIsAdding] = useState(false);
    const [newLog, setNewLog] = useState({ date: 'Today', company: '', role: '', pain: 'High', objection: '', wtp: 'Testing' });

    const handleAdd = () => {
        if (newLog.company.trim()) {
            setLogs([{ id: String(Date.now()), ...newLog }, ...logs]);
            setNewLog({ date: 'Today', company: '', role: '', pain: 'High', objection: '', wtp: 'Testing' });
            setIsAdding(false);
        }
    };

    return (
        <div className="animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">Validation Engine</h1>
                <p className="page-description">Talk to customers. Measure willingness to pay.</p>
            </div>

            <div className="grid-cols-3 mb-6">
                <div className="card metric-card glass-panel">
                    <span className="metric-label">Calls Target</span>
                    <span className="metric-val text-primary">{2 + logs.length} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/ 40</span></span>
                    <div className="progress-bar mt-4"><div className="progress-fill" style={{ width: `${((2 + logs.length) / 40) * 100}%` }}></div></div>
                </div>
                <div className="card metric-card glass-panel">
                    <span className="metric-label">LOIs Signed</span>
                    <span className="metric-val text-primary" style={{ color: 'var(--success)' }}>{logs.filter(l => l.wtp.includes('LOI')).length} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/ 5</span></span>
                </div>
                <div className="card metric-card glass-panel">
                    <span className="metric-label">Pipeline Conversion</span>
                    <span className="metric-val text-primary">{Math.round((logs.filter(l => l.wtp.includes('LOI')).length / Math.max(logs.length, 1)) * 100)}%</span>
                </div>
            </div>

            <div className="card glass-panel">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="card-title mb-0"><Phone size={18} color="var(--accent-primary)" /> Customer Conversation Logs</h2>
                    <button className="btn btn-primary" onClick={() => setIsAdding(true)}>+ Log Interview</button>
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Company / Prospect</th>
                                <th>Role</th>
                                <th>Pain Level</th>
                                <th>Objection Pattern</th>
                                <th>WTP?</th>
                                {isAdding && <th>Action</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {isAdding && (
                                <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                                    <td><input type="text" className="input inline-input" style={{ width: '70px' }} value={newLog.date} onChange={e => setNewLog({ ...newLog, date: e.target.value })} /></td>
                                    <td><input type="text" className="input inline-input" placeholder="Company..." value={newLog.company} onChange={e => setNewLog({ ...newLog, company: e.target.value })} autoFocus /></td>
                                    <td><input type="text" className="input inline-input" style={{ width: '100px' }} placeholder="Role..." value={newLog.role} onChange={e => setNewLog({ ...newLog, role: e.target.value })} /></td>
                                    <td>
                                        <select className="input inline-input dropdown" value={newLog.pain} onChange={e => setNewLog({ ...newLog, pain: e.target.value })}>
                                            <option value="Low">Low</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                        </select>
                                    </td>
                                    <td><input type="text" className="input inline-input" placeholder="Key objection..." value={newLog.objection} onChange={e => setNewLog({ ...newLog, objection: e.target.value })} /></td>
                                    <td>
                                        <select className="input inline-input dropdown" value={newLog.wtp} onChange={e => setNewLog({ ...newLog, wtp: e.target.value })}>
                                            <option value="No">No</option>
                                            <option value="Testing">Testing</option>
                                            <option value="LOI Sent">LOI Sent</option>
                                            <option value="Paid">Paid</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div className="flex gap-2">
                                            <button className="btn btn-primary" style={{ padding: '0.25rem' }} onClick={handleAdd}><CheckCircle size={16} /></button>
                                            <button className="btn btn-outline" style={{ padding: '0.25rem' }} onClick={() => setIsAdding(false)}><X size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                            {logs.map((log) => (
                                <tr key={log.id}>
                                    <td style={{ color: 'var(--text-secondary)' }}>{log.date}</td>
                                    <td style={{ fontWeight: 600 }}>{log.company}</td>
                                    <td style={{ color: 'var(--text-secondary)' }}>{log.role}</td>
                                    <td><span className={`badge ${log.pain === 'High' ? 'badge-danger' : log.pain === 'Medium' ? 'badge-warning' : 'badge-info'}`}>{log.pain}</span></td>
                                    <td>{log.objection}</td>
                                    <td><span className={`badge ${log.wtp === 'No' ? 'badge-danger' : log.wtp === 'Testing' ? 'badge-warning' : 'badge-success'}`}>{log.wtp}</span></td>
                                    {isAdding && <td></td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
