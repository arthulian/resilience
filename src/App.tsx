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
            Rational Fortitude
          </h1>
          <p className="text-lg md:text-xl text-[#555555] font-sans leading-relaxed max-w-[600px] mx-auto">
            A blueprint for constructing a resilient mental framework.
          </p>
        </div>
      </section>

      {/* Section 1: The Foundation */}
      <section 
        ref={section1Ref}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="max-w-[800px] w-full">
          <h2 className="reveal-element text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4 heading-hover">
            The Foundation
          </h2>
          <h3 className="reveal-element text-xl md:text-2xl font-serif text-[#555555] mb-10">
            Grounding in Reality
          </h3>
          <p className="reveal-element text-lg text-[#555555] font-sans leading-relaxed mb-12">
            Before you can be strong, you must be honest. This phase uses a scientific approach to filter your beliefs.
          </p>
          
          <div className="reveal-element mb-8">
            <h4 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-6">
              Pillars of Truth
            </h4>
          </div>
          
          <div className="space-y-8">
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                1. Logical Chain
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Assertions must derive directly from supporting facts.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                2. Empirical Grounding
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Claims must be based on measurable, reproducible data.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                3. Graduated Confidence
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Your degree of confidence should match the reliability of evidence.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                4. Falsifiability
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Actively seek counterevidence to test your own hypotheses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Framework */}
      <section 
        ref={section2Ref}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="max-w-[800px] w-full">
          <h2 className="reveal-element text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4 heading-hover">
            The Framework
          </h2>
          <h3 className="reveal-element text-xl md:text-2xl font-serif text-[#555555] mb-10">
            Mastering Your Mind
          </h3>
          <p className="reveal-element text-lg text-[#555555] font-sans leading-relaxed mb-12">
            Once grounded, you build an internal filter to process the world without losing your cool.
          </p>
          
          <div className="reveal-element mb-8">
            <h4 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-6">
              Internal Framework Principles
            </h4>
          </div>
          
          <div className="space-y-8">
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                1. Observer Mindset
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Cultivate the ability to observe your thoughts and emotions without immediate judgement.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                2. Locus of Control
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Focus your energy on your effort/work, not on what you cannot control.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                3. Decoupling
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Separate your sense of self-worth from setbacks and opinions.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                4. Value Consistency
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Align your actions with your core values, regardless of external pressure.
              </p>
            </div>
          </div>
          
          <div className="reveal-element mt-16 pl-6 border-l-2 border-[#C4A484]">
            <p className="text-xl md:text-2xl font-serif italic text-[#1A1A1A] leading-relaxed">
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Action & Reinforcement */}
      <section 
        ref={section3Ref}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="max-w-[800px] w-full">
          <h2 className="reveal-element text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4 heading-hover">
            Action & Reinforcement
          </h2>
          <h3 className="reveal-element text-xl md:text-2xl font-serif text-[#555555] mb-10">
            Forging True Strength
          </h3>
          <p className="reveal-element text-lg text-[#555555] font-sans leading-relaxed mb-12">
            Resilience isn't a thought—it's a muscle built through stress.
          </p>
          
          <div className="reveal-element mb-8">
            <h4 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-6">
              Reinforce Fortitude
            </h4>
          </div>
          
          <div className="space-y-8">
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                1. Self-Accountability
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Weigh immediate intentions against long-term consequences.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                2. Evidence-Based
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Proportion your confidence to your demonstrated competence.
              </p>
            </div>
            
            <div className="reveal-element">
              <h5 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">
                3. Hormesis
              </h5>
              <p className="text-base text-[#555555] font-sans leading-relaxed">
                Use controlled exposure to challenges to enhance adaptability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section 
        ref={footerRef}
        className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 bg-[#1A1A1A]"
      >
        <div className="max-w-[800px] w-full text-center">
          <p className="reveal-element text-2xl md:text-3xl lg:text-4xl font-serif text-[#F5F5F0] leading-relaxed mb-12">
          </p>
          <p className="reveal-element text-sm text-[#888888] font-sans">
            © 2024 Rational Fortitude
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
