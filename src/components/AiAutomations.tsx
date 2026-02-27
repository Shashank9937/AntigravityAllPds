import React, { useState } from 'react';
import { Bot, Copy, Sparkles, TerminalSquare } from 'lucide-react';

export const AiAutomations = () => {
    const [copied, setCopied] = useState<number | null>(null);

    const prompts = [
        { title: 'Investor Outreach Pattern', description: 'Creates custom email based on fund thesis.', text: 'Act as a Series A fund analyst. Review my company bio and this specific VC fund thesis. Draft a 4-line email directly to the managing partner highlighting the alignment on B2B logistics moats. Tone: blunt, data-driven, founder-level authority.' },
        { title: 'Market Sizing Bottom-Up', description: 'Extracts real numbers from qualitative assumptions.', text: 'Using a bottom-up methodology, calculate the TAM for a biomass compliance SaaS in India. The proxy metric is: Any factory burning >1,000 tons of coal annually. List variables, conversion rates, and the mathematical formula. Avoid top-down consultant numbers.' },
        { title: 'Objection Handling Simulator', description: 'Prepares for sales calls with ops managers.', text: 'Roleplay as a stressed factory procurement manager in Gujarat. I am pitching a software that tracks supplier trust. Your goal is to reject me based on: implementation time, hidden costs, and team training. I will reply to you. Let us do a 5-turn simulation.' }
    ];

    const handleCopy = (txt: string, i: number) => {
        navigator.clipboard.writeText(txt);
        setCopied(i);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">AI Leverage Hub</h1>
                <p className="page-description">Standardized intelligence workflows. Don't do manual labor twice.</p>
            </div>

            <div className="grid-cols-3 mb-6">
                <div className="card metric-card">
                    <span className="metric-label flex items-center gap-2"><Sparkles size={14} /> Hours Saved by AI</span>
                    <span className="metric-val text-primary">14<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}> hrs/wk</span></span>
                </div>
                <div className="card metric-card">
                    <span className="metric-label flex items-center gap-2"><TerminalSquare size={14} /> Saved Workflows</span>
                    <span className="metric-val text-primary">8</span>
                </div>
                <div className="card metric-card" style={{ border: '1px dashed var(--accent-primary)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="text-primary font-bold"><Bot size={18} className="inline mr-2" /> Build Custom Bot</span>
                </div>
            </div>

            <div className="grid-cols-2 gap-6">
                <div className="flex-col gap-6">
                    <h2 className="card-title">Prompt Library (Execution Grade)</h2>
                    {prompts.map((p, i) => (
                        <div key={i} className="card p-4 bg-tertiary border-border hover:border-accent transition-colors" style={{ borderColor: 'var(--border-color)', transition: 'all 0.2s' }}>
                            <h3 className="text-primary font-bold mb-1 flex items-center justify-between">
                                {p.title}
                                <button
                                    onClick={() => handleCopy(p.text, i)}
                                    className="btn btn-outline"
                                    style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', borderColor: copied === i ? 'var(--success)' : '' }}
                                >
                                    {copied === i ? <CheckCircle2 size={14} color="var(--success)" /> : <Copy size={14} />} {copied === i ? 'Copied' : 'Copy'}
                                </button>
                            </h3>
                            <p className="text-secondary text-sm mb-3">{p.description}</p>
                            <div className="bg-primary p-3 rounded text-sm text-muted" style={{ fontFamily: 'monospace', fontSize: '0.8rem', background: '#000' }}>
                                {p.text}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card h-full flex-col gap-4">
                    <h2 className="card-title"><Bot size={18} color="var(--accent-primary)" /> Automated Analysis Workflows</h2>
                    <div className="flex items-center gap-4 p-4 border border-border rounded" style={{ background: 'var(--bg-tertiary)' }}>
                        <div className="bg-primary rounded p-2"><TerminalSquare size={20} color="var(--success)" /></div>
                        <div>
                            <strong className="block">Call Transcript Extractor</strong>
                            <span className="text-secondary text-sm">Upload raw customer calls &rarr; Outputs structured Pain, WTP, Objections</span>
                        </div>
                        <button className="btn btn-outline ml-auto text-xs">Run Workflow</button>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-border rounded" style={{ background: 'var(--bg-tertiary)' }}>
                        <div className="bg-primary rounded p-2"><TerminalSquare size={20} color="var(--accent-primary)" /></div>
                        <div>
                            <strong className="block">Competitor Web Scraper Script</strong>
                            <span className="text-secondary text-sm">Monitors 3 main competitors for pricing changes and new case studies</span>
                        </div>
                        <button className="btn btn-outline ml-auto text-xs">Run Workflow</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CheckCircle2 = ({ size, color }: { size: number, color: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
