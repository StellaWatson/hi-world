import { useState } from "react";
import { Bell, Heart, MessageCircle, UserPlus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

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
  { id: "1", type: "comment", user: { name: "Sarah Kim", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" }, message: "commented on", project: "AI Code Review Bot", time: "2m ago", read: false },
  { id: "2", type: "like", user: { name: "Ryan Patel", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop" }, message: "liked", project: "AI Code Review Bot", time: "15m ago", read: false },
  { id: "3", type: "follow", user: { name: "Emma Rodriguez", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop" }, message: "started following you", time: "1h ago", read: false },
  { id: "4", type: "star", user: { name: "Dev Max", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=50&h=50&fit=crop" }, message: "starred", project: "Collaborative Whiteboard", time: "3h ago", read: true },
  { id: "5", type: "comment", user: { name: "Sarah Kim", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" }, message: "replied to your comment on", project: "CLI Task Manager", time: "5h ago", read: true },
];

const typeIcon = {
  like: <Heart className="w-3 h-3 text-destructive fill-destructive" />,
  comment: <MessageCircle className="w-3 h-3 text-primary" />,
  follow: <UserPlus className="w-3 h-3 text-accent" />,
  star: <Star className="w-3 h-3 text-primary fill-primary" />,
};

function NotificationList({ items }: { items: Notification[] }) {
  if (items.length === 0) {
    return <div className="py-10 text-center text-sm text-muted-foreground">All caught up! 🎉</div>;
  }
  return (
    <div className="max-h-[400px] overflow-y-auto">
      {items.map((n) => (
        <div
          key={n.id}
          className={cn(
            "flex gap-3 p-3 border-b border-border/30 cursor-pointer hover:bg-secondary/40 transition-colors",
            !n.read && "bg-primary/[0.04]"
          )}
        >
          <div className="relative shrink-0">
            <img src={n.user.avatar} alt="" className="w-10 h-10 rounded-lg object-cover" />
            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-card border border-border/50 flex items-center justify-center">
              {typeIcon[n.type]}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm leading-snug">
              <span className="font-medium">{n.user.name}</span>{" "}
              <span className="text-muted-foreground">{n.message}</span>
              {n.project && <span className="font-medium"> {n.project}</span>}
            </p>
            <p className="text-[11px] text-muted-foreground font-mono mt-0.5">{n.time}</p>
          </div>
          {!n.read && <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />}
        </div>
      ))}
    </div>
  );
}

export function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const unreadCount = mockNotifications.filter((n) => !n.read).length;
  const unread = mockNotifications.filter((n) => !n.read);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative rounded-xl">
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-mono font-bold flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[380px] p-0 rounded-2xl overflow-hidden">
        <div className="px-4 pt-4 pb-2">
          <h3 className="font-mono font-bold text-sm">Notifications</h3>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mx-4 bg-secondary/60">
            <TabsTrigger value="all" className="text-xs">All ({mockNotifications.length})</TabsTrigger>
            <TabsTrigger value="unread" className="text-xs">Unread ({unread.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-2">
            <NotificationList items={mockNotifications} />
          </TabsContent>
          <TabsContent value="unread" className="mt-2">
            <NotificationList items={unread} />
          </TabsContent>
        </Tabs>
        <div className="p-3 border-t border-border/30 text-center">
          <Button variant="link" size="sm" className="text-xs text-primary">View all notifications</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}