import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, ExternalLink, Github, Share2, Bookmark, MoreHorizontal } from "lucide-react";
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
    <article className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-border transition-all duration-300 group">
      {/* Header */}
      <div className="p-5 pb-3 flex items-center justify-between">
        <Link to={`/profile/${post.username}`} className="flex items-center gap-3">
          <img src={post.avatar} alt={post.displayName} className="w-10 h-10 rounded-xl object-cover border border-border/50" />
          <div>
            <h4 className="font-medium text-sm text-foreground">{post.displayName}</h4>
            <p className="text-xs text-muted-foreground font-mono">@{post.username} · {post.createdAt}</p>
          </div>
        </Link>
        <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Image */}
      <Link to={`/post/${post.id}`} className="block relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="font-mono font-bold text-lg text-foreground leading-tight">{post.title}</h3>
        </div>
      </Link>

      {/* Tools */}
      <div className="px-5 pt-3 flex flex-wrap gap-1.5">
        {post.tools.map((tool) => (
          <span key={tool} className="px-2.5 py-1 rounded-lg bg-secondary text-xs font-mono text-muted-foreground">
            {tool}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="px-5 pt-3">
        <p className="text-sm text-secondary-foreground leading-relaxed line-clamp-2">{post.description}</p>
      </div>

      {/* Links */}
      <div className="px-5 pt-3 flex gap-3">
        {post.githubLink && (
          <a href={post.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors font-mono">
            <Github className="w-3.5 h-3.5" /> Source
          </a>
        )}
        {post.liveLink && (
          <a href={post.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
            <ExternalLink className="w-3.5 h-3.5" /> Live Demo
          </a>
        )}
      </div>

      {/* Actions */}
      <div className="p-5 pt-4 flex items-center justify-between border-t border-border/30 mt-4">
        <div className="flex items-center gap-1">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-sm ${
              liked
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-primary" : ""}`} />
            <span className="font-mono text-xs">{likes}</span>
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="font-mono text-xs">{post.comments.length}</span>
          </button>
          <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
        <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>

      {/* Comments preview */}
      {showComments && post.comments.length > 0 && (
        <div className="px-5 pb-5 space-y-3 animate-fade-in-up">
          {post.comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <img src={comment.avatar} alt="" className="w-7 h-7 rounded-lg object-cover shrink-0" />
              <div className="flex-1 bg-secondary rounded-xl px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-foreground">@{comment.username}</span>
                  <span className="text-xs text-muted-foreground">{comment.createdAt}</span>
                </div>
                <p className="text-sm text-secondary-foreground mt-0.5">{comment.text}</p>
              </div>
            </div>
          ))}
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-lg bg-secondary shrink-0" />
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 h-9 px-3 rounded-xl bg-secondary border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>
        </div>
      )}
    </article>
  );
}
