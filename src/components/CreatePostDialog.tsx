import { useState } from "react";
import { X, Upload, Plus, ExternalLink, Image, FileVideo, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreatePostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editData?: {
    title: string;
    description: string;
    tools: string[];
    challenges: string;
    githubLink: string;
    liveLink: string;
  };
}

export function CreatePostDialog({ open, onOpenChange, editData }: CreatePostDialogProps) {
  const [title, setTitle] = useState(editData?.title ?? "");
  const [description, setDescription] = useState(editData?.description ?? "");
  const [tools, setTools] = useState<string[]>(editData?.tools ?? []);
  const [toolInput, setToolInput] = useState("");
  const [challenges, setChallenges] = useState(editData?.challenges ?? "");
  const [githubLink, setLink] = useState(editData?.githubLink ?? "");
  const [liveLink, setLiveLink] = useState(editData?.liveLink ?? "");
  const [step, setStep] = useState(1);

  if (!open) return null;

  const addTool = () => {
    if (toolInput.trim() && !tools.includes(toolInput.trim())) {
      setTools([...tools, toolInput.trim()]);
      setToolInput("");
    }
  };

  const removeTool = (tool: string) => {
    setTools(tools.filter((t) => t !== tool));
  };

  const isEdit = !!editData;
  const totalSteps = 3;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => onOpenChange(false)} />

      {/* Dialog */}
      <div className="relative w-full max-w-2xl bg-card border border-border/50 rounded-2xl shadow-card overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-mono font-bold text-lg">{isEdit ? "Update Project" : "Share Your Project"}</h2>
              <p className="text-xs text-muted-foreground">Step {step} of {totalSteps}</p>
            </div>
          </div>
          <button onClick={() => onOpenChange(false)} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-secondary">
          <div className="h-full bg-gradient-primary transition-all duration-300" style={{ width: `${(step / totalSteps) * 100}%` }} />
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {step === 1 && (
            <div className="space-y-5 animate-fade-in-up">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. AI-Powered Code Review Bot"
                  className="w-full h-12 px-4 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe what your project does, why you built it, and what makes it unique..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Upload Media</label>
                <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <Image className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <FileVideo className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Drop screenshots or demo videos here</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG, GIF, MP4 up to 50MB</p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-fade-in-up">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tech Stack & Tools</label>
                <div className="flex gap-2">
                  <input
                    value={toolInput}
                    onChange={(e) => setToolInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTool())}
                    placeholder="e.g. React, Python, Docker..."
                    className="flex-1 h-10 px-4 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-mono"
                  />
                  <Button onClick={addTool} variant="outline" className="rounded-xl border-border/50 h-10">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                {tools.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {tools.map((tool) => (
                      <span key={tool} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-mono">
                        {tool}
                        <button onClick={() => removeTool(tool)} className="hover:text-destructive">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Challenges & Learnings</label>
                <textarea
                  value={challenges}
                  onChange={(e) => setChallenges(e.target.value)}
                  placeholder="What problems did you face? How did you solve them?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none text-sm"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 animate-fade-in-up">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <className="w-4 h-4" /> GitHub Repository
                </label>
                <input
                  value={githubLink}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="https://github.com/username/repo"
                  className="w-full h-12 px-4 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-mono"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <ExternalLink className="w-4 h-4" /> Live Demo URL
                </label>
                <input
                  value={liveLink}
                  onChange={(e) => setLiveLink(e.target.value)}
                  placeholder="https://your-project.vercel.app"
                  className="w-full h-12 px-4 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-mono"
                />
              </div>

              {/* Preview */}
              <div className="rounded-xl border border-border/30 p-4 bg-secondary/50">
                <p className="text-xs text-muted-foreground mb-2 font-mono">// Preview</p>
                <h3 className="font-mono font-bold text-foreground">{title || "Your Project Title"}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description || "Your project description..."}</p>
                {tools.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {tools.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-muted text-xs font-mono text-muted-foreground">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border/30">
          <Button
            variant="ghost"
            onClick={() => (step > 1 ? setStep(step - 1) : onOpenChange(false))}
            className="rounded-xl"
          >
            {step > 1 ? "Back" : "Cancel"}
          </Button>
          <Button
            onClick={() => (step < totalSteps ? setStep(step + 1) : onOpenChange(false))}
            className="bg-gradient-primary text-primary-foreground rounded-xl shadow-glow hover:opacity-90"
          >
            {step < totalSteps ? "Continue" : isEdit ? "Update Project" : "Publish Project"}
          </Button>
        </div>
      </div>
    </div>
  );
}
