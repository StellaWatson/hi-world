import { Link } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { PostCard } from "@/components/PostCard";
import { mockUser, mockPosts } from "@/lib/mockData";
import { MapPin, Globe, Calendar, Edit3, Users, FolderOpen, Code2, Search, Bell } from "lucide-react";
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
            <p className="text-xs text-muted-foreground hidden sm:block">View all your profile details here.</p>
            <div className="ml-auto flex items-center gap-2">
              <div className="relative max-w-xs hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Search..." className="w-full h-9 pl-10 pr-4 rounded-xl bg-secondary border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <button className="relative p-2.5 rounded-xl hover:bg-secondary transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
              </button>
              <Link to="/profile" className="w-9 h-9 rounded-xl overflow-hidden border-2 border-primary/50">
                <img src={mockUser.avatar} alt="Profile" className="w-full h-full object-cover" />
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 lg:px-8 py-6">
          {/* Profile card */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 mb-8">
            {/* Left - Avatar card */}
            <div className="bg-card rounded-2xl border border-border/50 p-6 text-center">
              <img
                src={mockUser.avatar}
                alt={mockUser.displayName}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-border/30 mb-4"
              />
              <h2 className="font-mono font-bold text-xl">{mockUser.displayName}</h2>
              <p className="text-sm text-accent font-medium">{mockUser.title}</p>
              <Link to="/edit-profile" className="mt-4 block">
                <Button variant="outline" className="rounded-xl border-border/50 gap-2 w-full">
                  <Edit3 className="w-4 h-4" /> Edit Profile
                </Button>
              </Link>
            </div>

            {/* Right - Bio & details */}
            <div className="bg-card rounded-2xl border border-border/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono font-bold text-sm text-muted-foreground">Bio & Details</h3>
                <div className="w-3 h-3 rounded-full bg-accent" title="Online" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs mb-0.5">Role</p>
                  <p className="text-foreground font-medium">{mockUser.title}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-0.5">Experience Level</p>
                  <p className="text-foreground font-medium">Senior</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-0.5">Location</p>
                  <p className="text-foreground font-medium flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-muted-foreground" />{mockUser.location}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-0.5">Availability</p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Available for Collaboration
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border/30">
                <div>
                  <p className="text-muted-foreground text-xs mb-1">Skills</p>
                  <div className="flex flex-wrap gap-1.5">
                    {mockUser.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-mono">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">Joined</p>
                  <p className="text-foreground text-sm flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    {new Date(mockUser.joinedAt).toLocaleDateString("en", { month: "long", year: "numeric" })}
                  </p>
                </div>
              </div>

              <p className="text-sm text-foreground mt-4 leading-relaxed">{mockUser.bio}</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-card rounded-2xl border border-border/50 p-6 mb-8">
            <h3 className="font-mono font-bold text-sm mb-4">Social Media</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-card rounded-2xl border border-border/50 p-5 text-center">
              <p className="font-mono font-bold text-2xl text-gradient">{mockUser.projectCount}</p>
              <p className="text-xs text-muted-foreground mt-1">Projects</p>
            </div>
            <div className="bg-card rounded-2xl border border-border/50 p-5 text-center">
              <p className="font-mono font-bold text-2xl text-gradient">{mockUser.followers.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-1">Followers</p>
            </div>
            <div className="bg-card rounded-2xl border border-border/50 p-5 text-center">
              <p className="font-mono font-bold text-2xl text-gradient">{mockUser.following}</p>
              <p className="text-xs text-muted-foreground mt-1">Following</p>
            </div>
          </div>

          {/* Projects grid */}
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
