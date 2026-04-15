import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Trophy, Medal, Crown, Search, Bell, TrendingUp, Flame } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Emma Rodriguez", username: "emmatech", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop", points: 2847, projects: 24, followers: 3200 },
  { rank: 2, name: "Alex Chen", username: "alexdev", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop", points: 2723, projects: 18, followers: 2800 },
  { rank: 3, name: "Sarah Kim", username: "sarahcodes", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop", points: 2612, projects: 21, followers: 2400 },
  { rank: 4, name: "Ryan Patel", username: "ryanbuilds", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop", points: 2498, projects: 15, followers: 1900 },
  { rank: 5, name: "Maya Johnson", username: "mayaj", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop", points: 2451, projects: 19, followers: 1700 },
  { rank: 6, name: "Max Turner", username: "devmax", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=150&h=150&fit=crop", points: 2100, projects: 12, followers: 1500 },
  { rank: 7, name: "Lisa Wang", username: "lisacodes", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop", points: 1980, projects: 14, followers: 1400 },
  { rank: 8, name: "James Lee", username: "jamesdev", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop", points: 1850, projects: 11, followers: 1200 },
];

const rewards = [
  { place: "1st", amount: 250, color: "text-primary" },
  { place: "2nd", amount: 200, color: "text-muted-foreground" },
  { place: "3rd", amount: 150, color: "text-primary/70" },
  { place: "4th", amount: 100, color: "text-muted-foreground" },
  { place: "5th", amount: 75, color: "text-muted-foreground" },
];

export default function Leaderboard() {
  const [period, setPeriod] = useState<"monthly" | "alltime">("monthly");
  const top3 = leaderboardData.slice(0, 3);
  const rest = leaderboardData.slice(3);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-40 glass border-b border-border/30">
          <div className="flex items-center gap-4 px-4 lg:px-8 h-16">
            <h1 className="font-mono font-bold text-lg">Leaderboard</h1>
            <div className="ml-auto flex items-center gap-2">
              <button className="relative p-2.5 rounded-xl hover:bg-secondary transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
              </button>
              <Link to="/profile" className="w-9 h-9 rounded-xl overflow-hidden border-2 border-border/50">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop" alt="Profile" className="w-full h-full object-cover" />
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-6">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-8">
            <div>
              {/* Podium */}
              <div className="bg-card rounded-2xl border border-border/50 p-8 mb-6">
                <div className="flex items-center justify-center gap-8 mb-8">
                  {/* 2nd place */}
                  <div className="text-center">
                    <img src={top3[1].avatar} alt={top3[1].name} className="w-20 h-20 rounded-2xl object-cover mx-auto mb-2 border-2 border-border/50" />
                    <p className="font-mono font-bold text-sm">{top3[1].name.split(' ')[0]}</p>
                    <span className="inline-block mt-1 px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground">{top3[1].points.toLocaleString()} pts</span>
                    <div className="mt-3 w-20 h-24 rounded-t-xl bg-gradient-to-b from-muted to-secondary mx-auto flex items-center justify-center">
                      <span className="font-mono font-bold text-2xl text-muted-foreground">2</span>
                    </div>
                  </div>

                  {/* 1st place */}
                  <div className="text-center -mt-6">
                    <Crown className="w-8 h-8 text-primary mx-auto mb-2" />
                    <img src={top3[0].avatar} alt={top3[0].name} className="w-24 h-24 rounded-2xl object-cover mx-auto mb-2 border-2 border-primary/50 shadow-glow" />
                    <p className="font-mono font-bold text-sm">{top3[0].name.split(' ')[0]}</p>
                    <span className="inline-block mt-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">{top3[0].points.toLocaleString()} pts</span>
                    <div className="mt-3 w-24 h-32 rounded-t-xl bg-gradient-to-b from-primary/20 to-primary/5 mx-auto flex items-center justify-center border border-primary/20">
                      <span className="font-mono font-bold text-3xl text-primary">1</span>
                    </div>
                  </div>

                  {/* 3rd place */}
                  <div className="text-center">
                    <img src={top3[2].avatar} alt={top3[2].name} className="w-20 h-20 rounded-2xl object-cover mx-auto mb-2 border-2 border-border/50" />
                    <p className="font-mono font-bold text-sm">{top3[2].name.split(' ')[0]}</p>
                    <span className="inline-block mt-1 px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground">{top3[2].points.toLocaleString()} pts</span>
                    <div className="mt-3 w-20 h-20 rounded-t-xl bg-gradient-to-b from-primary/10 to-secondary mx-auto flex items-center justify-center">
                      <span className="font-mono font-bold text-2xl text-primary/60">3</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Period toggle */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-primary" />
                  <h3 className="font-mono font-bold text-sm">Monthly Leaderboard</h3>
                </div>
                <div className="flex rounded-xl bg-secondary p-1">
                  <button onClick={() => setPeriod("monthly")} className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${period === "monthly" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>Monthly</button>
                  <button onClick={() => setPeriod("alltime")} className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${period === "alltime" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>All Time</button>
                </div>
              </div>

              {/* Table */}
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                <div className="grid grid-cols-[60px_1fr_100px_100px_100px] gap-4 px-5 py-3 text-xs text-muted-foreground font-mono border-b border-border/30">
                  <span>Rank</span>
                  <span>User</span>
                  <span className="text-right">Followers</span>
                  <span className="text-right">Points</span>
                  <span className="text-right">Projects</span>
                </div>
                {leaderboardData.map((user, i) => (
                  <Link
                    key={user.rank}
                    to={`/profile/${user.username}`}
                    className="grid grid-cols-[60px_1fr_100px_100px_100px] gap-4 px-5 py-3.5 items-center hover:bg-secondary/50 transition-colors border-b border-border/20 last:border-0"
                  >
                    <span className={`font-mono font-bold text-sm ${user.rank <= 3 ? "text-primary" : "text-muted-foreground"}`}>
                      {user.rank}
                    </span>
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={user.avatar} alt="" className="w-9 h-9 rounded-xl object-cover" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
                        <p className="text-xs text-muted-foreground font-mono">@{user.username}</p>
                      </div>
                    </div>
                    <span className="text-right text-sm font-mono text-muted-foreground">{user.followers.toLocaleString()}</span>
                    <span className="text-right text-sm font-mono text-primary font-bold">{user.points.toLocaleString()}</span>
                    <span className="text-right text-sm font-mono text-muted-foreground">{user.projects}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Rewards sidebar */}
            <div className="hidden xl:block">
              <div className="sticky top-20 bg-card rounded-2xl border border-border/50 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground">Monthly</span>
                </div>
                <h3 className="font-mono font-bold text-lg mb-1">Rewards</h3>
                <p className="text-xs text-muted-foreground mb-5">Top developers earn rewards based on their ranking.</p>

                <div className="space-y-3">
                  {rewards.map((r) => (
                    <div key={r.place} className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 border border-border/30">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono font-bold text-sm ${r.color}`}>{r.place}</span>
                        <span className="text-xs text-muted-foreground">place</span>
                      </div>
                      <span className="font-mono font-bold text-foreground">$ {r.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
