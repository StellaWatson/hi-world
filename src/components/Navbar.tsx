import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Code2, Bell, Search, Plus, Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreatePostDialog } from "./CreatePostDialog";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-mono font-bold text-lg text-foreground hidden sm:block">
              Hello<span className="text-gradient">World</span>
            </span>
          </Link>

          {/* Search */}
          <div className={`relative flex-1 max-w-md transition-all ${searchFocused ? "max-w-lg" : ""}`}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects, developers..."
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-secondary border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              onClick={() => setCreateOpen(true)}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium gap-2 rounded-xl shadow-glow"
            >
              <Plus className="w-4 h-4" />
              New Project
            </Button>
            <button className="relative p-2.5 rounded-xl hover:bg-secondary transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
            </button>
            <Link
              to="/profile"
              className="w-9 h-9 rounded-xl overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-colors"
            >
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>

          {/* Mobile menu */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-secondary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-border/30 bg-card/95 backdrop-blur-xl animate-fade-in-up">
            <div className="p-4 space-y-2">
              <Button
                onClick={() => { setCreateOpen(true); setMenuOpen(false); }}
                className="w-full bg-gradient-primary text-primary-foreground rounded-xl"
              >
                <Plus className="w-4 h-4 mr-2" /> New Project
              </Button>
              <Link to="/profile" className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors" onClick={() => setMenuOpen(false)}>
                <User className="w-5 h-5 text-muted-foreground" />
                <span>Profile</span>
              </Link>
              <Link to="/login" className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors" onClick={() => setMenuOpen(false)}>
                <LogOut className="w-5 h-5 text-muted-foreground" />
                <span>Sign Out</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <CreatePostDialog open={createOpen} onOpenChange={setCreateOpen} />
    </>
  );
}
