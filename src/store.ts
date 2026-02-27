import { create } from 'zustand';

interface Task {
    id: string;
    title: string;
    completed: boolean;
    type: 'deep_work' | 'admin' | 'customer';
}

interface Idea {
    id: string;
    name: string;
    painLevel: number; // 1-10
    tam: number; // 1-10
    ease: number; // 1-10
    score: number;
}

interface FounderState {
    tasks: Task[];
    ideas: Idea[];
    addTask: (task: Task) => void;
    toggleTask: (id: string) => void;
    addIdea: (idea: Idea) => void;
}

export const useStore = create<FounderState>((set) => ({
    tasks: [
        { id: '1', title: 'Deep Work Block 1: Customer Interviews', completed: false, type: 'deep_work' },
        { id: '2', title: 'Market Mapping: 5 Competitors', completed: false, type: 'deep_work' },
        { id: '3', title: 'Family Business Review', completed: true, type: 'admin' },
    ],
    ideas: [
        { id: '1', name: 'Biomass Tracking SaaS', painLevel: 8, tam: 9, ease: 4, score: 21 },
        { id: '2', name: 'Carbon Credit Verification', painLevel: 9, tam: 10, ease: 2, score: 21 }
    ],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    toggleTask: (id) => set((state) => ({
        tasks: state.tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    })),
    addIdea: (idea) => set((state) => ({ ideas: [...state.ideas, idea] }))
}));
