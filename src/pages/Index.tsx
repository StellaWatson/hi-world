import { Link } from "react-router-dom";
import { Code2, ArrowRight, Rocket, Users, Trophy, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-mono font-bold text-lg">
              Hello<span className="text-gradient">World</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="rounded-xl text-muted-foreground hover:text-foreground">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-primary text-primary-foreground rounded-xl shadow-glow hover:opacity-90">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(38_92%_50%/0.08),transparent_60%)]" />
        <div className="max-w-3xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-6 animate-fade-in-up">
            <Star className="w-4 h-4" /> Instagram for Developer Projects
          </div>
          <h1 className="font-mono font-bold text-4xl md:text-6xl leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Build. Share.<br />
            <span className="text-gradient">Get Hired.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Share your coding projects, get real feedback from peers, and build a portfolio that actually gets you hired. Escape tutorial hell.
          </p>
          <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Link to="/register">
              <Button className="h-12 px-8 bg-gradient-primary text-primary-foreground rounded-xl shadow-glow hover:opacity-90 gap-2 text-base">
                Start Building <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/feed">
              <Button variant="outline" className="h-12 px-8 rounded-xl border-border/50 text-base">
                Explore Feed
              </Button>
            </Link>
          </div>

          {/* Code snippet */}
          <div className="mt-16 bg-card rounded-2xl border border-border/50 p-6 text-left font-mono text-sm max-w-lg mx-auto animate-fade-in-up shadow-card" style={{ animationDelay: "400ms" }}>
            <div className="flex gap-1.5 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
            </div>
            <p className="text-muted-foreground"><span className="text-accent">const</span> project = <span className="text-primary">await</span> buildSomethingReal();</p>
            <p className="text-muted-foreground"><span className="text-accent">const</span> feedback = <span className="text-primary">await</span> shareWithCommunity(project);</p>
            <p className="text-muted-foreground"><span className="text-accent">const</span> career = <span className="text-primary">await</span> getLandedJob(feedback);</p>
            <p className="text-accent mt-2">// → You're hired! 🎉<span className="terminal-cursor text-primary">_</span></p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Rocket, title: "Share Projects", desc: "Upload screenshots, demos, and descriptions of your real projects. Show what you've built." },
            { icon: Users, title: "Get Feedback", desc: "Receive meaningful comments from peers. Improve your code and grow as a developer." },
            { icon: Trophy, title: "Climb Rankings", desc: "Earn engagement points. Top the leaderboard and get discovered by employers." },
          ].map((f, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all group" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-mono font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">HelloWorld © 2026</span>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/admin/login" className="hover:text-foreground">Admin</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
