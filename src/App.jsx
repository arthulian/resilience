import { useState } from 'react'
import { 
  Brain, 
  Scale, 
  Eye, 
  Heart, 
  UserCircle, 
  ChevronDown,
  Layers,
  Maximize2,
  Minimize2
} from 'lucide-react'

const principles = [
  {
    id: 1,
    title: 'Cognition and Perception',
    icon: Brain,
    color: '#14b8a6',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
    items: [
      { id: '1.1', text: 'Framing distorts perception via cognitive anchors.' },
      { id: '1.2', text: 'Binary thinking oversimplifies; counter with nuance, avoid fallacies/biases.' }
    ]
  },
  {
    id: 2,
    title: 'Evidence and Logical Reasoning',
    icon: Scale,
    color: '#3b82f6',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    items: [
      { id: '2.1', text: 'Trace sources; test evidence.' },
      { id: '2.2', text: 'Absence ≠ proof of absence (except under induction-based expectation).' },
      { id: '2.3', text: 'Question via evidence techniques.' },
      { id: '2.4', text: 'Consistent standards counter biases.' }
    ]
  },
  {
    id: 3,
    title: 'Ethical and Moral',
    icon: Eye,
    color: '#8b5cf6',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    items: [
      { id: '3.1', text: 'Actual harm vs norm conformity.' },
      { id: '3.2', text: 'Weigh intent vs consequences; use role reversal to test fair judgment.' }
    ]
  },
  {
    id: 4,
    title: 'Personal Development and Growth',
    icon: Heart,
    color: '#ec4899',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    items: [
      { id: '4.1', text: 'Build on experiences; learn from errors.' },
      { id: '4.2', text: 'Define values and align them with goals.' }
    ]
  },
  {
    id: 5,
    title: 'Emotional and Self-Regulation',
    icon: UserCircle,
    color: '#f59e0b',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    items: [
      { id: '5.1', text: 'Manage emotional responses before they shape decisions.' },
      { id: '5.2', text: 'Normalize discomfort through gradual, steady exposure.​​​​​​​​​​​​​​​​' }
    ]
  }
]

function App() {
  const [expanded, setExpanded] = useState({})

  const toggleSection = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const expandAll = () => {
    const allExpanded = {}
    principles.forEach(p => allExpanded[p.id] = true)
    setExpanded(allExpanded)
  }

  const collapseAll = () => {
    setExpanded({})
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 mb-6">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-slate-300">Principles Collection</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Outline of Principles
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A framework for critical thinking, ethical reasoning, and personal development
          </p>
        </header>

        {/* Control Buttons */}
        <div className="flex justify-center gap-3 mb-8">
          <button 
            onClick={expandAll}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors text-sm font-medium"
          >
            <Maximize2 className="w-4 h-4" />
            Expand All
          </button>
          <button 
            onClick={collapseAll}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700 transition-colors text-sm font-medium"
          >
            <Minimize2 className="w-4 h-4" />
            Collapse All
          </button>
        </div>

        {/* Cards */}
        <div className="space-y-3">
          {principles.map((section) => {
            const Icon = section.icon
            const isExpanded = expanded[section.id]
            
            return (
              <div 
                key={section.id}
                className="bg-[#111827] rounded-2xl border border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Icon 
                      className="w-6 h-6" 
                      style={{ color: section.color }}
                    />
                    <span 
                      className="text-lg font-semibold"
                      style={{ color: section.color }}
                    >
                      {section.title}
                    </span>
                  </div>
                  <ChevronDown 
                    className="w-5 h-5 text-slate-500 transition-transform duration-300"
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                
                {/* Expanded Content with Pills */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="flex flex-col items-center gap-3">
                      {section.items.map((item, index) => (
                        <div key={item.id} className="flex flex-col items-center gap-3 w-full">
                          {/* Pill */}
                          <div 
                            className={`inline-flex items-center gap-3 px-5 py-3 rounded-full ${section.bgColor} border ${section.borderColor} max-w-full`}
                          >
                            <span 
                              className="text-sm font-mono font-semibold"
                              style={{ color: section.color }}
                            >
                              {item.id}
                            </span>
                            <span className="text-slate-200 text-sm">
                              {item.text}
                            </span>
                          </div>
                          {/* Arrow between pills */}
                          {index < section.items.length - 1 && (
                            <span className="text-slate-600 text-lg">↓</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Outline of Principles — Structured thinking for better decision-making
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Click any card to explore the principles
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
