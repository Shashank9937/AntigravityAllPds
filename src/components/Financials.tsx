import React, { useState } from 'react';
import { DollarSign, Wallet, Activity, TrendingDown } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Financials = () => {
    const [bankBalance, setBankBalance] = useState(150000);
    const [monthlyBurn, setMonthlyBurn] = useState(8500);
    const [isRecording, setIsRecording] = useState(false);
    const [expenseAmount, setExpenseAmount] = useState('');

    const runwayMonths = Math.floor(bankBalance / monthlyBurn);

    const handleRecord = () => {
        if (expenseAmount && !isNaN(Number(expenseAmount))) {
            setBankBalance(prev => prev - Number(expenseAmount));
            setExpenseAmount('');
            setIsRecording(false);
        }
    };

    const data = [
        { month: 'Jan', burn: 4000, balance: 180000 },
        { month: 'Feb', burn: 5500, balance: 174500 },
        { month: 'Mar', burn: 7000, balance: 167500 },
        { month: 'Apr', burn: 7800, balance: 159700 },
        { month: 'May', burn: 8500, balance: 150000 },
        { month: 'Jun', burn: 8500, balance: 141500 }, // Projected
    ];

    return (
        <div className="animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">Financials & Runway</h1>
                <p className="page-description">Burn rate tracker and cashflow predictability.</p>
            </div>

            <div className="grid-cols-4 mb-6">
                <div className="card metric-card glass-panel" style={{ borderTop: '3px solid var(--accent-primary)' }}>
                    <span className="metric-label flex items-center gap-2"><DollarSign size={14} /> Total Cash ($)</span>
                    <span className="metric-val text-primary" style={{ color: 'white' }}>{bankBalance.toLocaleString()}</span>
                </div>
                <div className="card metric-card glass-panel" style={{ borderTop: '3px solid var(--danger)' }}>
                    <span className="metric-label flex items-center gap-2"><TrendingDown size={14} /> Monthly Burn ($)</span>
                    <span className="metric-val text-primary" style={{ color: 'var(--danger)' }}>{monthlyBurn.toLocaleString()}</span>
                </div>
                <div className="card metric-card glass-panel" style={{ borderTop: '3px solid var(--warning)' }}>
                    <span className="metric-label flex items-center gap-2"><Activity size={14} /> Runway remaining</span>
                    <span className="metric-val text-primary" style={{ color: 'var(--warning)' }}>{runwayMonths} <span style={{ fontSize: '1rem' }}>months</span></span>
                </div>
                <div className="card metric-card glass-panel flex-col justify-center items-center gap-2">
                    {isRecording ? (
                        <div className="flex w-full gap-2 transition-all">
                            <input type="number" className="input flex-1" style={{ padding: '0.5rem', fontSize: '0.9rem' }} placeholder="Amount $" value={expenseAmount} onChange={e => setExpenseAmount(e.target.value)} autoFocus onKeyDown={(e) => e.key === 'Enter' && handleRecord()} />
                            <button className="btn btn-primary px-3" onClick={handleRecord}>Save</button>
                            <button className="btn btn-outline px-3 border-none" onClick={() => setIsRecording(false)}>Cancel</button>
                        </div>
                    ) : (
                        <button className="btn btn-primary w-full" onClick={() => setIsRecording(true)} style={{ background: 'linear-gradient(135deg, var(--success), #047857)' }}>Record Expense</button>
                    )}
                </div>
            </div>

            <div className="card glass-panel mb-6 h-[400px]">
                <h2 className="card-title mb-6"><Wallet size={18} color="var(--accent-primary)" /> Cash & Burn Trajectory</h2>
                <div style={{ width: '100%', height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorBurn" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="month" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" vertical={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'rgba(13,13,13,0.9)', borderColor: 'var(--border-color)', borderRadius: '8px', color: '#fff' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Area type="monotone" dataKey="balance" stroke="#3b82f6" fillOpacity={1} fill="url(#colorBalance)" />
                            <Area type="monotone" dataKey="burn" stroke="#ef4444" fillOpacity={1} fill="url(#colorBurn)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};
