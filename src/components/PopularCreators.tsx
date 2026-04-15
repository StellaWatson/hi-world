import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const creators = [
  { name: "Emma Rodriguez", username: "emmatech", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop", following: false },
  { name: "Sarah Kim", username: "sarahcodes", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop", following: false },
  { name: "Ryan Patel", username: "ryanbuilds", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop", following: true },
  { name: "Maya Johnson", username: "mayaj", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop", following: false },
  { name: "Max Turner", username: "devmax", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=50&h=50&fit=crop", following: false },
];

export function PopularCreators() {
  return (
    <div className="bg-card rounded-2xl border border-border/50 p-5">
      <h3 className="font-mono font-bold text-sm mb-4">Popular Creators</h3>
      <div className="space-y-3">
        {creators.map((creator) => (
          <div key={creator.username} className="flex items-center gap-3">
            <Link to={`/profile/${creator.username}`}>
              <img src={creator.avatar} alt={creator.name} className="w-10 h-10 rounded-xl object-cover" />
            </Link>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{creator.name}</p>
              <p className="text-xs text-muted-foreground font-mono">@{creator.username}</p>
            </div>
            <Button
              variant={creator.following ? "ghost" : "outline"}
              size="sm"
              className={`rounded-lg text-xs h-8 ${
                creator.following ? "text-primary" : "border-border/50"
              }`}
            >
              {creator.following ? "Following" : "Follow"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
