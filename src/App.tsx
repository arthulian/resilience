import { useState } from 'react'
import { ChevronDown, Brain, Scale, Eye, Heart, UserCircle, Target, Shield, Flame } from 'lucide-react'
import './App.css'

interface CardData {
  id: string
  title: string
  content: string
  accentColor: string
  icon: React.ReactNode
}

const cards: CardData[] = [
  {
    id: 'sense-making',
    title: 'Sense-Making',
    content: 'Extract constant patterns from senses → form symbolic concepts → organize concepts into relational schemas → enable interpretation, inference, and evaluation.',
    accentColor: 'hsl(180 80% 45%)',
    icon: <Brain className="w-6 h-6" />
  },
  {
    id: 'critical-thinking',
    title: 'Critical Thinking',
    content: 'Assess proposition likelihood and evidential warrant → evaluate argument soundness and evidence relevance → clarify relations among claims, evidence, and inferences.',
    accentColor: 'hsl(220 80% 55%)',
    icon: <Scale className="w-6 h-6" />
  },
  {
    id: 'objectivity',
    title: 'Objectivity',
    content: 'Identify uneven evidentiary standards or motives → uniformly apply empirical and rational criteria to all conclusions → via self-critique.',
    accentColor: 'hsl(260 70% 55%)',
    icon: <Eye className="w-6 h-6" />
  },
  {
    id: 'fairness',
    title: 'Fairness',
    content: 'Empathetically weigh actor\'s intent → against accountability for consequences → in reciprocal interactions.',
    accentColor: 'hsl(320 70% 55%)',
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 'self-reflection',
    title: 'Self-Reflection',
    content: 'Separate personal choices from external circumstances → identify recurring patterns and controllable levers → convert insights into action.',
    accentColor: 'hsl(35 90% 50%)',
    icon: <UserCircle className="w-6 h-6" />
  },
  {
    id: 'self-efficacy',
    title: 'Self-Efficacy',
    content: 'Ground belief in past achievements → frame setbacks as temporary skill gaps → periodically reassess skills against objective competence.',
    accentColor: 'hsl(140 70% 45%)',
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 'self-discipline',
    title: 'Self-Discipline',
    content: 'Establish priorities and goals → voluntarily inhibit wants → implement shoulds amid internal conflict → align behavior to long-term objectives.',
    accentColor: 'hsl(210 20% 55%)',
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: 'perseverance',
    title: 'Perseverance',
    content: 'Commit to valued outcomes → override fear-based avoidance → persist in goal-directed action → via gradual exposure and skill-development.',
    accentColor: 'hsl(0 70% 50%)',
    icon: <Flame className="w-6 h-6" />
  }
]

function CollapsibleCard({ card, isOpen, onToggle }: { card: CardData; isOpen: boolean; onToggle: () => void }) {
  return (
    <div 
      className="relative rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, hsl(220 15% 10%) 0%, hsl(220 15% 6%) 100%)',
        boxShadow: isOpen 
          ? `0 0 30px ${card.accentColor}30, 0 4px 20px rgba(0,0,0,0.5)` 
          : '0 4px 20px rgba(0,0,0,0.4)',
        border: `1px solid ${isOpen ? card.accentColor : 'hsl(220 10% 18%)'}`,
      }}
    >
      {/* Accent line at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
        style={{ 
          background: isOpen ? card.accentColor : 'transparent',
          opacity: isOpen ? 1 : 0.3
        }}
      />
      
      {/* Card Header - Always visible */}
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between gap-4 text-left group"
      >
        <div className="flex items-center gap-4">
          <div 
            className="p-3 rounded-lg transition-all duration-300"
            style={{ 
              background: `${card.accentColor}15`,
              color: card.accentColor
            }}
          >
            {card.icon}
          </div>
          <h2 
            className="text-xl font-semibold tracking-tight transition-colors duration-300"
            style={{ color: isOpen ? card.accentColor : 'hsl(0 0% 95%)' }}
          >
            {card.title}
          </h2>
        </div>
        <div 
          className="p-2 rounded-lg transition-all duration-300"
          style={{ 
            background: isOpen ? `${card.accentColor}20` : 'transparent',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          <ChevronDown 
            className="w-5 h-5 transition-colors duration-300"
            style={{ color: isOpen ? card.accentColor : 'hsl(220 10% 50%)' }}
          />
        </div>
      </button>
      
      {/* Collapsible Content */}
      <div 
        className="collapsible-content"
        data-state={isOpen ? 'open' : 'closed'}
        style={{ height: isOpen ? 'auto' : 0 }}
      >
        <div className="px-6 pb-6">
          <div 
            className="pt-2 border-t"
            style={{ borderColor: 'hsl(220 10% 15%)' }}
          >
            <p className="text-base leading-relaxed mt-4" style={{ color: 'hsl(220 10% 75%)' }}>
              {card.content}
            </p>
            
            {/* Process flow visualization */}
            <div className="mt-5 flex flex-wrap gap-2">
              {card.content.split('→').map((step, idx, arr) => (
                <div key={idx} className="flex items-center gap-2">
                  <span 
                    className="px-3 py-1.5 rounded-md text-sm font-medium"
                    style={{ 
                      background: `${card.accentColor}15`,
                      color: card.accentColor,
                      border: `1px solid ${card.accentColor}30`
                    }}
                  >
                    {step.trim().replace(/[.→]$/, '')}
                  </span>
                  {idx < arr.length - 1 && (
                    <span style={{ color: card.accentColor }}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [openCards, setOpenCards] = useState<Set<string>>(new Set())

  const toggleCard = (id: string) => {
    setOpenCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const openAll = () => setOpenCards(new Set(cards.map(c => c.id)))
  const closeAll = () => setOpenCards(new Set())

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Background gradient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, hsl(220 30% 8%) 0%, hsl(220 15% 3%) 100%)'
        }}
      />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ 
              background: 'linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(220 10% 70%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Cognitive Frameworks
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(220 10% 60%)' }}>
            Eight essential mental models for structured thinking and personal development
          </p>
          
          {/* Control buttons */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={openAll}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ 
                background: 'hsl(220 10% 15%)',
                color: 'hsl(0 0% 90%)',
                border: '1px solid hsl(220 10% 25%)'
              }}
            >
              Expand All
            </button>
            <button
              onClick={closeAll}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ 
                background: 'hsl(220 10% 15%)',
                color: 'hsl(0 0% 90%)',
                border: '1px solid hsl(220 10% 25%)'
              }}
            >
              Collapse All
            </button>
          </div>
        </header>

        {/* Cards Grid */}
        <div className="space-y-4">
          {cards.map((card) => (
            <CollapsibleCard
              key={card.id}
              card={card}
              isOpen={openCards.has(card.id)}
              onToggle={() => toggleCard(card.id)}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center" style={{ color: 'hsl(220 10% 40%)' }}>
          <p className="text-sm">
            Click on any card to expand and view the detailed process flow
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
