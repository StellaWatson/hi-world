import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Search, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { mockUser } from "@/lib/mockData";
import { Settings as SettingsIcon, User, Shield, Zap, CreditCard, Pencil } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { NotificationDropdown } from "@/components/NotificationDropdown";

const tabs = [
  { id: "general", label: "General", icon: SettingsIcon },
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Security", icon: Shield },
  { id: "notifications", label: "Notifications", icon: Zap },
  { id: "subscription", label: "Subscription", icon: CreditCard },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-40 glass border-b border-border/30">
          <div className="flex items-center gap-4 px-4 lg:px-8 h-16">
            <h1 className="font-mono font-bold text-lg">Settings</h1>
            <div className="ml-auto flex items-center gap-2">
              <NotificationDropdown />
              <Link to="/profile" className="w-9 h-9 rounded-xl overflow-hidden border-2 border-primary/50">
                <img src={mockUser.avatar} alt="Profile" className="w-full h-full object-cover" />
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
              {/* Sidebar tabs */}
              <div className="border-b md:border-b-0 md:border-r border-border/30 p-4 md:p-6">
                <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                        activeTab === tab.id
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {activeTab === "general" && <GeneralTab />}
                {activeTab === "profile" && <ProfileTab />}
                {activeTab === "security" && <SecurityTab />}
                {activeTab === "notifications" && <NotificationsTab />}
                {activeTab === "subscription" && <SubscriptionTab />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GeneralTab() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">General</h2>
      <div className="divide-y divide-border/30">
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="text-sm font-medium">Username</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono">{mockUser.username}</span>
            <Pencil className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium">Email</p>
          <span className="text-sm text-muted-foreground">alex@helloworld.dev</span>
        </div>
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="text-sm font-medium">Auto-play videos on Feed</p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="text-sm font-medium">Show projects on Explore</p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium">Language</p>
          <select className="bg-secondary border border-border/50 rounded-lg px-3 py-1.5 text-sm text-foreground focus:outline-none">
            <option>Auto detect</option>
            <option>English</option>
            <option>O'zbek</option>
            <option>Русский</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function ProfileTab() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Profile</h2>
      <div className="divide-y divide-border/30">
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium">Private profile</p>
          <Switch />
        </div>
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="text-sm font-medium">Avatar</p>
            <p className="text-xs text-muted-foreground">Use 800×800 px (PNG/JPG)</p>
          </div>
          <img src={mockUser.avatar} alt="" className="w-12 h-12 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" />
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium">Portfolio link</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>helloworld.dev/@{mockUser.username}</span>
            <Pencil className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium">Display name</p>
          <span className="text-sm text-muted-foreground">{mockUser.displayName}</span>
        </div>
      </div>
    </div>
  );
}

function SecurityTab() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Security</h2>
      <div className="divide-y divide-border/30">
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium">Password</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>••••••••••••</span>
            <Pencil className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium">Multi-factor authentication</p>
          <Switch />
        </div>
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="text-sm font-medium">Log out of all devices</p>
            <p className="text-xs text-muted-foreground">Sign out from all devices.</p>
          </div>
          <Button variant="outline" className="rounded-xl text-sm">
            Log out all
          </Button>
        </div>
      </div>
    </div>
  );
}

function NotificationsTab() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Notifications</h2>
      <div className="divide-y divide-border/30">
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium">Display while working</p>
          <select className="bg-secondary border border-border/50 rounded-lg px-3 py-1.5 text-sm text-foreground focus:outline-none">
            <option>Push</option>
            <option>Email</option>
            <option>Both</option>
            <option>None</option>
          </select>
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium">Project liked</p>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium">New comment</p>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium">New follower</p>
          <Switch />
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium">Someone mentioned in the comment</p>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  );
}

function SubscriptionTab() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Subscription</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Your plan auto-renews on Jul 3, 2026</p>
          <User className="w-5 h-5 text-muted-foreground" />
        </div>

        <div className="bg-secondary/50 rounded-2xl border border-border/30 p-6">
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-sm text-muted-foreground">USD/month</span>
          </div>
          <div className="flex gap-3 mb-6">
            <Button variant="outline" className="flex-1 rounded-xl">Cancel</Button>
            <Button className="flex-1 bg-foreground text-background rounded-xl hover:bg-foreground/90">Upgrade</Button>
          </div>
          <div className="space-y-3">
            {[
              "Everything in Free",
              "Priority project showcase",
              "Advanced analytics",
              "Custom profile badge",
              "Early access to features",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-foreground" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3 4.3L6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
