import { Link, useLocation } from "react-router-dom";
import { Home, Compass, Trophy, MessageSquare, User, Settings, Plus, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/feed", icon: Home, label: "Home" },
  { path: "/explore", icon: Compass, label: "Explore" },
  { path: "/leaderboard", icon: Trophy, label: "Leaderboard" },
  { path: "/messages", icon: MessageSquare, label: "Messages", badge: 3 },
  { path: "/profile", icon: User, label: "My Profile" },
  { path: "/settings", icon: Settings, label: "Settings" },
];

export function Sidebar({ onCreatePost }: { onCreatePost?: () => void }) {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-60 h-screen sticky top-0 border-r border-border/30 bg-sidebar p-3">
      <Link to="/" className="flex items-center gap-2.5 px-3 py-2 mb-4">
        <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
          <Code2 className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-mono font-bold text-base">
          Hello<span className="text-gradient">World</span>
        </span>
      </Link>

      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                active
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {onCreatePost && (
        <Button
          onClick={onCreatePost}
          className="bg-gradient-primary text-primary-foreground rounded-xl shadow-glow hover:opacity-90 gap-2 mb-4"
        >
          <Plus className="w-4 h-4" /> New Project
        </Button>
      )}

      <Link
        to="/profile"
        className="flex items-center gap-3 px-2 py-3 rounded-xl border-t border-border/30 hover:bg-secondary/40 transition-colors"
      >
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop"
          alt="Alex Chen"
          className="w-9 h-9 rounded-lg object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium truncate">Alex Chen</p>
          <p className="text-xs text-muted-foreground font-mono truncate">@alexdev</p>
        </div>
      </Link>
    </aside>
  );
}