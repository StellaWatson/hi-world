import { useState } from "react";
import { Link } from "react-router-dom";
import { Code2, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in-up">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-mono font-bold text-xl">
              Hello<span className="text-gradient">World</span>
            </span>
          </Link>

          <h1 className="font-mono font-bold text-3xl mb-2">Welcome back</h1>
          <p className="text-muted-foreground mb-8">
            <span className="font-mono text-accent">$</span> Log in to continue building
            <span className="terminal-cursor text-primary">_</span>
          </p>

          {/* Social login */}
          <div className="space-y-3 mb-6">
            <button className="w-full h-12 flex items-center justify-center gap-3 rounded-xl bg-card border border-border/50 text-foreground font-medium hover:bg-secondary transition-colors">
              <className="w-5 h-5" />
              Continue with GitHub
            </button>
            <button className="w-full h-12 flex items-center justify-center gap-3 rounded-xl bg-card border border-border/50 text-foreground font-medium hover:bg-secondary transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Continue with Google
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground font-mono">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Email login */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full h-12 pl-11 pr-12 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border accent-primary" />
                <span className="text-sm text-muted-foreground">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
            </div>

            <Link to="/feed">
              <Button className="w-full h-12 bg-gradient-primary text-primary-foreground font-medium rounded-xl shadow-glow hover:opacity-90 gap-2 mt-2">
                Sign In <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline font-medium">Sign up</Link>
          </p>
        </div>
      </div>

      {/* Right - Visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-hero border-l border-border/30 p-12">
        <div className="max-w-md text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 animate-float">
            <Code2 className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="font-mono font-bold text-2xl mb-4">Build. Share. Get Hired.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Share your coding projects, get real feedback from peers, and build a portfolio that actually gets you hired.
          </p>

          {/* Code snippet */}
          <div className="mt-8 bg-card/80 backdrop-blur rounded-xl border border-border/50 p-4 text-left font-mono text-sm">
            <div className="flex gap-1.5 mb-3">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
            </div>
            <p className="text-muted-foreground"><span className="text-accent">const</span> career = <span className="text-primary">await</span> <span className="text-accent">buildProjects</span>();</p>
            <p className="text-muted-foreground"><span className="text-accent">const</span> feedback = <span className="text-primary">await</span> <span className="text-accent">shareWithPeers</span>();</p>
            <p className="text-muted-foreground"><span className="text-accent">const</span> job = <span className="text-primary">await</span> <span className="text-accent">getHired</span>(career, feedback);</p>
            <p className="text-accent mt-1">// → 🎉 Success!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
