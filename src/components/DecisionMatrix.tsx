import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Activity, XCircle, CheckCircle } from 'lucide-react';

export const DecisionMatrix = () => {
    const [oppName, setOppName] = useState('');
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [evaluations, setEvaluations] = useState<{ name: string, score: number }[]>([]);

    const handleEvaluate = () => {
        if (!oppName.trim() || !q1 || !q2 || !q3) return;

        let score = 0;
        if (q1.includes('useful')) score += 1;
        if (q2.includes('massive')) score += 1;
        if (q3.includes('core')) score += 1;

        setEvaluations([{ name: oppName, score }, ...evaluations]);
        setOppName(''); setQ1(''); setQ2(''); setQ3('');
    };

    return (
        <div className="animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">Decision Matrix Engine</h1>
                <p className="page-description">High impact prioritization & 10-10-10 Filter.</p>
            </div>

            <div className="grid-cols-2 gap-6 pb-12">
                <div className="card h-full flex-col relative glass-panel mb-6" style={{ minHeight: '400px' }}>
                    <h2 className="card-title text-center absolute top-4 left-1/2 transform -translate-x-1/2">High Impact</h2>
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90 font-bold" style={{ color: 'var(--text-secondary)' }}>Low Priority</span>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 font-bold" style={{ color: 'var(--text-secondary)' }}>High Priority</span>
                    <h2 className="card-title text-center absolute bottom-4 left-1/2 transform -translate-x-1/2">Low Impact</h2>

                    <div className="grid-cols-2 gap-4 h-full p-8 mt-8 mb-8">
                        <div className="bg-tertiary rounded flex items-center justify-center p-4 border border-border" style={{ border: '1px dashed var(--accent-primary)', background: 'rgba(59, 130, 246, 0.05)' }}>
                            <div className="text-center">
                                <ArrowUpRight color="var(--accent-primary)" className="mx-auto mb-2" />
                                <strong className="text-primary block">DO NOW</strong>
                                <span className="text-secondary text-sm">Key Calls, Pilots</span>
                            </div>
                        </div>
                        <div className="bg-tertiary rounded flex items-center justify-center p-4 border border-border">
                            <div className="text-center">
                                <Activity color="var(--warning)" className="mx-auto mb-2" />
                                <strong className="text-primary block">SCHEDULE</strong>
                                <span className="text-secondary text-sm">Market Research, Decks</span>
                            </div>
                        </div>
                        <div className="bg-tertiary rounded flex items-center justify-center p-4 border border-border">
                            <div className="text-center">
                                <ArrowDownRight color="var(--success)" className="mx-auto mb-2" />
                                <strong className="text-primary block">DELEGATE</strong>
                                <span className="text-secondary text-sm">Logistics, Admin, Ops</span>
                            </div>
                        </div>
                        <div className="bg-tertiary rounded flex items-center justify-center p-4 border border-border" style={{ background: 'rgba(239, 68, 68, 0.05)' }}>
                            <div className="text-center">
                                <XCircle color="var(--danger)" className="mx-auto mb-2" />
                                <strong className="text-primary block" style={{ color: 'var(--danger)' }}>ELIMINATE</strong>
                                <span className="text-secondary text-sm">Tweaking sites, Meetings</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-col gap-6">
                    <div className="card flex-col gap-6 glass-panel mb-6">
                        <h2 className="card-title text-xl">10-10-10 Filter (Idea/Commitment Check)</h2>
                        <div className="flex-col gap-4">
                            <div>
                                <label className="metric-label" style={{ color: 'var(--text-primary)' }}>Opportunity Name</label>
                                <input type="text" className="input mt-1" placeholder="e.g. Partnering with XYZ corp" value={oppName} onChange={e => setOppName(e.target.value)} />
                            </div>
                            <div>
                                <label className="metric-label" style={{ color: 'var(--text-primary)' }}>1. In 10 DAYS, will I regret spending this week on it?</label>
                                <select className="input mt-1 dropdown" value={q1} onChange={e => setQ1(e.target.value)}>
                                    <option value="">Select...</option>
                                    <option value="useful">No, it's immediately useful</option>
                                    <option value="distraction">Yes, it's a distraction</option>
                                </select>
                            </div>
                            <div>
                                <label className="metric-label" style={{ color: 'var(--text-primary)' }}>2. In 10 MONTHS, will this matter if it works?</label>
                                <select className="input mt-1 dropdown" value={q2} onChange={e => setQ2(e.target.value)}>
                                    <option value="">Select...</option>
                                    <option value="massive">Yes, massive inflection point</option>
                                    <option value="marginal">No, marginal gain</option>
                                </select>
                            </div>
                            <div>
                                <label className="metric-label" style={{ color: 'var(--text-primary)' }}>3. In 10 YEARS, will this have been worth building?</label>
                                <select className="input mt-1 dropdown" value={q3} onChange={e => setQ3(e.target.value)}>
                                    <option value="">Select...</option>
                                    <option value="core">Yes, core to mission</option>
                                    <option value="irrelevant">No, irrelevant</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-primary mt-2 w-full" onClick={handleEvaluate} disabled={!oppName || !q1 || !q2 || !q3}>Evaluate & Store</button>
                    </div>

                    {evaluations.length > 0 && (
                        <div className="card glass-panel mb-6">
                            <h3 className="card-title mb-4">Recent Evaluations</h3>
                            <div className="flex-col gap-3">
                                {evaluations.map((ev, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 rounded" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                        <span>{ev.name}</span>
                                        <span className={`badge ${ev.score === 3 ? 'badge-success' : ev.score === 2 ? 'badge-info' : 'badge-danger'}`}>
                                            {ev.score === 3 ? 'F*CK YES' : ev.score === 2 ? 'MAYBE (WAIT)' : 'HELL NO'}
                                            ({ev.score}/3)
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="card glass-panel mt-6 mb-12">
                <h2 className="card-title text-xl mb-6">Mental OS: Core Thinking Frameworks</h2>
                <div className="grid-cols-3 gap-6">
                    <div className="flex-col gap-3 p-4 rounded bg-tertiary border border-border">
                        <strong className="text-primary text-lg">The Uncertainty Stack</strong>
                        <p className="text-secondary text-sm">Rank your top 3 uncertainties. Work always serves an uncertainty. If it doesn't, it's not the most important work.</p>
                        <textarea className="textarea mt-2" placeholder="1. Do customers understand the value prop?&#10;2. Can we acquire them profitably?&#10;3. Will they churn after 30 days?" style={{ minHeight: '120px' }}></textarea>
                    </div>

                    <div className="flex-col gap-3 p-4 rounded bg-tertiary border border-border">
                        <strong className="text-primary text-lg">The Reversibility Filter</strong>
                        <p className="text-secondary text-sm">Is this reversible in 30 days? If yes, make it immediately. If no, take 24 hours and write a one-page brief.</p>
                        <div className="flex-col gap-2 mt-2">
                            <input type="text" className="input" placeholder="Decision to make..." />
                            <div className="flex gap-2">
                                <button className="btn btn-outline" style={{ flex: 1, borderColor: 'var(--success)', color: 'var(--success)' }}>Yes (Act Now)</button>
                                <button className="btn btn-outline" style={{ flex: 1, borderColor: 'var(--danger)', color: 'var(--danger)' }}>No (Write Brief)</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col gap-3 p-4 rounded bg-tertiary border border-border">
                        <strong className="text-primary text-lg">The Narrative Test</strong>
                        <p className="text-secondary text-sm">Explain what you do, for whom, and why it matters — without using your product's name.</p>
                        <textarea className="textarea mt-2" placeholder="We help operations managers eliminate supply chain blind spots so their factory floor never stalls due to delayed cargo..." style={{ minHeight: '120px' }}></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};
