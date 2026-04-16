import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { WelcomeModal } from "@/components/WelcomeModal";
import { PostCard } from "@/components/PostCard";
import { FeaturedDevs } from "@/components/FeaturedDevs";
import { PopularCreators } from "@/components/PopularCreators";
import { LeaderboardSidebar } from "@/components/LeaderboardSidebar";
import { CreatePostDialog } from "@/components/CreatePostDialog";
import { mockPosts } from "@/lib/mockData";
import { NotificationDropdown } from "@/components/NotificationDropdown";
import { Flame, Clock, TrendingUp, Sparkles, Search, Code2, Plus, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const filters = [
  { id: "trending", label: "Trending", icon: Flame },
  { id: "latest", label: "Latest", icon: Clock },
  { id: "top", label: "Top", icon: TrendingUp },
  { id: "foryou", label: "For You", icon: Sparkles },
];

export default function Feed() {
  const [activeFilter, setActiveFilter] = useState("trending");
  const [createOpen, setCreateOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left sidebar */}
      <Sidebar onCreatePost={() => setCreateOpen(true)} />

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-40 glass border-b border-border/30">
          <div className="flex items-center gap-4 px-4 lg:px-8 h-16">
            {/* Mobile logo */}
            <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-xl hover:bg-secondary">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <Link to="/" className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-md bg-gradient-primary flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-primary-foreground" />
                </div>
              </Link>
            </div>

            <h1 className="font-mono font-bold text-lg hidden sm:block">Home</h1>

            {/* Search */}
            <div className="flex-1 max-w-md ml-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects, developers..."
                  className="w-full h-10 pl-10 pr-4 rounded-xl bg-secondary border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            {/* Actions */}
            <NotificationDropdown />
            <Link to="/profile" className="w-9 h-9 rounded-xl overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-colors hidden sm:block">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop" alt="Profile" className="w-full h-full object-cover" />
            </Link>
          </div>
        </header>

        {/* Mobile nav dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-border/30 bg-card p-4 space-y-2 animate-fade-in-up">
            {[
              { label: "Home", path: "/feed" },
              { label: "Leaderboard", path: "/leaderboard" },
              { label: "Profile", path: "/profile" },
            ].map((item) => (
              <Link key={item.path} to={item.path} className="block px-4 py-2.5 rounded-xl text-sm hover:bg-secondary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Button onClick={() => { setCreateOpen(true); setMobileMenuOpen(false); }} className="w-full bg-gradient-primary text-primary-foreground rounded-xl gap-2">
              <Plus className="w-4 h-4" /> New Project
            </Button>
          </div>
        )}

        <div className="max-w-[1100px] mx-auto px-4 lg:px-8 py-6">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-8">
            {/* Main feed */}
            <div>
              {/* Featured devs stories */}
              <div className="mb-6">
                <h3 className="font-mono font-bold text-sm text-muted-foreground mb-3">Featured Developers</h3>
                <FeaturedDevs />
              </div>

              {/* Filters */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                      activeFilter === filter.id
                        ? "bg-gradient-primary text-primary-foreground shadow-glow"
                        : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                  >
                    <filter.icon className="w-4 h-4" />
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Posts */}
              <div className="space-y-6">
                {mockPosts.map((post, i) => (
                  <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <PostCard post={post} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right sidebar */}
            <div className="hidden xl:block">
              <div className="sticky top-20 space-y-6">
                <PopularCreators />
                <LeaderboardSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CreatePostDialog open={createOpen} onOpenChange={setCreateOpen} />
      <WelcomeModal />
    </div>
  );
}
