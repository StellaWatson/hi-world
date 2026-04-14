import { useState } from "react";
import { Link } from "react-router-dom";
import { Code2, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { GithubIcon, GoogleIcon } from "@/components/icons";
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
              <GithubIcon className="w-5 h-5" />
              Continue with GitHub
            </button>
            <button className="w-full h-12 flex items-center justify-center gap-3 rounded-xl bg-card border border-border/50 text-foreground font-medium hover:bg-secondary transition-colors">
              <GoogleIcon className="w-5 h-5" />
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
