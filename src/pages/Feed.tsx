import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Flame, Clock, TrendingUp, Zap, Menu, Plus, Code2 } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { WelcomeModal } from "@/components/WelcomeModal";
import { PostCard } from "@/components/PostCard";
import { FeaturedDevs } from "@/components/FeaturedDevs";
import { PopularCreators } from "@/components/PopularCreators";
import { LeaderboardSidebar } from "@/components/LeaderboardSidebar";
import { CreatePostDialog } from "@/components/CreatePostDialog";
import { NotificationDropdown } from "@/components/NotificationDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { mockPosts } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const filterTabs = [
  { id: "trending", label: "Trending", icon: Flame },
  { id: "latest", label: "Latest", icon: Clock },
  { id: "top", label: "Top", icon: TrendingUp },
  { id: "foryou", label: "For You", icon: Zap },
];

export default function Feed() {
  const [activeFilter, setActiveFilter] = useState("trending");
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar onCreatePost={() => setCreateOpen(true)} />

      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-40 glass border-b border-border/30">
          <div className="flex items-center gap-3 px-4 lg:px-8 h-16">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden rounded-xl">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-4">
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => setCreateOpen(true)}
                    className="bg-gradient-primary text-primary-foreground rounded-xl shadow-glow gap-2 mb-2"
                  >
                    <Plus className="w-4 h-4" /> New Project
                  </Button>
                  {[
                    { label: "Home", path: "/feed" },
                    { label: "Leaderboard", path: "/leaderboard" },
                    { label: "Profile", path: "/profile" },
                    { label: "Settings", path: "/settings" },
                  ].map((i) => (
                    <Link key={i.path} to={i.path} className="px-3 py-2.5 rounded-xl text-sm hover:bg-secondary transition-colors">
                      {i.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            <Link to="/" className="lg:hidden flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
            </Link>

            <h1 className="hidden sm:block font-mono font-bold text-lg">Home</h1>

            <div className="flex-1 max-w-md ml-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects, developers..."
                  className="pl-9 rounded-xl bg-secondary/60 border-border/50 h-10"
                />
              </div>
            </div>

            <NotificationDropdown />
            <Link to="/profile" className="w-9 h-9 rounded-xl overflow-hidden border-2 border-primary/40 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-6">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-8">
            <main className="min-w-0">
              <section className="mb-6">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Featured Developers
                </p>
                <FeaturedDevs />
              </section>

              <div className="flex gap-1 mb-5 border-b border-border/30 overflow-x-auto scrollbar-hide">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors -mb-px",
                      activeFilter === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                {mockPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </main>

            <aside className="hidden xl:block">
              <div className="sticky top-20 flex flex-col gap-6">
                <PopularCreators />
                <LeaderboardSidebar />
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CreatePostDialog open={createOpen} onOpenChange={setCreateOpen} />
      <WelcomeModal />
    </div>
  );
}