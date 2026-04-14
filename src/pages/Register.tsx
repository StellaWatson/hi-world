import { useState } from "react";
import { Link } from "react-router-dom";
import { Code2, Mail, Lock, User, Eye, EyeOff, ArrowRight, Check } from "lucide-react";
import { GithubIcon, GoogleIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  const benefits = [
    "Share projects & build your portfolio",
    "Get real feedback from developers",
    "Climb the leaderboard rankings",
    "Get discovered by employers",
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left - Visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-hero border-r border-border/30 p-12">
        <div className="max-w-md animate-fade-in-up">
          <h2 className="font-mono font-bold text-3xl mb-6">
            Escape <span className="text-gradient">Tutorial Hell</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Stop watching tutorials. Start building real projects and getting hired.
          </p>
          <div className="space-y-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 animate-slide-in-right" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground text-sm">{b}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 p-4 rounded-xl bg-card/50 border border-border/30">
            <div className="text-center">
              <p className="font-mono font-bold text-xl text-primary">2.4K</p>
              <p className="text-xs text-muted-foreground">Developers</p>
            </div>
            <div className="text-center">
              <p className="font-mono font-bold text-xl text-accent">8.1K</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
            <div className="text-center">
              <p className="font-mono font-bold text-xl text-primary">340+</p>
              <p className="text-xs text-muted-foreground">Hired</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in-up">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-mono font-bold text-xl">
              Hello<span className="text-gradient">World</span>
            </span>
          </Link>

          <h1 className="font-mono font-bold text-3xl mb-2">Create account</h1>
          <p className="text-muted-foreground mb-8">
            <span className="font-mono text-accent">$</span> Join the developer community
            <span className="terminal-cursor text-primary">_</span>
          </p>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="h-12 flex items-center justify-center gap-2 rounded-xl bg-card border border-border/50 text-foreground text-sm font-medium hover:bg-secondary transition-colors">
              <GithubIcon className="w-5 h-5" /> GitHub
            </button>
            <button className="h-12 flex items-center justify-center gap-2 rounded-xl bg-card border border-border/50 text-foreground text-sm font-medium hover:bg-secondary transition-colors">
              <GoogleIcon className="w-5 h-5" /> Google
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground font-mono">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input placeholder="Full name" className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-mono">@</span>
                <input placeholder="username" className="w-full h-12 pl-9 pr-4 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-mono" />
              </div>
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="email" placeholder="you@example.com" className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type={showPassword ? "text" : "password"} placeholder="Password (min 8 chars)" className="w-full h-12 pl-11 pr-12 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-border accent-primary mt-0.5" />
              <span className="text-xs text-muted-foreground">
                I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </span>
            </label>

            <Link to="/feed">
              <Button className="w-full h-12 bg-gradient-primary text-primary-foreground font-medium rounded-xl shadow-glow hover:opacity-90 gap-2 mt-2">
                Create Account <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
