import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { mockPosts } from "@/lib/mockData";
import { Heart, MessageCircle, Github, ExternalLink, Share2, Bookmark, ArrowLeft, Send, Calendar, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PostDetails() {
  const { id } = useParams();
  const post = mockPosts.find((p) => p.id === id) ?? mockPosts[0];
  const [liked, setLiked] = useState(post.liked);
  const [likes, setLikes] = useState(post.likes);
  const [comment, setComment] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-20 pb-8">
        <Link to="/feed" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Feed
        </Link>

        <article className="bg-card rounded-2xl border border-border/50 overflow-hidden">
          {/* Image */}
          <img src={post.image} alt={post.title} className="w-full aspect-video object-cover" />

          <div className="p-6 lg:p-8">
            {/* Author */}
            <div className="flex items-center justify-between mb-6">
              <Link to={`/profile/${post.username}`} className="flex items-center gap-3">
                <img src={post.avatar} alt="" className="w-12 h-12 rounded-xl object-cover border border-border/50" />
                <div>
                  <h4 className="font-medium text-foreground">{post.displayName}</h4>
                  <p className="text-sm text-muted-foreground font-mono">@{post.username}</p>
                </div>
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {post.createdAt}
              </div>
            </div>

            {/* Title */}
            <h1 className="font-mono font-bold text-2xl lg:text-3xl mb-4">{post.title}</h1>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tools.map((tool) => (
                <span key={tool} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-mono font-medium">{tool}</span>
              ))}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-mono font-bold text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <span className="text-accent">//</span> About the Project
              </h3>
              <p className="text-foreground leading-relaxed">{post.description}</p>
            </div>

            {/* Challenges */}
            {post.challenges && (
              <div className="mb-6 p-4 rounded-xl bg-secondary/50 border border-border/30">
                <h3 className="font-mono font-bold text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <Wrench className="w-4 h-4" /> Challenges & Solutions
                </h3>
                <p className="text-foreground text-sm leading-relaxed">{post.challenges}</p>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-3 mb-6">
              {post.githubLink && (
                <a href={post.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-sm font-medium text-foreground hover:bg-muted transition-colors">
                  <Github className="w-4 h-4" /> View Source
                </a>
              )}
              {post.liveLink && (
                <a href={post.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-primary text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between py-4 border-y border-border/30">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setLiked(!liked); setLikes(liked ? likes - 1 : likes + 1); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${liked ? "bg-primary/10 text-primary" : "hover:bg-secondary text-muted-foreground hover:text-foreground"}`}
                >
                  <Heart className={`w-5 h-5 ${liked ? "fill-primary" : ""}`} />
                  <span className="font-mono text-sm">{likes}</span>
                </button>
                <span className="flex items-center gap-2 px-4 py-2 text-muted-foreground">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-mono text-sm">{post.comments.length}</span>
                </span>
                <button className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <button className="p-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>

            {/* Comments */}
            <div className="mt-6">
              <h3 className="font-mono font-bold text-sm mb-4">Comments ({post.comments.length})</h3>

              {/* Add comment */}
              <div className="flex gap-3 mb-6">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop" alt="" className="w-9 h-9 rounded-xl object-cover shrink-0" />
                <div className="flex-1 flex gap-2">
                  <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="flex-1 h-10 px-4 rounded-xl bg-secondary border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Button className="bg-gradient-primary text-primary-foreground rounded-xl h-10 px-4">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Comment list */}
              <div className="space-y-4">
                {post.comments.map((c) => (
                  <div key={c.id} className="flex gap-3">
                    <img src={c.avatar} alt="" className="w-9 h-9 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 bg-secondary rounded-xl px-4 py-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-foreground">@{c.username}</span>
                        <span className="text-xs text-muted-foreground">{c.createdAt}</span>
                      </div>
                      <p className="text-sm text-secondary-foreground">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
