import { Link } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { NotificationDropdown } from "@/components/NotificationDropdown";
import { PostCard } from "@/components/PostCard";
import { mockUser, mockPosts } from "@/lib/mockData";
import { MapPin, Calendar, Edit3, FolderOpen, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Profile() {
  const userPosts = mockPosts.filter((p) => p.userId === mockUser.id);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-40 glass border-b border-border/30">
          <div className="flex items-center gap-4 px-4 lg:px-8 h-16">
            <h1 className="font-mono font-bold text-lg">Profile</h1>
            <div className="ml-auto flex items-center gap-2">
              <NotificationDropdown />
              <Link to="/profile" className="w-9 h-9 rounded-xl overflow-hidden border-2 border-primary/50">
                <img src={mockUser.avatar} alt="Profile" className="w-full h-full object-cover" />
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
          {/* Hero profile card */}
          <div className="relative bg-card rounded-2xl border border-border/50 overflow-hidden mb-8">
            {/* Cover gradient */}
            <div className="h-32 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/10" />

            <div className="px-6 pb-6">
              {/* Avatar + actions row */}
              <div className="flex items-end justify-between -mt-12 mb-4">
                <img
                  src={mockUser.avatar}
                  alt={mockUser.displayName}
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-card shadow-lg"
                />
                <div className="flex gap-2">
                  <Link to="/edit-profile">
                    <Button variant="outline" size="sm" className="rounded-xl gap-2 border-border/50">
                      <Edit3 className="w-3.5 h-3.5" /> Edit Profile
                    </Button>
                  </Link>
                  <Link to="/settings">
                    <Button variant="outline" size="sm" className="rounded-xl border-border/50">
                      Settings
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Name + meta */}
              <div className="mb-4">
                <h2 className="font-mono font-bold text-xl">{mockUser.displayName}</h2>
                <p className="text-sm text-muted-foreground font-mono">@{mockUser.username}</p>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed mb-4 max-w-2xl">
                {mockUser.bio}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-5">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {mockUser.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Joined {new Date(mockUser.joinedAt).toLocaleDateString("en", { month: "long", year: "numeric" })}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Available
                </span>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-6 text-sm">
                <span><strong className="text-foreground">{mockUser.projectCount}</strong> <span className="text-muted-foreground">projects</span></span>
                <span><strong className="text-foreground">{mockUser.followers.toLocaleString()}</strong> <span className="text-muted-foreground">followers</span></span>
                <span><strong className="text-foreground">{mockUser.following}</strong> <span className="text-muted-foreground">following</span></span>
              </div>
            </div>
          </div>

          {/* Skills + Links row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Skills */}
            <div className="bg-card rounded-2xl border border-border/50 p-5">
              <h3 className="font-mono font-bold text-sm text-muted-foreground mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {mockUser.skills.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-mono font-medium">{s}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="bg-card rounded-2xl border border-border/50 p-5">
              <h3 className="font-mono font-bold text-sm text-muted-foreground mb-3">Links</h3>
              <div className="space-y-2">
                <a href={`https://github.com/${mockUser.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-secondary transition-colors text-sm group">
                  <GithubIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{mockUser.github}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 ml-auto transition-opacity" />
                </a>
                <a href={`https://linkedin.com/in/${mockUser.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-secondary transition-colors text-sm group">
                  <LinkedinIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{mockUser.linkedin}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 ml-auto transition-opacity" />
                </a>
                {mockUser.website && (
                  <a href={`https://${mockUser.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-secondary transition-colors text-sm group">
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{mockUser.website}</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 ml-auto transition-opacity" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Projects */}
          <h2 className="font-mono font-bold text-lg mb-4">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userPosts.length > 0 ? userPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            )) : (
              <div className="col-span-2 bg-card rounded-2xl border border-border/50 p-12 text-center">
                <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">No projects yet. Share your first project!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
