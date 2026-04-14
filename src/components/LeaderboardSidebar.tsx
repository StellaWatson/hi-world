import { Trophy, TrendingUp, Flame } from "lucide-react";

const topDevs = [
  { rank: 1, name: "Emma Rodriguez", username: "emmatech", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop", score: 847 },
  { rank: 2, name: "Alex Chen", username: "alexdev", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop", score: 723 },
  { rank: 3, name: "Sarah Kim", username: "sarahcodes", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop", score: 612 },
  { rank: 4, name: "Ryan Patel", username: "ryanbuilds", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop", score: 498 },
  { rank: 5, name: "Maya Johnson", username: "mayaj", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop", score: 451 },
];

const trendingTools = ["React", "Rust", "TypeScript", "Go", "OpenAI", "Docker", "Next.js", "Python"];

export function LeaderboardSidebar() {
  return (
    <aside className="space-y-6">
      {/* Leaderboard */}
      <div className="bg-card rounded-2xl border border-border/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-primary" />
          <h3 className="font-mono font-bold text-sm">Leaderboard</h3>
        </div>
        <div className="space-y-3">
          {topDevs.map((dev) => (
            <div key={dev.rank} className="flex items-center gap-3 p-2 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer">
              <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                dev.rank === 1 ? "bg-primary/20 text-primary" :
                dev.rank === 2 ? "bg-muted text-muted-foreground" :
                dev.rank === 3 ? "bg-primary/10 text-primary/70" :
                "text-muted-foreground"
              }`}>
                {dev.rank}
              </span>
              <img src={dev.avatar} alt="" className="w-8 h-8 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{dev.name}</p>
                <p className="text-xs text-muted-foreground font-mono">@{dev.username}</p>
              </div>
              <span className="text-xs font-mono text-primary font-bold">{dev.score}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="bg-card rounded-2xl border border-border/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Flame className="w-5 h-5 text-primary" />
          <h3 className="font-mono font-bold text-sm">Trending Tools</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {trendingTools.map((tool) => (
            <span key={tool} className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer transition-colors">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-hero rounded-2xl border border-primary/20 p-5 text-center">
        <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
        <h4 className="font-mono font-bold text-sm mb-1">Escape Tutorial Hell</h4>
        <p className="text-xs text-muted-foreground">Share your projects, get feedback, and build your real portfolio.</p>
      </div>
    </aside>
  );
}
