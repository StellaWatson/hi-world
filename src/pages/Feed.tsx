import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PostCard } from "@/components/PostCard";
import { LeaderboardSidebar } from "@/components/LeaderboardSidebar";
import { mockPosts } from "@/lib/mockData";
import { Flame, Clock, TrendingUp, Sparkles } from "lucide-react";

const filters = [
  { id: "trending", label: "Trending", icon: Flame },
  { id: "latest", label: "Latest", icon: Clock },
  { id: "top", label: "Top", icon: TrendingUp },
  { id: "foryou", label: "For You", icon: Sparkles },
];

export default function Feed() {
  const [activeFilter, setActiveFilter] = useState("trending");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          {/* Main feed */}
          <div>
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

          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-20">
              <LeaderboardSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
