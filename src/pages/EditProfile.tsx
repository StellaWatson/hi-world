import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { mockUser } from "@/lib/mockData";
import { Camera, Save, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EditProfile() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    displayName: mockUser.displayName,
    username: mockUser.username,
    bio: mockUser.bio,
    title: mockUser.title,
    location: mockUser.location,
    github: mockUser.github,
    linkedin: mockUser.linkedin,
    website: mockUser.website,
  });
  const [skills, setSkills] = useState(mockUser.skills);
  const [skillInput, setSkillInput] = useState("");

  const update = (key: string, value: string) => setForm({ ...form, [key]: value });
  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const inputClass = "w-full h-12 px-4 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 pt-20 pb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-mono font-bold text-2xl">Edit Profile</h1>
          <Link to="/profile">
            <Button variant="ghost" className="rounded-xl gap-2">
              <X className="w-4 h-4" /> Cancel
            </Button>
          </Link>
        </div>

        <div className="bg-card rounded-2xl border border-border/50 p-6 space-y-6">
          {/* Avatar */}
          <div className="flex items-center gap-5">
            <div className="relative">
              <img src={mockUser.avatar} alt="" className="w-20 h-20 rounded-2xl object-cover" />
              <button className="absolute -bottom-1 -right-1 w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Camera className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
            <div>
              <p className="font-medium text-foreground">Profile Photo</p>
              <p className="text-xs text-muted-foreground">JPG, PNG. Max 5MB.</p>
            </div>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Display Name</label>
              <input value={form.displayName} onChange={(e) => update("displayName", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Username</label>
              <input value={form.username} onChange={(e) => update("username", e.target.value)} className={`${inputClass} font-mono`} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Title</label>
            <input value={form.title} onChange={(e) => update("title", e.target.value)} placeholder="e.g. Full-Stack Developer" className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
            <textarea value={form.bio} onChange={(e) => update("bio", e.target.value)} rows={3} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Location</label>
            <input value={form.location} onChange={(e) => update("location", e.target.value)} className={inputClass} />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Skills</label>
            <div className="flex gap-2 mb-3">
              <input
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                placeholder="Add a skill..."
                className={`${inputClass} font-mono flex-1`}
              />
              <Button onClick={addSkill} variant="outline" className="rounded-xl h-12">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-mono">
                  {s}
                  <button onClick={() => setSkills(skills.filter((x) => x !== s))} className="hover:text-destructive"><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">GitHub</label>
              <input value={form.github} onChange={(e) => update("github", e.target.value)} className={`${inputClass} font-mono`} />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">LinkedIn</label>
              <input value={form.linkedin} onChange={(e) => update("linkedin", e.target.value)} className={`${inputClass} font-mono`} />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Website</label>
              <input value={form.website} onChange={(e) => update("website", e.target.value)} className={`${inputClass} font-mono`} />
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-border/30">
            <Button onClick={() => navigate("/profile")} className="bg-gradient-primary text-primary-foreground rounded-xl shadow-glow hover:opacity-90 gap-2">
              <Save className="w-4 h-4" /> Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
