import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Gamepad2,
  Globe,
  HeartHandshake,
  Languages,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Puzzle,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import portraitAsset from "@/assets/kgomotso-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kgomotso Mashigo | Aspiring Educator" },
      {
        name: "description",
        content:
          "Portfolio of Kgomotso Mashigo, an aspiring educator certified in Early Childhood Development (NQF Level 4), play-based learning, TEFL, and Google AI Essentials.",
      },
      {
        property: "og:title",
        content: "Kgomotso Mashigo | Aspiring Educator",
      },
      {
        property: "og:description",
        content:
          "Warm, child-centered educator portfolio showcasing ECD NQF Level 4, TEFL, and Google AI Essentials certifications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kgomotso Mashigo",
          jobTitle: "Aspiring Educator",
          description:
            "Early Childhood Development Certified (NQF Level 4), TEFL 120-hour Certified, and Google AI Essentials Certified educator passionate about play-based learning.",
          url: "/",
          knowsAbout: [
            "Early Childhood Development",
            "Play-Based Learning",
            "Mother Tongue Based Bilingual Education (MTBBE)",
            "Teaching English as a Foreign Language",
            "Google AI Essentials",
          ],
        }),
      },
    ],
  }),
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
            Kgomotso<span className="text-terracotta">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-terracotta"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-terracotta-foreground shadow-sm transition-colors hover:bg-terracotta/90"
            >
              Get in touch
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="border-t border-border/50 bg-background md:hidden">
            <nav className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-terracotta"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-3 text-base font-semibold text-terracotta-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in touch
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center rounded-full bg-sage/15 px-4 py-1.5 text-sm font-semibold text-forest">
                <Sparkles className="mr-2 h-4 w-4" />
                Aspiring Educator
              </span>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Kgomotso Mashigo
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                I believe every child deserves a warm, playful start. Certified in Early Childhood
                Development (NQF Level 4), TEFL, and Google AI Essentials, I nurture curious minds from
                birth through the early grades.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-terracotta-foreground shadow-md shadow-terracotta/20 transition-all hover:bg-terracotta/90 hover:shadow-lg"
                >
                  Work with me
                </a>
                <a
                  href="#qualifications"
                  className="inline-flex items-center justify-center rounded-full border-2 border-forest/20 bg-transparent px-7 py-3.5 text-base font-semibold text-forest transition-all hover:border-forest hover:bg-forest/5"
                >
                  View qualifications
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-terracotta" />
                  <span>Johannesburg, South Africa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-terracotta" />
                  <span>ECD NQF Level 4 Certified</span>
                </div>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2">
              <ProfilePhoto />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-terracotta">
                About me
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Guided by curiosity, rooted in care
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                My journey into education began with a simple belief: children learn best when they
                feel safe, seen, and excited. I am an aspiring educator with formal training in
                early childhood development, play-based learning, and English language instruction.
                I bring patience, creativity, and a genuine love for helping young learners discover
                the world around them.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Whether I am supporting toddlers through sensory play or guiding early readers, my
                goal is the same: to build confident, compassionate, and curious children who are
                ready for life, not just the next grade.
              </p>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section id="qualifications" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-terracotta">
                Qualifications
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Trained, tested, and ready to teach
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A blend of early-years expertise, language teaching, and modern digital skills.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <QualificationCard
                icon={<Award className="h-7 w-7" />}
                title="ECD NQF Level 4"
                org="ETDP SETA"
                description="Certified in Early Childhood Development, qualified to support children from birth to 7 years with age-appropriate practice."
                color="terracotta"
              />
              <QualificationCard
                icon={<Puzzle className="h-7 w-7" />}
                title="Play-Based Learning"
                org="Ages 0 – Grade 3"
                description="Trained to facilitate learning through play, turning everyday moments into rich developmental opportunities."
                color="sage"
              />
              <QualificationCard
                icon={<Languages className="h-7 w-7" />}
                title="TEFL Certified"
                org="120-Hour Certificate"
                description="Equipped to teach English as a Foreign Language with engaging, learner-centered techniques for all levels."
                color="sand"
              />
              <QualificationCard
                icon={<BookOpen className="h-7 w-7" />}
                title="Google AI Essentials"
                org="Google / Coursera"
                description="Certified in responsible AI use, bringing modern digital literacy into planning, communication, and learning."
                color="forest"
              />
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section id="philosophy" className="bg-secondary/10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-terracotta">
                  Teaching philosophy
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  Play is the work of childhood
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  I follow a child-centered approach where play is not a break from learning, but
                  the very heart of it. Through guided play, children develop language, motor
                  skills, social confidence, emotional regulation, and problem-solving abilities
                  naturally and joyfully.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Every activity is intentionally designed to meet children where they are,
                  celebrate their unique pace, and gently stretch their growing abilities.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <PhilosophyPill
                    icon={<HeartHandshake className="h-5 w-5" />}
                    text="Safe, nurturing spaces"
                  />
                  <PhilosophyPill
                    icon={<Lightbulb className="h-5 w-5" />}
                    text="Curiosity-led discovery"
                  />
                  <PhilosophyPill
                    icon={<Users className="h-5 w-5" />}
                    text="Individual attention"
                  />
                  <PhilosophyPill
                    icon={<Sun className="h-5 w-5" />}
                    text="Joy in every lesson"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sand/30 to-sage/20 p-8 sm:p-12">
                  <div className="relative z-10 grid gap-6">
                    <blockquote className="font-heading text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
                      “Children learn as they play. Most importantly, in play children learn how to
                      learn.”
                    </blockquote>
                    <cite className="text-base not-italic text-muted-foreground">
                      — O. Fred Donaldson
                    </cite>
                  </div>
                  {/* Decorative shapes */}
                  <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-terracotta/10 blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-sage/15 blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strengths / Services */}
        <section id="services" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-terracotta">
                What I offer
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Strengths & services
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Practical, warm support for children, parents, and learning environments.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                icon={<Users className="h-6 w-6" />}
                title="Early Years Development"
                description="Holistic support for children ages 0–6, focusing on cognitive, emotional, social, and physical growth."
              />
              <ServiceCard
                icon={<Gamepad2 className="h-6 w-6" />}
                title="Play-Based Curriculum"
                description="Creative, hands-on activities that turn play into powerful learning experiences from birth to Grade 3."
              />
              <ServiceCard
                icon={<Globe className="h-6 w-6" />}
                title="English Language Support"
                description="TEFL-trained techniques to help young and foreign-language learners build English confidence."
              />
              <ServiceCard
                icon={<HeartHandshake className="h-6 w-6" />}
                title="Inclusive & Individualized"
                description="Adaptable approaches that respect each child’s pace, interests, strengths, and needs."
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-forest px-4 py-16 text-forest-foreground sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-sand">
              Get in touch
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              Let’s build something bright together
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-forest-foreground/90">
              Whether you are looking for an assistant teacher, a tutor, or an early-learning
              practitioner, I would love to hear how I can support your children, school, or
              learning centre.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:momo26073@gmail.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-terracotta-foreground shadow-lg shadow-black/10 transition-all hover:bg-terracotta/90 sm:w-auto"
              >
                <Mail className="h-5 w-5" />
                Send an email
              </a>
              <a
                href="tel:+27685815842"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-forest-foreground/30 bg-transparent px-7 py-3.5 text-base font-semibold text-forest-foreground transition-all hover:border-forest-foreground hover:bg-forest-foreground/10 sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call me
              </a>
              <a
                href="https://www.linkedin.com/in/kgomotsomashigo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-forest-foreground/30 bg-transparent px-7 py-3.5 text-base font-semibold text-forest-foreground transition-all hover:border-forest-foreground hover:bg-forest-foreground/10 sm:w-auto"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>

            <div className="mt-10 text-sm text-forest-foreground/70">
              <p>Email: momo26073@gmail.com</p>
              <p className="mt-1">Phone: +27 68 581 5842</p>
              <p className="mt-1">Location: Johannesburg, South Africa</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kgomotso Mashigo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:momo26073@gmail.com"
              className="text-muted-foreground transition-colors hover:text-terracotta"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+27685815842"
              className="text-muted-foreground transition-colors hover:text-terracotta"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kgomotsomashigo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-terracotta"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProfilePhoto() {
  return (
    <div className="relative">
      {/* Decorative background blobs */}
      <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-br from-sand/40 via-sage/25 to-terracotta/20 blur-2xl sm:-inset-6" />
      <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-sage/20 blur-3xl" />
      <div className="absolute -right-6 -top-6 -z-10 h-36 w-36 rounded-full bg-terracotta/15 blur-3xl" />

      <div className="relative h-72 w-72 overflow-hidden rounded-[2.5rem] border-4 border-background shadow-2xl shadow-terracotta/10 sm:h-96 sm:w-96">
        <img
          src={portraitAsset.url}
          alt="Kgomotso Mashigo professional portrait"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Small floating badge */}
      <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-full bg-background px-4 py-2 shadow-lg sm:-bottom-5 sm:-right-5 sm:px-5 sm:py-2.5">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-sage" />
        </span>
        <span className="text-xs font-semibold text-foreground sm:text-sm">Open to opportunities</span>
      </div>
    </div>
  );
}

function QualificationCard({
  icon,
  title,
  org,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  org: string;
  description: string;
  color: "terracotta" | "sage" | "sand" | "forest";
}) {
  const colorClasses = {
    terracotta: "bg-terracotta/10 text-terracotta",
    sage: "bg-sage/10 text-sage",
    sand: "bg-sand/20 text-sand-foreground",
    forest: "bg-forest/10 text-forest",
  };

  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div
        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${colorClasses[color]}`}
      >
        {icon}
      </div>
      <h3 className="mt-5 font-heading text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="mt-1 text-sm font-semibold text-terracotta">{org}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}

function PhilosophyPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-background p-3 shadow-sm">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage/15 text-forest">
        {icon}
      </span>
      <span className="text-sm font-semibold text-foreground">{text}</span>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-md">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
        {icon}
      </div>
      <h3 className="mt-5 font-heading text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
