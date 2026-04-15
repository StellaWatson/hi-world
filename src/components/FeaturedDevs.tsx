import { Link } from "react-router-dom";

const featuredDevs = [
  { username: "emmatech", name: "Emma Rodriguez", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" },
  { username: "sarahcodes", name: "Sarah Kim", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
  { username: "ryanbuilds", name: "Ryan Patel", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
  { username: "alexdev", name: "Alex Chen", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop" },
  { username: "mayaj", name: "Maya Johnson", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" },
  { username: "devmax", name: "Max Turner", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=150&h=150&fit=crop" },
];

export function FeaturedDevs() {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {featuredDevs.map((dev) => (
        <Link
          key={dev.username}
          to={`/profile/${dev.username}`}
          className="flex-shrink-0 w-[130px] relative rounded-xl overflow-hidden group cursor-pointer"
        >
          <img
            src={dev.avatar}
            alt={dev.name}
            className="w-full h-[160px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute bottom-2 left-2 right-2">
            <p className="text-xs font-medium text-foreground truncate">{dev.name}</p>
            <p className="text-[10px] text-muted-foreground font-mono">@{dev.username}</p>
          </div>
          <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background" />
        </Link>
      ))}
    </div>
  );
}
