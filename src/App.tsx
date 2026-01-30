import { useState, useMemo } from 'react';
import { 
  Brain, 
  Scale, 
  Eye, 
  Heart, 
  UserCircle, 
  Target, 
  Shield, 
  Flame,
  ChevronDown,
  Expand,
  Minimize,
  Sparkles,
  Lightbulb,
  Search,
  CheckCircle,
  TrendingUp,
  Zap,
  Flag,
  Activity
} from 'lucide-react';
import './App.css';

interface Framework {
  id: string;
  title: string;
  content: string;
  accentColor: string;
  Icon: React.ElementType;
}

const frameworks: Framework[] = [
  {
    id: 'sense-making',
    title: 'Sense-Making',
    content: 'Extract constant patterns from situations or circumstances → form symbolic concepts → organize concepts into relational schemas → enable interpretation, inference, and evaluation.',
    accentColor: 'hsl(180 80% 45%)',
    Icon: Brain,
  },
  {
    id: 'critical-thinking',
    title: 'Critical Thinking',
    content: 'Assess proposition likelihood and evidential warrant → evaluate argument soundness and evidence relevance → clarify relations among claims, evidence, and inferences.',
    accentColor: 'hsl(220 80% 55%)',
    Icon: Scale,
  },
  {
    id: 'objectivity',
    title: 'Objectivity',
    content: 'Identify uneven evidentiary standards or motives → uniformly apply empirical and rational criteria to all conclusions → via self-critique.',
    accentColor: 'hsl(260 70% 55%)',
    Icon: Eye,
  },
  {
    id: 'fairness',
    title: 'Fairness',
    content: 'Empathetically weigh actor\'s intent → against accountability for consequences → in reciprocal interactions.',
    accentColor: 'hsl(320 70% 55%)',
    Icon: Heart,
  },
  {
    id: 'self-reflection',
    title: 'Self-Reflection',
    content: 'Separate personal choices from external circumstances → identify recurring patterns and controllable levers within yourself → convert insights into action.',
    accentColor: 'hsl(35 90% 50%)',
    Icon: UserCircle,
  },
  {
    id: 'self-efficacy',
    title: 'Self-Efficacy',
    content: 'Ground belief in past achievements → frame setbacks as temporary skill gaps → periodically reassess skills against objective competence.',
    accentColor: 'hsl(140 70% 45%)',
    Icon: Target,
  },
  {
    id: 'self-discipline',
    title: 'Self-Discipline',
    content: 'Establish priorities and goals → voluntarily inhibit wants → implement shoulds amid internal conflict → align behavior to long-term objectives.',
    accentColor: 'hsl(210 20% 55%)',
    Icon: Shield,
  },
  {
    id: 'perseverance',
    title: 'Perseverance',
    content: 'Commit to valued outcomes → override fear-based avoidance → persist in goal-directed action → via gradual exposure and skill-development.',
    accentColor: 'hsl(0 70% 50%)',
    Icon: Flame,
  },
];

// Map step keywords to mini icons
function getStepIcon(stepText: string): React.ElementType | null {
  const lower = stepText.toLowerCase();
  if (lower.includes('pattern') || lower.includes('senses') || lower.includes('concept')) return Brain;
  if (lower.includes('assess') || lower.includes('evaluate') || lower.includes('warrant') || lower.includes('soundness')) return Scale;
  if (lower.includes('identify') || lower.includes('criteria') || lower.includes('critique')) return Eye;
  if (lower.includes('empath') || lower.includes('intent') || lower.includes('accountab') || lower.includes('reciprocal')) return Heart;
  if (lower.includes('separate') || lower.includes('choice') || lower.includes('circumstance') || lower.includes('insight')) return UserCircle;
  if (lower.includes('ground') || lower.includes('achievement') || lower.includes('skill') || lower.includes('competence')) return Target;
  if (lower.includes('establish') || lower.includes('priorit') || lower.includes('goal') || lower.includes('inhibit') || lower.includes('implement')) return Shield;
  if (lower.includes('commit') || lower.includes('outcome') || lower.includes('persist') || lower.includes('exposure')) return Flame;
  if (lower.includes('extract') || lower.includes('form') || lower.includes('organize')) return Sparkles;
  if (lower.includes('interpret') || lower.includes('inference')) return Lightbulb;
  if (lower.includes('clarify') || lower.includes('relation')) return Search;
  if (lower.includes('convert') || lower.includes('action')) return CheckCircle;
  if (lower.includes('frame') || lower.includes('temporary')) return TrendingUp;
  if (lower.includes('align') || lower.includes('long-term')) return Flag;
  if (lower.includes('override') || lower.includes('avoidance')) return Zap;
  if (lower.includes('apply') || lower.includes('uniform')) return Activity;
  return null;
}

function StepChip({ 
  step, 
  index, 
  accentColor, 
  totalSteps 
}: { 
  step: string; 
  index: number; 
  accentColor: string;
  totalSteps: number;
}) {
  const StepIcon = getStepIcon(step);
  const isLast = index === totalSteps - 1;
  
  return (
    <div 
      className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-400"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className="step-chip"
        style={{
          backgroundColor: `${accentColor}25`,
          borderColor: accentColor,
          color: '#ffffff',
          boxShadow: `0 0 20px -8px ${accentColor}50, inset 0 1px 0 ${accentColor}30`,
        }}
      >
        <span 
          className="inline-flex w-6 h-6 rounded-full items-center justify-center text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: accentColor, color: '#0f172a' }}
        >
          {index + 1}
        </span>
        {StepIcon && <StepIcon className="w-4 h-4 flex-shrink-0" style={{ color: accentColor }} />}
        <span className="text-base font-medium tracking-tight">{step.trim()}</span>
      </div>
      {!isLast && (
        <span 
          className="arrow-connector text-xl font-bold"
          style={{ color: accentColor }}
        >
          ↓
        </span>
      )}
    </div>
  );
}

function FrameworkCard({
  framework,
  isOpen,
  onToggle,
}: {
  framework: Framework;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const steps = useMemo(() => framework.content.split('→'), [framework.content]);
  
  return (
    <div className="group">
      <div
        className={`framework-card rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
          isOpen ? 'expanded' : 'collapsed'
        }`}
        style={{
          borderColor: isOpen ? framework.accentColor : `${framework.accentColor}50`,
          backgroundColor: isOpen ? `${framework.accentColor}15` : `${framework.accentColor}08`,
          boxShadow: isOpen 
            ? `0 0 50px -10px ${framework.accentColor}60, inset 0 1px 0 ${framework.accentColor}30`
            : `0 4px 25px -5px ${framework.accentColor}25, inset 0 1px 0 ${framework.accentColor}15`,
          ['--glow-color' as string]: `${framework.accentColor}50`,
        }}
      >
        <button
          onClick={onToggle}
          className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left"
          aria-expanded={isOpen}
          aria-controls={`content-${framework.id}`}
        >
          <div className="flex items-center gap-4">
            <div
              className="icon-wrapper w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
              style={{ 
                backgroundColor: `${framework.accentColor}30`,
                color: framework.accentColor,
                boxShadow: `0 0 20px -5px ${framework.accentColor}40`,
              }}
            >
              <framework.Icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 
              className="text-lg sm:text-xl font-bold tracking-tight"
              style={{ color: framework.accentColor }}
            >
              {framework.title}
            </h3>
          </div>
          <div
            className="chevron-wrapper w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{ 
              backgroundColor: isOpen ? `${framework.accentColor}40` : `${framework.accentColor}15`,
              color: framework.accentColor,
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              boxShadow: isOpen ? `0 0 15px -3px ${framework.accentColor}50` : 'none',
            }}
          >
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
        
        {isOpen && (
          <div 
            id={`content-${framework.id}`}
            className="border-t animate-in fade-in duration-500"
            style={{ 
              borderColor: `${framework.accentColor}40`,
              paddingTop: '1.5rem',
              paddingBottom: '0.5rem',
            }}
          >
            <div className="px-5 sm:px-6 pb-6">
              {/* Steps Flow */}
              <div className="mt-6 flex flex-wrap gap-3 animate-in fade-in duration-500">
                {steps.map((step, idx) => (
                  <StepChip
                    key={idx}
                    step={step}
                    index={idx}
                    accentColor={framework.accentColor}
                    totalSteps={steps.length}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [openCards, setOpenCards] = useState<Set<string>>(new Set());

  const toggleCard = (id: string) => {
    setOpenCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setOpenCards(new Set(frameworks.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenCards(new Set());
  };

  const allExpanded = openCards.size === frameworks.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(220 80% 55% / 0.3), transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(180 80% 45% / 0.25), transparent 70%)' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(260 70% 55% / 0.2), transparent 60%)' }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-slate-300">Mental Models Collection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Cognitive Frameworks
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Eight essential mental models for structured thinking, decision-making, and personal development
            </p>
          </div>
        </header>

        {/* Control Buttons */}
        <div className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex justify-center gap-3">
            <button
              onClick={expandAll}
              disabled={allExpanded}
              className="control-btn expand-btn"
              aria-label="Expand all cards"
            >
              <Expand className="w-4 h-4" />
              <span>Expand All</span>
            </button>
            <button
              onClick={collapseAll}
              disabled={openCards.size === 0}
              className="control-btn collapse-btn"
              aria-label="Collapse all cards"
            >
              <Minimize className="w-4 h-4" />
              <span>Collapse All</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <main className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 max-w-5xl mx-auto">
            {frameworks.map((framework) => (
              <FrameworkCard
                key={framework.id}
                framework={framework}
                isOpen={openCards.has(framework.id)}
                onToggle={() => toggleCard(framework.id)}
              />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm text-slate-500">
              Cognitive Frameworks — Structured thinking for better decision-making
            </p>
            <p className="text-xs text-slate-600 mt-2">
              Click any card to explore the cognitive process
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
