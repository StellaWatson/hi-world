import { Link, useLocation } from "react-router-dom";
import { Code2, Home, Compass, User, MessageSquare, Trophy, Settings, LogOut, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Home, label: "Home", path: "/feed" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: Trophy, label: "Leaderboard", path: "/leaderboard" },
  { icon: MessageSquare, label: "Messages", path: "/messages", badge: 3 },
  { icon: User, label: "My Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar({ onCreatePost }: { onCreatePost?: () => void }) {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-[240px] h-screen sticky top-0 bg-card border-r border-border/50 p-4">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 px-3 py-2 mb-6">
        <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
          <Code2 className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-mono font-bold text-lg text-foreground">
          Hello<span className="text-gradient">World</span>
        </span>
      </Link>

      {/* Nav */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
              {item.badge && (
                <span className="ml-auto px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-mono">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Create Post */}
      {onCreatePost && (
        <Button
          onClick={onCreatePost}
          className="w-full bg-gradient-primary text-primary-foreground rounded-xl shadow-glow hover:opacity-90 gap-2 mb-4"
        >
          <Plus className="w-4 h-4" />
          New Project
        </Button>
      )}

      {/* User */}
      <div className="border-t border-border/30 pt-4">
        <Link to="/profile" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-secondary transition-colors">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop"
            alt="Profile"
            className="w-9 h-9 rounded-xl object-cover border border-border/50"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Alex Chen</p>
            <p className="text-xs text-muted-foreground font-mono">@alexdev</p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
