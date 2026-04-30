import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { Post } from "@/lib/mockData";

export function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(post.liked);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <article className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-card hover:border-primary/20 transition-colors">
      <div className="flex items-center justify-between px-5 py-4">
        <Link to={`/profile/${post.username}`} className="flex items-center gap-3 group">
          <img src={post.avatar} alt="" className="w-10 h-10 rounded-xl object-cover" />
          <div>
            <p className="text-sm font-medium group-hover:text-primary transition-colors">{post.displayName}</p>
            <p className="text-xs text-muted-foreground font-mono">@{post.username} · {post.createdAt}</p>
          </div>
        </Link>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      <Link to={`/post/${post.id}`} className="block relative">
        <img src={post.image} alt={post.title} className="w-full aspect-video object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <h2 className="absolute bottom-4 left-5 right-5 font-mono font-bold text-lg text-foreground">
          {post.title}
        </h2>
      </Link>

      <div className="px-5 py-4">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tools.map((tool) => (
            <span key={tool} className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[11px] font-mono font-medium">
              {tool}
            </span>
          ))}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
          {post.description}
        </p>

        <div className="flex items-center gap-4 text-xs font-mono">
          {post.githubLink && (
            <a href={post.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <GithubIcon className="w-3.5 h-3.5" /> Source
            </a>
          )}
          {post.liveLink && (
            <a href={post.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-2 border-t border-border/30">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" onClick={handleLike} className={cn("rounded-xl gap-1.5", liked && "text-primary")}>
            <Heart className={cn("w-4 h-4", liked && "fill-primary")} />
            <span className="font-mono text-xs">{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setShowComments(!showComments)} className="rounded-xl gap-1.5">
            <MessageCircle className="w-4 h-4" />
            <span className="font-mono text-xs">{post.comments.length}</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-xl">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>

      {showComments && (
        <div className="px-5 pb-5 pt-3 border-t border-border/30 space-y-3">
          {post.comments.map((c) => (
            <div key={c.id} className="flex gap-2.5">
              <img src={c.avatar} alt="" className="w-7 h-7 rounded-lg object-cover shrink-0" />
              <div className="flex-1 bg-secondary/60 rounded-xl px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium font-mono">@{c.username}</span>
                  <span className="text-[11px] text-muted-foreground">{c.createdAt}</span>
                </div>
                <p className="text-sm mt-0.5">{c.text}</p>
              </div>
            </div>
          ))}
          <Input placeholder="Add a comment..." className="rounded-xl bg-secondary/60 border-border/50" />
        </div>
      )}
    </article>
  );
}