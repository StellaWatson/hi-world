import { useState, useEffect } from "react";
import { X, Rocket, MessageSquare, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Rocket,
    title: "Loyihalaringizni ko'rsating",
    titleEn: "Showcase Your Projects",
    desc: "Share what you've built — side projects, hackathon wins, or experiments. Get real feedback from fellow developers.",
  },
  {
    icon: MessageSquare,
    title: "Engage & Connect",
    titleEn: "Like, Comment & Collaborate",
    desc: "Give feedback on projects you love. Comment, star, and connect with developers who inspire you.",
  },
  {
    icon: Star,
    title: "Get Recognized",
    titleEn: "Climb the Leaderboard",
    desc: "Earn points through engagement. Top developers get featured and discovered by the community.",
  },
];

export function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const seen = localStorage.getItem("hw_welcome_seen");
    if (!seen) {
      const timer = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("hw_welcome_seen", "true");
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleClose();
    }
  };

  if (!open) return null;

  const current = steps[step];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-card border border-border/50 rounded-2xl shadow-2xl animate-fade-in-up overflow-hidden">
        {/* Close */}
        <button onClick={handleClose} className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-secondary transition-colors z-10">
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative p-8 pt-10 text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
            <current.icon className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Greeting on first step */}
          {step === 0 && (
            <p className="text-sm text-primary font-mono mb-2 animate-fade-in">
              👋 Welcome to HelloWorld!
            </p>
          )}

          <h2 className="font-mono font-bold text-xl mb-2">{current.titleEn}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm mx-auto">
            {current.desc}
          </p>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === step ? "w-8 bg-primary" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {step < steps.length - 1 ? (
              <>
                <Button variant="ghost" onClick={handleClose} className="flex-1 rounded-xl text-muted-foreground">
                  Skip
                </Button>
                <Button onClick={handleNext} className="flex-1 bg-gradient-primary text-primary-foreground rounded-xl shadow-glow hover:opacity-90 gap-2">
                  Next <ArrowRight className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Button onClick={handleClose} className="w-full bg-gradient-primary text-primary-foreground rounded-xl shadow-glow hover:opacity-90 gap-2">
                Start Exploring <Rocket className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
