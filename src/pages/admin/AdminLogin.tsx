import { useState } from "react";
import { Link } from "react-router-dom";
import { Code2, Shield, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="font-mono font-bold text-2xl">Admin Panel</h1>
          <p className="text-sm text-muted-foreground mt-1 font-mono">
            Hello<span className="text-gradient">World</span> · Management
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border/50 p-6 space-y-4">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="email" placeholder="Admin email" className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full h-12 pl-11 pr-12 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <Link to="/admin/dashboard">
              <Button className="w-full h-12 bg-gradient-primary text-primary-foreground font-medium rounded-xl shadow-glow hover:opacity-90 gap-2 mt-2">
                Sign In <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          <Link to="/" className="hover:text-foreground">← Back to Hello World</Link>
        </p>
      </div>
    </div>
  );
}
