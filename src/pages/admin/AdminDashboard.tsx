import { useState } from "react";
import { Link } from "react-router-dom";
import { Code2, Shield, Users, FolderOpen, MessageCircle, TrendingUp, Trash2, Edit3, Eye, Ban, Search, LogOut, BarChart3, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockPosts } from "@/lib/mockData";

const stats = [
  { label: "Total Users", value: "2,431", change: "+12%", icon: Users },
  { label: "Total Projects", value: "8,104", change: "+8%", icon: FolderOpen },
  { label: "Comments", value: "24.5K", change: "+15%", icon: MessageCircle },
  { label: "Reports", value: "12", change: "-3%", icon: Flag },
];

const mockUsers = [
  { id: "1", name: "Alex Chen", username: "alexdev", email: "alex@example.com", projects: 18, status: "active" },
  { id: "2", name: "Sarah Kim", username: "sarahcodes", email: "sarah@example.com", projects: 12, status: "active" },
  { id: "3", name: "Ryan Patel", username: "ryanbuilds", email: "ryan@example.com", projects: 7, status: "active" },
  { id: "4", name: "Emma Rodriguez", username: "emmatech", email: "emma@example.com", projects: 22, status: "active" },
  { id: "5", name: "Jake Wilson", username: "jakew", email: "jake@example.com", projects: 3, status: "suspended" },
];

type Tab = "overview" | "users" | "posts" | "reports";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "users", label: "Users", icon: Users },
    { id: "posts", label: "Projects", icon: FolderOpen },
    { id: "reports", label: "Reports", icon: Flag },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Admin nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-mono font-bold text-sm">
              Hello<span className="text-gradient">World</span>
              <span className="text-muted-foreground ml-1">Admin</span>
            </span>
          </div>
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <LogOut className="w-4 h-4" /> Logout
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-18 pb-8" style={{ paddingTop: "4.5rem" }}>
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-primary text-primary-foreground"
                  : "bg-card border border-border/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-2xl border border-border/50 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon className="w-5 h-5 text-muted-foreground" />
                    <span className={`text-xs font-mono ${stat.change.startsWith("+") ? "text-accent" : "text-destructive"}`}>{stat.change}</span>
                  </div>
                  <p className="font-mono font-bold text-2xl text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Recent activity */}
            <div className="bg-card rounded-2xl border border-border/50 p-6">
              <h3 className="font-mono font-bold text-sm mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {mockPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                    <img src={post.avatar} alt="" className="w-8 h-8 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground"><span className="font-medium">@{post.username}</span> posted <span className="font-mono text-primary">{post.title}</span></p>
                      <p className="text-xs text-muted-foreground">{post.createdAt}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{post.likes} ♥</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Users */}
        {activeTab === "users" && (
          <div className="animate-fade-in-up">
            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 border-b border-border/30">
                <div className="relative max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search users..." className="w-full h-10 pl-10 pr-4 rounded-xl bg-secondary border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left text-xs font-mono text-muted-foreground p-4">User</th>
                      <th className="text-left text-xs font-mono text-muted-foreground p-4">Email</th>
                      <th className="text-left text-xs font-mono text-muted-foreground p-4">Projects</th>
                      <th className="text-left text-xs font-mono text-muted-foreground p-4">Status</th>
                      <th className="text-right text-xs font-mono text-muted-foreground p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockUsers.filter((u) => u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.username.includes(searchQuery.toLowerCase())).map((user) => (
                      <tr key={user.id} className="border-b border-border/20 hover:bg-secondary/30 transition-colors">
                        <td className="p-4">
                          <div>
                            <p className="text-sm font-medium text-foreground">{user.name}</p>
                            <p className="text-xs text-muted-foreground font-mono">@{user.username}</p>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-muted-foreground">{user.email}</td>
                        <td className="p-4 text-sm font-mono text-foreground">{user.projects}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${user.status === "active" ? "bg-accent/10 text-accent" : "bg-destructive/10 text-destructive"}`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"><Eye className="w-4 h-4" /></button>
                            <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"><Edit3 className="w-4 h-4" /></button>
                            <button className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"><Ban className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Posts */}
        {activeTab === "posts" && (
          <div className="animate-fade-in-up">
            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 border-b border-border/30 flex items-center justify-between">
                <div className="relative max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input placeholder="Search projects..." className="w-full h-10 pl-10 pr-4 rounded-xl bg-secondary border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left text-xs font-mono text-muted-foreground p-4">Project</th>
                      <th className="text-left text-xs font-mono text-muted-foreground p-4">Author</th>
                      <th className="text-left text-xs font-mono text-muted-foreground p-4">Likes</th>
                      <th className="text-left text-xs font-mono text-muted-foreground p-4">Comments</th>
                      <th className="text-right text-xs font-mono text-muted-foreground p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockPosts.map((post) => (
                      <tr key={post.id} className="border-b border-border/20 hover:bg-secondary/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img src={post.image} alt="" className="w-12 h-8 rounded-lg object-cover" />
                            <p className="text-sm font-medium text-foreground">{post.title}</p>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-muted-foreground font-mono">@{post.username}</td>
                        <td className="p-4 text-sm font-mono text-foreground">{post.likes}</td>
                        <td className="p-4 text-sm font-mono text-foreground">{post.comments.length}</td>
                        <td className="p-4">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"><Eye className="w-4 h-4" /></button>
                            <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"><Edit3 className="w-4 h-4" /></button>
                            <button className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Reports */}
        {activeTab === "reports" && (
          <div className="animate-fade-in-up">
            <div className="bg-card rounded-2xl border border-border/50 p-8 text-center">
              <Flag className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-mono font-bold text-lg mb-1">No Active Reports</h3>
              <p className="text-sm text-muted-foreground">All content reports have been resolved.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
