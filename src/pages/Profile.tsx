import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { PostCard } from "@/components/PostCard";
import { mockUser, mockPosts } from "@/lib/mockData";
import { MapPin, Globe, Calendar, Edit3, Users, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Profile() {
  const userPosts = mockPosts.filter((p) => p.userId === mockUser.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-20 pb-8">
        {/* Profile header */}
        <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
          {/* Banner */}
          <div className="h-32 bg-gradient-hero relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(38_92%_50%/0.15),transparent_50%)]" />
          </div>

          <div className="px-6 pb-6">
            {/* Avatar + actions */}
            <div className="flex items-end justify-between -mt-12 mb-4">
              <img
                src={mockUser.avatar}
                alt={mockUser.displayName}
                className="w-24 h-24 rounded-2xl border-4 border-card object-cover"
              />
              <Link to="/edit-profile">
                <Button variant="outline" className="rounded-xl border-border/50 gap-2">
                  <Edit3 className="w-4 h-4" /> Edit Profile
                </Button>
              </Link>
            </div>

            {/* Info */}
            <h1 className="font-mono font-bold text-2xl">{mockUser.displayName}</h1>
            <p className="text-muted-foreground font-mono text-sm">@{mockUser.username}</p>
            <p className="text-sm text-foreground mt-2 max-w-lg">{mockUser.bio}</p>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{mockUser.location}</span>
              <a href="#" className="flex items-center gap-1.5 hover:text-foreground">▪{mockUser.github}</a>
              <a href="#" className="flex items-center gap-1.5 hover:text-foreground">▪{mockUser.linkedin}</a>
              <a href="#" className="flex items-center gap-1.5 hover:text-foreground"><Globe className="w-3.5 h-3.5" />{mockUser.website}</a>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />Joined {new Date(mockUser.joinedAt).toLocaleDateString("en", { month: "short", year: "numeric" })}</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {mockUser.skills.map((s) => (
                <span key={s} className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-mono">{s}</span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-6 mt-5 pt-5 border-t border-border/30">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-muted-foreground" />
                <span className="font-mono font-bold text-foreground">{mockUser.projectCount}</span>
                <span className="text-sm text-muted-foreground">Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="font-mono font-bold text-foreground">{mockUser.followers.toLocaleString()}</span>
                <span className="text-sm text-muted-foreground">Followers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-foreground">{mockUser.following}</span>
                <span className="text-sm text-muted-foreground">Following</span>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        <h2 className="font-mono font-bold text-lg mt-8 mb-4">Projects</h2>
        <div className="space-y-6">
          {userPosts.length > 0 ? userPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          )) : (
            <div className="bg-card rounded-2xl border border-border/50 p-12 text-center">
              <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No projects yet. Share your first project!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
