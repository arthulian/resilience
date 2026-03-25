import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animation on load
    const heroTitle = heroRef.current?.querySelector('h1')
    const heroSubtitle = heroRef.current?.querySelector('p')
    
    if (heroTitle && heroSubtitle) {
      gsap.fromTo(heroTitle, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      )
      gsap.fromTo(heroSubtitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
      )
    }

    // Section reveal animations
    const sections = [section1Ref, section2Ref, section3Ref, footerRef]
    
    sections.forEach((sectionRef) => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.reveal-element')
        
        elements.forEach((el, index) => {
          gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.1
            }
          )
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#F5F5F0]">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="max-w-[800px] w-full text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-[#1A1A1A] mb-8 tracking-tight">
            Mental Frameworks
          </h1>
          <p className="text-lg md:text-xl text-[#555555] font-sans leading-relaxed max-w-[600px] mx-auto">
            A three-phase guide to sharpening thought, stabilizing emotion, and strengthening action.
          </p>
        </div>
      </section>

      {/* Phase One: Intellectual Humility */}
      <section 
        ref={section1Ref}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="max-w-[800px] w-full">
          <h2 className="reveal-element text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
            Phase One
          </h2>
          <h3 className="reveal-element text-xl md:text-2xl font-serif text-[#C4A484] mb-10">
            Intellectual Humility
          </h3>
          
          <div className="space-y-12">
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                Definition & Habits
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Involves being aware you could be wrong, being open to changing your mind with new evidence, and engaging with differing ideas without getting defensive.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                Practical Application
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Valuing truth over being right, basing assertions on evidence rather than feelings, and honestly assessing what you do not know.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                Mental Shift
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Moving from static beliefs (defended at all costs) to dynamic beliefs that are updated based on reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase Two: Equanimity */}
      <section 
        ref={section2Ref}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#EAEAE2]"
      >
        <div className="max-w-[800px] w-full">
          <h2 className="reveal-element text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
            Phase Two
          </h2>
          <h3 className="reveal-element text-xl md:text-2xl font-serif text-[#C4A484] mb-10">
            Equanimity
          </h3>
          
          <div className="space-y-12">
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                Definition & Key Skills
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Achieving mental calm and composure regardless of external circumstances. Use an observer mindset to watch thoughts without judgment.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                Locus of Control
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Focus undivided attention on things you control (beliefs, judgments, actions) and learn to let go of things you cannot control (weather, others' actions, the past).
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                Self-Worth
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                True stability comes from living by your values (fostering a clear conscience), rather than relying on uncontrollable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase Three: Resilience */}
      <section 
        ref={section3Ref}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="max-w-[800px] w-full">
          <h2 className="reveal-element text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
            Phase Three
          </h2>
          <h3 className="reveal-element text-xl md:text-2xl font-serif text-[#C4A484] mb-10">
            Resilience
          </h3>
          
          <div className="space-y-12">
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                Hormesis Principle
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Controlled stressors make a system stronger, whereas avoiding all difficulty leads to atrophy. Seek the "Optimal Stress Zone" to find adaptive challenge.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                Conditions for Growth
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                For stress to be building, it must be moderate, predictable, and allowed time for recovery.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                Confidence Loop
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Building confidence through evidence by taking action, receiving feedback, and adjusting self-assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Summary Section */}
      <section 
        ref={footerRef}
        className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 bg-[#1A1A1A]"
      >
        <div className="max-w-[800px] w-full text-center">
          <h2 className="reveal-element text-3xl font-serif text-[#F5F5F0] mb-12">Summary</h2>
          <div className="reveal-element grid grid-cols-1 md:grid-cols-3 gap-8 text-[#888888] font-sans mb-20">
            <div>
              <span className="text-[#C4A484] block mb-2">Humility</span>
              Sharpens Thinking
            </div>
            <div>
              <span className="text-[#C4A484] block mb-2">Equanimity</span>
              Stabilizes Emotions
            </div>
            <div>
              <span className="text-[#C4A484] block mb-2">Resilience</span>
              Strengthens Actions
            </div>
          </div>
          <p className="reveal-element text-sm text-[#555555] font-sans">
            © 2026 Resilience Frameworks
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
