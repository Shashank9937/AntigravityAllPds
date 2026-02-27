import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Lightbulb,
    PhoneCall,
    Calendar,
    Rocket,
    TrendingUp,
    BrainCircuit,
    Shield,
    Bot,
    Users,
    Wallet,
    Settings
} from 'lucide-react';

export const Sidebar = () => {
    const navItems = [
        { name: 'Execution Dashboard', path: '/', icon: <LayoutDashboard size={18} /> },
        { name: 'Idea Engine', path: '/ideas', icon: <Lightbulb size={18} /> },
        { name: 'Validation Tracker', path: '/validation', icon: <PhoneCall size={18} /> },
        { name: '12-Month Timeline', path: '/warplan', icon: <Calendar size={18} /> },
        { name: 'MVP Sprint', path: '/sprint', icon: <Rocket size={18} /> },
        { name: 'Growth Metrics', path: '/growth', icon: <TrendingUp size={18} /> },
        { name: 'Financials & Burn', path: '/financials', icon: <Wallet size={18} /> },
        { name: 'Network CRM', path: '/network', icon: <Users size={18} /> },
        { name: 'Decision Engine', path: '/decisions', icon: <BrainCircuit size={18} /> },
        { name: 'Discipline Log', path: '/discipline', icon: <Shield size={18} /> },
        { name: 'AI Automations', path: '/ai', icon: <Bot size={18} /> },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <Shield size={24} color="var(--accent-primary)" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' }} />
                FOUNDER OS
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', flex: 1, overflowY: 'auto' }}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        {item.icon}
                        {item.name}
                    </NavLink>
                ))}
                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        style={{ padding: '0.875rem 1.5rem' }}
                    >
                        <Settings size={18} />
                        Operating Settings
                    </NavLink>
                </div>
            </nav>
        </aside>
    );
};
