import React, { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
  Bot,
  ShieldCheck,
  Workflow,
  LineChart,
  Database,
  Plug,
  PlayCircle,
  ArrowRight,
  Check,
  MessageSquare,
  Mail,
  Sparkles,
  Terminal,
  Users,
  Building2,
  Gauge,
} from 'lucide-react'

const brand = {
  primary: '#3B82F6',
  primaryTo: '#60A5FA',
  secondary: '#A78BFA',
  accent: '#2EE6D6',
  bgDark: '#0D0F14',
  bgLight: '#FAFAFA',
  surface: 'rgba(17,19,24,0.7)',
  text: '#FFFFFF',
  textMuted: '#A1A1AA',
  divider: 'rgba(255,255,255,0.08)'
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function GlowButton({ children, variant = 'primary' }) {
  const base = 'group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-500 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  if (variant === 'ghost') {
    return (
      <button className={`${base} border border-white/10 bg-white/5 text-white/90 backdrop-blur-xl hover:bg-white/10`}>{children}</button>
    )
  }
  return (
    <button className={`${base} text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_40px_-8px_rgba(59,130,246,0.6)]`} style={{
      background: `linear-gradient(135deg, ${brand.primary}, ${brand.primaryTo})`
    }}>{children}</button>
  )
}

function SectionTitle({ kicker, title, sub }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && <div className="mb-3 text-sm tracking-widest text-white/60">{kicker}</div>}
      <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base sm:text-lg text-white/70">{sub}</p>}
    </div>
  )
}

function FrostCard({ children, className = '' }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-[rgba(17,19,24,0.6)] backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.5)] ${className}`}>
      {children}
    </div>
  )
}

function FloatingAgent({ icon: Icon, title, glow, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      className="pointer-events-none absolute hidden md:block"
      style={{ filter: 'drop-shadow(0 12px 30px rgba(46,230,214,0.25))' }}
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
        <div
          className="rounded-2xl p-3"
          style={{
            background: `radial-gradient(120px circle at 40% 20%, ${glow}44, transparent 60%)`,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-black/40 p-2">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm text-white/90">{title}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function LogoRow() {
  const logos = ['Vercel','Linear','Anthropic','Notion','Figma']
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
      {logos.map((l, i) => (
        <div key={i} className="text-white/60 text-sm sm:text-base">{l}</div>
      ))}
    </div>
  )
}

function FeaturesBento() {
  const features = [
    { icon: Bot, title: 'Agent Builder', desc: 'Spin up autonomous agents with roles and personalities.', glow: brand.secondary },
    { icon: Workflow, title: 'Workflow Designer', desc: 'Drag-and-drop tasks, tools, and decision nodes.', glow: brand.primary },
    { icon: LineChart, title: 'Real-Time Analytics', desc: 'Latency, CSAT, conversion, and resolution metrics.', glow: brand.accent },
    { icon: ShieldCheck, title: 'AI Guardrails', desc: 'Policies, restricted topics, approval steps.', glow: '#22d3ee' },
    { icon: Database, title: 'Knowledge Training', desc: 'Upload docs, websites, and structured data.', glow: '#f59e0b' },
    { icon: Plug, title: 'Integrations', desc: 'Slack, Email, Web, and API webhooks.', glow: '#34d399' },
  ]
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionTitle kicker="FEATURES" title="A bento of superpowers" sub="Everything you need to design, govern, and deploy AI employees across your org." />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f, idx) => (
          <motion.div key={idx} variants={item}>
            <FrostCard className="group h-full p-6 transition-all duration-500 hover:translate-y-[-2px] hover:shadow-[0_20px_80px_rgba(59,130,246,0.18)]">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl p-2" style={{ background: `linear-gradient(135deg, ${f.glow}33, transparent)` }}>
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-white/70">{f.desc}</p>
              <div className="mt-6 h-28 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-[rgba(46,230,214,0.5)] group-hover:shadow-[0_0_0_1px_rgba(46,230,214,0.35),0_10px_30px_rgba(46,230,214,0.15)]" />
            </FrostCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'Create your agent', desc: 'Pick a role, plug knowledge, set tone and guardrails.', icon: Sparkles },
    { title: 'Define workflows & guardrails', desc: 'Compose steps, tools, and safety gates visually.', icon: Workflow },
    { title: 'Deploy anywhere', desc: 'Embed on web, connect Slack/Email, or call via API.', icon: Plug },
  ]
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionTitle kicker="HOW IT WORKS" title="Three steps to autonomous impact" />
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
            <FrostCard className="p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/5 p-2">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              </div>
              <p className="mt-3 text-white/70">{s.desc}</p>
              <div className="mt-6 h-24 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent" />
            </FrostCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function DashboardShowcase() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionTitle kicker="SHOWCASE" title="Mission control for your AI workforce" sub="Track performance, audit conversations, and iterate safely — all in one dark, neon-tuned dashboard." />
      <FrostCard className="mt-12 overflow-hidden p-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <FrostCard className="p-5">
              <div className="flex items-center justify-between">
                <div className="text-white/70 text-sm">Success Rate</div>
                <Gauge className="h-4 w-4 text-white/60" />
              </div>
              <div className="mt-2 text-4xl font-semibold text-white">97.3%</div>
              <div className="mt-3 h-24 rounded-lg bg-gradient-to-r from-sky-500/30 to-purple-400/20" />
            </FrostCard>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Conversations', value: '12,481' },
                { label: 'Avg. Latency', value: '1.2s' },
                { label: 'Tasks Completed', value: '8,932' },
              ].map((m, i) => (
                <FrostCard key={i} className="p-4">
                  <div className="text-xs text-white/60">{m.label}</div>
                  <div className="mt-2 font-mono text-2xl text-white">{m.value}</div>
                </FrostCard>
              ))}
            </div>
            <FrostCard className="p-5">
              <div className="flex items-center gap-2 text-white/70 text-sm"><Terminal className="h-4 w-4" /> Task Timeline</div>
              <div className="mt-4 space-y-3">
                {["Classify intent","Retrieve docs","Generate draft","Ask approval","Send reply"].map((t, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/80">
                    <span>{t}</span>
                    <span className="text-white/50">✓</span>
                  </div>
                ))}
              </div>
            </FrostCard>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <FrostCard className="p-5">
              <div className="flex items-center gap-2 text-white/70 text-sm"><MessageSquare className="h-4 w-4" /> Conversations</div>
              <div className="mt-3 space-y-3">
                {[
                  { who: 'User', text: 'Can you draft a reply for ticket #482?' },
                  { who: 'Agent', text: 'Proposed response ready. Want to approve?' },
                  { who: 'User', text: 'Looks good — send it.' },
                ].map((c, i) => (
                  <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm">
                    <div className="text-white/60">{c.who}</div>
                    <div className="text-white/90">{c.text}</div>
                  </div>
                ))}
              </div>
            </FrostCard>
            <FrostCard className="p-5">
              <div className="flex items-center gap-2 text-white/70 text-sm"><Database className="h-4 w-4" /> Training Data</div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" style={{ width: '68%' }} />
              </div>
              <div className="mt-2 text-right text-xs text-white/60">68% indexed</div>
            </FrostCard>
            <FrostCard className="p-5">
              <div className="flex items-center gap-2 text-white/70 text-sm"><Sparkles className="h-4 w-4" /> AI Recommendations</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/80">
                <li>Enable approval gate for refund intents.</li>
                <li>Add competitor FAQ to knowledge base.</li>
                <li>Connect CRM to track conversions.</li>
              </ul>
            </FrostCard>
          </div>
        </div>
      </FrostCard>
    </section>
  )
}

function UseCases() {
  const cases = [
    { title: 'AI Customer Support', pts: ['24/7 responses','Accurate retrieval','Supervisor handoff'], icon: MessageSquare },
    { title: 'AI Sales Agent', pts: ['Qualify leads','Book meetings','Follow-ups'], icon: Users },
    { title: 'AI Research Assistant', pts: ['Multi-source synthesis','Citations','Deep dives'], icon: Sparkles },
    { title: 'AI Content Producer', pts: ['Brand tone','Multi-format','Review flows'], icon: Terminal },
    { title: 'AI HR Assistant', pts: ['Policy Q&A','Onboarding','Benefits help'], icon: Building2 },
  ]
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionTitle kicker="USE CASES" title="Agents for every team" />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.6 }}>
            <FrostCard className="group p-6 transition-transform duration-500 hover:translate-y-[-2px]">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/5 p-2"><c.icon className="h-6 w-6 text-white" /></div>
                <h3 className="text-xl font-semibold text-white">{c.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-white/75">
                {c.pts.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-400" /> <span>{p}</span></li>
                ))}
              </ul>
            </FrostCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$29', desc: 'For individuals and small projects', features: ['1 agent','Basic workflows','Community support'], cta: 'Start Free' },
    { name: 'Pro', price: '$99', desc: 'For growing teams', features: ['5 agents','Advanced workflows','Analytics & guardrails'], cta: 'Upgrade' },
    { name: 'Enterprise', price: 'Custom', desc: 'Security and scale', features: ['Unlimited agents','SSO/SAML','Dedicated support'], cta: 'Contact Sales' },
  ]
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionTitle kicker="PRICING" title="Simple, scalable plans" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <FrostCard key={i} className={`p-6 ${i===1 ? 'ring-1 ring-sky-400/40 shadow-[0_0_0_1px_rgba(46,230,214,0.35),0_30px_120px_-20px_rgba(59,130,246,0.35)]' : ''}`}>
            <div className="text-white/70">{t.name}</div>
            <div className="mt-2 text-4xl font-semibold text-white">{t.price}</div>
            <div className="mt-1 text-white/60">{t.desc}</div>
            <ul className="mt-4 space-y-2">
              {t.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white/80"><Check className="h-4 w-4 text-emerald-400" /> {f}</li>
              ))}
            </ul>
            <div className="mt-6">
              {i===1 ? (
                <GlowButton><span>{t.cta}</span><ArrowRight className="h-4 w-4" /></GlowButton>
              ) : (
                <GlowButton variant="ghost"><span className="text-white">{t.cta}</span><ArrowRight className="h-4 w-4 text-white" /></GlowButton>
              )}
            </div>
          </FrostCard>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    { name: 'Maya Chen', role: 'Head of Support, Nova', text: 'We replaced 60% of first-line tickets within a month — CSAT went up.' },
    { name: 'Arjun Patel', role: 'RevOps, Helix', text: 'Automated follow-ups booked 3x more meetings for our AEs.' },
    { name: 'Sara Lopez', role: 'CTO, Lumen', text: 'Guardrails made our security team fans instead of blockers.' },
  ]
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionTitle kicker="WHAT TEAMS SAY" title="Loved by modern teams" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 * i }}>
            <FrostCard className="p-6 border-white/20">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-400 to-purple-400" />
              <p className="mt-4 text-white/90">“{t.text}”</p>
              <div className="mt-4 text-sm text-white/60">{t.name} · {t.role}</div>
            </FrostCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold text-white">Agent-in-a-Box</div>
            <div className="mt-2 text-white/60">Empower humans. Deploy AI.</div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-2 text-white/70">
              <div className="text-white/60">Product</div>
              <a href="#" className="block hover:text-white">Features</a>
              <a href="#" className="block hover:text-white">Pricing</a>
              <a href="#" className="block hover:text-white">Docs</a>
            </div>
            <div className="space-y-2 text-white/70">
              <div className="text-white/60">Company</div>
              <a href="#" className="block hover:text-white">About</a>
              <a href="#" className="block hover:text-white">Careers</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
            <div className="space-y-2 text-white/70">
              <div className="text-white/60">Social</div>
              <a href="#" className="block hover:text-white">Twitter/X</a>
              <a href="#" className="block hover:text-white">LinkedIn</a>
              <a href="#" className="block hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/40">© {new Date().getFullYear()} Agent-in-a-Box. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  // cursor parallax for hero cards
  const cx = useMotionValue(0)
  const cy = useMotionValue(0)
  const rotateX = useTransform(cy, [-50, 50], [8, -8])
  const rotateY = useTransform(cx, [-50, 50], [-8, 8])

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX - innerWidth / 2) / (innerWidth / 2)
    const y = (e.clientY - innerHeight / 2) / (innerHeight / 2)
    cx.set(x * 50)
    cy.set(y * 50)
  }

  const gradientMask = useMemo(() => ({
    background: `radial-gradient(600px circle at 50% 10%, ${brand.primary}22, transparent 60%)`
  }), [])

  return (
    <div className="min-h-screen bg-[#0D0F14] text-white" onMouseMove={handleMouseMove}>
      {/* top glow */}
      <div className="pointer-events-none fixed inset-0" style={gradientMask} />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-sky-400 to-purple-400" />
            <span className="text-sm font-semibold tracking-wide">Agent-in-a-Box</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#testimonials" className="hover:text-white">Stories</a>
          </div>
          <div className="flex items-center gap-3">
            <GlowButton variant="ghost"><span className="text-white">Sign in</span></GlowButton>
            <GlowButton>Get Started</GlowButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">AI Employee Builder</div>
              <h1 className="mt-6 text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
                Build AI Employees in Minutes — Automate Everything.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
                Create autonomous AI agents for support, sales, research, and content. Fully trained, fully customizable, fully automated.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <GlowButton>
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </GlowButton>
                <GlowButton variant="ghost">
                  <PlayCircle className="h-4 w-4 text-white" />
                  <span className="text-white">Watch Demo</span>
                </GlowButton>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto mt-12 h-[420px] w-full max-w-5xl">
              {/* 3D Spline on desktop */}
              <div className="hidden h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl md:block">
                <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
              {/* Static gradient blob on mobile */}
              <div className="md:hidden h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-sky-500/20 via-purple-500/20 to-transparent" />

              {/* Floating agent cards */}
              <motion.div style={{ rotateX, rotateY }} className="pointer-events-none">
                <FloatingAgent icon={MessageSquare} title="AI Support Agent" glow={brand.primary} delay={0.2} />
                <FloatingAgent icon={Users} title="AI Sales Agent" glow={brand.secondary} delay={0.35} />
                <FloatingAgent icon={Sparkles} title="AI Research Agent" glow={brand.accent} delay={0.5} />
                <FloatingAgent icon={Terminal} title="AI Content Agent" glow={'#22d3ee'} delay={0.65} />
              </motion.div>
            </div>

            <LogoRow />
          </motion.div>
        </div>
      </section>

      <div id="features"><FeaturesBento /></div>
      <div id="how"><HowItWorks /></div>
      <DashboardShowcase />
      <UseCases />
      <div id="pricing"><Pricing /></div>
      <div id="testimonials"><Testimonials /></div>

      {/* Style Guide */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <SectionTitle kicker="STYLE" title="Design system" sub="Premium, futuristic, minimal. 8px grid, glass surfaces, neon accents, smooth 600ms transitions." />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FrostCard className="p-6">
            <div className="text-white/70 text-sm">Colors</div>
            <div className="mt-4 grid grid-cols-5 gap-3">
              {[brand.primary, brand.primaryTo, brand.secondary, brand.accent, brand.bgDark].map((c,i)=>(
                <div key={i} className="h-12 rounded-xl border border-white/10" style={{ background: c }} />
              ))}
            </div>
          </FrostCard>
          <FrostCard className="p-6">
            <div className="text-white/70 text-sm">Typography</div>
            <div className="mt-3 space-y-2">
              <div className="text-3xl font-semibold">H1 / 72–90px</div>
              <div className="text-2xl font-semibold">H2 / 48px</div>
              <div className="text-xl font-semibold">H3 / 32px</div>
              <div className="text-base">Body / 17–19px</div>
              <div className="font-mono text-sm">Mono / Metrics</div>
            </div>
          </FrostCard>
          <FrostCard className="p-6">
            <div className="text-white/70 text-sm">Components</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <button className="rounded-2xl bg-gradient-to-br from-sky-500 to-blue-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_8px_30px_rgba(59,130,246,0.4)]">Primary</button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90">Ghost</button>
              <div className="col-span-2 h-12 rounded-2xl border border-white/10 bg-white/5" />
            </div>
          </FrostCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}
