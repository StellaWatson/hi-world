export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio: string;
  title: string;
  location: string;
  github: string;
  linkedin: string;
  website: string;
  skills: string[];
  followers: number;
  following: number;
  projectCount: number;
  joinedAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  text: string;
  createdAt: string;
}

export interface Post {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  avatar: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  challenges: string;
  githubLink: string;
  liveLink: string;
  likes: number;
  comments: Comment[];
  liked: boolean;
  createdAt: string;
}

export const mockUser: User = {
  id: "1",
  username: "alexdev",
  displayName: "Alex Chen",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
  bio: "Full-stack developer passionate about building products that matter. Currently diving deep into AI/ML and cloud architecture.",
  title: "Full-Stack Developer",
  location: "San Francisco, CA",
  github: "alexdev",
  linkedin: "alexchen",
  website: "alexchen.dev",
  skills: ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"],
  followers: 1247,
  following: 342,
  projectCount: 18,
  joinedAt: "2024-03-15",
};

export const mockPosts: Post[] = [
  {
    id: "1",
    userId: "1",
    username: "alexdev",
    displayName: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    title: "AI-Powered Code Review Bot",
    description: "Built a GitHub bot that automatically reviews PRs using GPT-4. It analyzes code quality, suggests improvements, and catches potential bugs before human review. Reduced our team's review time by 40%.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    tools: ["Python", "OpenAI API", "GitHub Actions", "FastAPI"],
    challenges: "The hardest part was handling rate limits from the OpenAI API while keeping the bot responsive. Implemented a queue system with Redis.",
    githubLink: "https://github.com/alexdev/ai-code-review",
    liveLink: "https://ai-review.dev",
    likes: 234,
    comments: [
      { id: "c1", userId: "2", username: "sarahcodes", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop", text: "This is incredible! How do you handle large PRs with many files?", createdAt: "2h ago" },
      { id: "c2", userId: "3", username: "devmax", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=50&h=50&fit=crop", text: "Great architecture choice with the queue system 🔥", createdAt: "4h ago" },
    ],
    liked: false,
    createdAt: "6h ago",
  },
  {
    id: "2",
    userId: "2",
    username: "sarahcodes",
    displayName: "Sarah Kim",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    title: "Real-Time Collaborative Whiteboard",
    description: "A Figma-like whiteboard app with real-time collaboration. Supports drawing, sticky notes, and live cursors. Built with WebSockets for instant sync across all connected users.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop",
    tools: ["React", "TypeScript", "Socket.io", "Canvas API", "PostgreSQL"],
    challenges: "Conflict resolution when multiple users edit the same element simultaneously. Implemented CRDTs for seamless merging.",
    githubLink: "https://github.com/sarahcodes/collab-board",
    liveLink: "https://collabboard.app",
    likes: 189,
    comments: [
      { id: "c3", userId: "1", username: "alexdev", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop", text: "CRDTs are the way to go! Have you looked into Yjs?", createdAt: "1h ago" },
    ],
    liked: true,
    createdAt: "12h ago",
  },
  {
    id: "3",
    userId: "4",
    username: "ryanbuilds",
    displayName: "Ryan Patel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    title: "CLI Task Manager with AI Prioritization",
    description: "A terminal-based task manager that uses AI to auto-prioritize your tasks based on deadlines, dependencies, and your work patterns. Integrates with GitHub Issues and Jira.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=500&fit=crop",
    tools: ["Rust", "OpenAI", "SQLite", "Crossterm"],
    challenges: "Building a responsive TUI in Rust was challenging. Used crossterm for cross-platform terminal manipulation.",
    githubLink: "https://github.com/ryanbuilds/ai-tasks",
    liveLink: "",
    likes: 156,
    comments: [],
    liked: false,
    createdAt: "1d ago",
  },
  {
    id: "4",
    userId: "5",
    username: "emmatech",
    displayName: "Emma Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    title: "Microservices Monitoring Dashboard",
    description: "Built a real-time monitoring dashboard for microservices architecture. Visualizes service health, request latency, error rates, and inter-service communication patterns.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tools: ["Next.js", "D3.js", "Prometheus", "Grafana", "Go"],
    challenges: "Handling high-frequency data updates without causing excessive re-renders. Used virtualization and WebGL for smooth rendering.",
    githubLink: "https://github.com/emmatech/service-monitor",
    liveLink: "https://servicemonitor.io",
    likes: 312,
    comments: [
      { id: "c4", userId: "2", username: "sarahcodes", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop", text: "The D3 visualizations are stunning! Would love a tutorial.", createdAt: "3h ago" },
      { id: "c5", userId: "4", username: "ryanbuilds", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop", text: "This is production-ready quality. Impressive!", createdAt: "5h ago" },
    ],
    liked: true,
    createdAt: "2d ago",
  },
];
