import { useState, useRef, useEffect } from "react";
import { Bell, Heart, MessageSquare, UserPlus, Star, Check } from "lucide-react";

interface Notification {
  id: string;
  type: "like" | "comment" | "follow" | "star";
  user: { name: string; avatar: string };
  message: string;
  project?: string;
  time: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "comment",
    user: { name: "Sarah Kim", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" },
    message: "Commented on",
    project: "AI Code Review Bot",
    time: "2m ago",
    read: false,
  },
  {
    id: "2",
    type: "like",
    user: { name: "Ryan Patel", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop" },
    message: "Liked",
    project: "AI Code Review Bot",
    time: "15m ago",
    read: false,
  },
  {
    id: "3",
    type: "follow",
    user: { name: "Emma Rodriguez", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop" },
    message: "Started following you",
    time: "1h ago",
    read: false,
  },
  {
    id: "4",
    type: "star",
    user: { name: "Dev Max", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=50&h=50&fit=crop" },
    message: "Starred",
    project: "Collaborative Whiteboard",
    time: "3h ago",
    read: true,
  },
  {
    id: "5",
    type: "comment",
    user: { name: "Sarah Kim", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" },
    message: "Replied to your comment on",
    project: "CLI Task Manager",
    time: "5h ago",
    read: true,
  },
];

const typeIcons = {
  like: Heart,
  comment: MessageSquare,
  follow: UserPlus,
  star: Star,
};

const typeColors = {
  like: "text-red-400 bg-red-400/10",
  comment: "text-primary bg-primary/10",
  follow: "text-accent bg-accent/10",
  star: "text-yellow-400 bg-yellow-400/10",
};

export function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"all" | "unread">("all");
  const ref = useRef<HTMLDivElement>(null);

  const unreadCount = mockNotifications.filter((n) => !n.read).length;
  const filtered = tab === "unread" ? mockNotifications.filter((n) => !n.read) : mockNotifications;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2.5 rounded-xl hover:bg-secondary transition-colors"
      >
        <Bell className="w-5 h-5 text-muted-foreground" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-[380px] bg-card border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up z-50">
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <h3 className="font-mono font-bold text-base">Notifications</h3>
            <div className="flex bg-secondary rounded-lg p-0.5">
              <button
                onClick={() => setTab("all")}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  tab === "all" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setTab("unread")}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  tab === "unread" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
                }`}
              >
                Unread
              </button>
            </div>
          </div>

          {/* List */}
          <div className="max-h-[400px] overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="py-12 text-center">
                <Check className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">All caught up!</p>
              </div>
            ) : (
              filtered.map((n) => {
                const Icon = typeIcons[n.type];
                return (
                  <div
                    key={n.id}
                    className={`flex items-start gap-3 px-5 py-3.5 hover:bg-secondary/50 transition-colors cursor-pointer border-b border-border/20 last:border-0 ${
                      !n.read ? "bg-primary/[0.03]" : ""
                    }`}
                  >
                    <div className="relative flex-shrink-0">
                      <img src={n.user.avatar} alt={n.user.name} className="w-10 h-10 rounded-full object-cover" />
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${typeColors[n.type]}`}>
                        <Icon className="w-2.5 h-2.5" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm leading-snug">
                        <span className="font-semibold text-foreground">{n.user.name}</span>{" "}
                        <span className="text-muted-foreground">{n.message}</span>
                        {n.project && <span className="font-semibold text-foreground"> {n.project}</span>}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
                    </div>
                    {!n.read && <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />}
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-border/30">
            <button className="w-full text-center text-xs font-medium text-primary hover:underline">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
