import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Activity, BarChart3 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export const GrowthMetrics = () => {
    const [cac, setCac] = useState(150);
    const [arpu, setArpu] = useState(300);
    const [ltMonths, setLtMonths] = useState(24);

    const ltv = arpu * ltMonths;
    const ratio = Math.round(ltv / Math.max(cac, 1));

    const data = [
        { month: 'Jul', mrr: 1200, users: 4 },
        { month: 'Aug', mrr: 2100, users: 7 },
        { month: 'Sep', mrr: 2800, users: 10 },
        { month: 'Oct', mrr: 3600, users: 12 },
        { month: 'Nov', mrr: 4100, users: 14 },
        { month: 'Dec', mrr: 4500, users: 15 },
    ];

    return (
        <div className="animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">Growth & Traction Engine</h1>
                <p className="page-description">Traction, revenue, and retention dashboards. Data over emotion.</p>
            </div>

            <div className="grid-cols-4 mb-6">
                <div className="card metric-card glass-panel">
                    <span className="metric-label flex items-center gap-2"><DollarSign size={14} /> MRR</span>
                    <span className="metric-val text-primary">$4,500</span>
                    <span className="text-success mt-2 flex items-center gap-1 font-bold text-sm"><TrendingUp size={14} /> +12% MoM</span>
                </div>
                <div className="card metric-card glass-panel">
                    <span className="metric-label flex items-center gap-2"><Users size={14} /> Paying Customers</span>
                    <span className="metric-val text-primary">15</span>
                    <span className="text-success mt-2 flex items-center gap-1 font-bold text-sm"><TrendingUp size={14} /> +2</span>
                </div>
                <div className="card metric-card glass-panel">
                    <span className="metric-label flex items-center gap-2"><Activity size={14} /> Net Logo Churn</span>
                    <span className="metric-val text-primary">0%</span>
                    <span className="text-muted mt-2 flex items-center gap-1 font-bold text-sm">Stable Baseline</span>
                </div>
                <div className="card metric-card glass-panel">
                    <span className="metric-label flex items-center gap-2"><BarChart3 size={14} /> LTV to CAC Ratio</span>
                    <span className="metric-val text-primary">1 : {Math.round(ratio)}</span>
                    <span className="text-success mt-2 flex items-center gap-1 font-bold text-sm">Exceptional Efficiency</span>
                </div>
            </div>

            <div className="grid-cols-2 gap-6 mb-6">
                <div className="card glass-panel">
                    <h2 className="card-title mb-6"><TrendingUp size={18} color="var(--success)" /> MRR Velocity</h2>
                    <div style={{ width: '100%', height: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" vertical={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'rgba(13,13,13,0.9)', borderColor: 'var(--border-color)', borderRadius: '8px', color: '#fff' }}
                                    itemStyle={{ color: '#10b981' }}
                                    formatter={(value: any) => [`$${value}`, 'MRR']}
                                />
                                <Area type="monotone" dataKey="mrr" stroke="#10b981" fillOpacity={1} fill="url(#colorMrr)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card glass-panel">
                    <h2 className="card-title mb-6"><Users size={18} color="var(--accent-primary)" /> Customer Growth</h2>
                    <div style={{ width: '100%', height: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <XAxis dataKey="month" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" vertical={false} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    contentStyle={{ backgroundColor: 'rgba(13,13,13,0.9)', borderColor: 'var(--border-color)', borderRadius: '8px', color: '#fff' }}
                                    itemStyle={{ color: '#3b82f6' }}
                                />
                                <Bar dataKey="users" fill="var(--accent-primary)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="card glass-panel mt-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="card-title mb-0">Unit Economics Calculator</h2>
                </div>
                <div className="grid-cols-3 gap-6">
                    <div className="flex-col gap-2">
                        <label className="metric-label text-primary">Customer Acquisition Cost ($)</label>
                        <input type="number" className="input" value={cac} onChange={e => setCac(Number(e.target.value))} />
                    </div>
                    <div className="flex-col gap-2">
                        <label className="metric-label text-primary">Avg Monthly Revenue per User ($)</label>
                        <input type="number" className="input" value={arpu} onChange={e => setArpu(Number(e.target.value))} />
                    </div>
                    <div className="flex-col gap-2">
                        <label className="metric-label text-primary">Expected Lifetime (Months)</label>
                        <input type="number" className="input" value={ltMonths} onChange={e => setLtMonths(Number(e.target.value))} />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-8 p-6 rounded-lg" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                    <span className="font-bold text-success text-xl">Estimated LTV: ${ltv.toLocaleString()}</span>
                    <span className="font-bold text-success text-xl">LTV:CAC Ratio: {ratio}:1</span>
                </div>
            </div>
        </div>
    );
};
