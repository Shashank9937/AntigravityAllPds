import React from 'react';
import { ArrowUpRight, ArrowDownRight, Activity, XCircle } from 'lucide-react';

export const DecisionMatrix = () => {
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Decision Matrix Engine</h1>
                <p className="page-description">High impact prioritization & 10-10-10 Filter.</p>
            </div>

            <div className="grid-cols-2 gap-6 h-[500px]">
                <div className="card h-full flex-col relative" style={{ minHeight: '400px' }}>
                    <h2 className="card-title text-center absolute top-4 left-1/2 transform -translate-x-1/2">High Impact</h2>
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90 font-bold" style={{ color: 'var(--text-secondary)' }}>Low Priority</span>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 font-bold" style={{ color: 'var(--text-secondary)' }}>High Priority</span>
                    <h2 className="card-title text-center absolute bottom-4 left-1/2 transform -translate-x-1/2">Low Impact</h2>

                    <div className="grid-cols-2 gap-4 h-full p-8">
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

                <div className="card flex-col gap-6">
                    <h2 className="card-title">10-10-10 Filter (Idea/Commitment Check)</h2>
                    <div className="flex-col gap-4">
                        <div>
                            <label className="metric-label" style={{ color: 'var(--text-primary)' }}>Opportunity Name</label>
                            <input type="text" className="input mt-1" placeholder="e.g. Partnering with XYZ corp" />
                        </div>
                        <div>
                            <label className="metric-label" style={{ color: 'var(--text-primary)' }}>1. In 10 DAYS, will I regret spending this week on it?</label>
                            <select className="input mt-1">
                                <option>Select...</option>
                                <option>No, it's immediately useful</option>
                                <option>Yes, it's a distraction</option>
                            </select>
                        </div>
                        <div>
                            <label className="metric-label" style={{ color: 'var(--text-primary)' }}>2. In 10 MONTHS, will this matter if it works?</label>
                            <select className="input mt-1">
                                <option>Select...</option>
                                <option>Yes, massive inflection point</option>
                                <option>No, marginal gain</option>
                            </select>
                        </div>
                        <div>
                            <label className="metric-label" style={{ color: 'var(--text-primary)' }}>3. In 10 YEARS, will this have been worth building?</label>
                            <select className="input mt-1">
                                <option>Select...</option>
                                <option>Yes, core to mission</option>
                                <option>No, irrelevant</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-outline mt-auto w-full">Evaluate & Store</button>
                </div>
            </div>
        </div>
    );
};
