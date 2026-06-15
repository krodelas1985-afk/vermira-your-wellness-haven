import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sun,
  Trees,
  ShoppingBag,
  Flag,
  Leaf,
  MapPin,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Award,
  ArrowRight,
  Sparkles,
  Home,
  Bed,
  Bath,
} from "lucide-react";
import { LeadForm } from "@/components/landing/LeadForm";
import { FloatingMessenger } from "@/components/landing/FloatingMessenger";

import heroImg from "@/assets/vermira/hero.jpg";
import overviewImg from "@/assets/vermira/overview.jpg";
import clubhouseImg from "@/assets/vermira/clubhouse.jpg";
import locationMapImg from "@/assets/vermira/location-map.png";
import unitMiraImg from "@/assets/vermira/unit-mira.jpg";
import unitMireioImg from "@/assets/vermira/unit-mireio.jpg";
import unitMirelaImg from "@/assets/vermira/unit-mirela.jpg";
import gallery1 from "@/assets/vermira/gallery-1.jpg";
import gallery2 from "@/assets/vermira/gallery-2.jpg";
import gallery3 from "@/assets/vermira/gallery-3.jpg";
import gallery4 from "@/assets/vermira/gallery-4.jpg";
import gallery5 from "@/assets/vermira/gallery-5.jpg";
import gallery6 from "@/assets/vermira/gallery-6.jpg";
import agentJoyce from "@/assets/vermira/agent-joyce.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vermira — Solar-Powered Wellness Living in Lipa, Batangas" },
      {
        name: "description",
        content:
          "Pre-selling solar-powered homes in a 32.7-hectare EDGE Advanced Certified wellness community by Keyland Corporation. Nestled at the foot of Mt. Malarayat, 1.5 hrs from Makati.",
      },
      { property: "og:title", content: "Vermira — Solar-Powered Wellness Living in Lipa" },
      {
        property: "og:description",
        content:
          "Award-winning pre-selling wellness community by Keyland Corporation. Solar-powered, EDGE Advanced Certified homes in Lipa, Batangas.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Landing,
});

const MESSENGER_URL = "https://www.messenger.com/t/420802291655730";

const UNITS = [
  {
    name: "Mira",
    type: "Single Detached",
    image: unitMiraImg,
    lotArea: "130.07 sqm",
    floorArea: "106.9 sqm",
    beds: "3 BR",
    baths: "2 T&B",
    features: ["Open Lanai", "Maid's Room / Utility", "Carport", "Integrated Solar Panels"],
    flagship: true,
  },
  {
    name: "Mireio",
    type: "Single Attached",
    image: unitMireioImg,
    lotArea: "99 sqm",
    floorArea: "87.81 sqm",
    beds: "3 BR",
    baths: "2 T&B",
    features: ["2 Storeys", "Maid's Room / Utility", "Optional Carport", "Solar Panel System"],
  },
  {
    name: "Mirela",
    type: "Townhouse",
    image: unitMirelaImg,
    lotArea: "65.90 sqm",
    floorArea: "63.63 sqm",
    beds: "2 BR",
    baths: "2 T&B",
    features: ["Private Balcony", "Service Area", "2 Storeys", "Solar-Ready Roof"],
  },
  {
    name: "Coming Soon",
    type: "To be announced",
    image: gallery3,
    lotArea: "—",
    floorArea: "—",
    beds: "—",
    baths: "—",
    features: ["Details to be released by developer"],
    placeholder: true,
  },
];

const AMENITIES = [
  {
    icon: Trees,
    title: "22 Themed Pocket Parks",
    body: "Scattered across the development so every cluster has its own green pause.",
    image: gallery1,
  },
  {
    icon: Leaf,
    title: "Botanical Open Spaces",
    body: "Landscaped shared areas and a commitment to 1,500 trees — one tree per home.",
    image: gallery2,
  },
  {
    icon: ShoppingBag,
    title: "Commercial Center In Front",
    body: "Essentials, cafés, and services right at the property's frontage.",
    image: gallery4,
  },
  {
    icon: Flag,
    title: "300m to Mt. Malarayat Golf",
    body: "Tee off in minutes. The country club is practically next door.",
    image: gallery5,
  },
  {
    icon: Sun,
    title: "Solar-Powered Homes",
    body: "Every unit ships with an integrated rooftop solar system from day one.",
    image: gallery6,
  },
  {
    icon: Award,
    title: "EDGE Advanced Certified",
    body: "Built to IFC's EDGE sustainability standard — cooler roofs, smarter water use.",
    image: overviewImg,
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Overview />
      <Amenities />
      <Units />
      <Location />
      <Gallery />
      <LeadFormSection />
      <AgentSection />
      <Footer />
      <FloatingMessenger />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 sm:py-7">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-clay">
            <Sparkles className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="font-display text-2xl tracking-tight">Vermira</span>
        </a>
        <a
          href="#inquire"
          className="hidden rounded-full border border-white/40 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15 sm:inline-block"
        >
          Get pricing
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Video placeholder — swap <img> for a <video> tag when drone footage is available */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Aerial view of Vermira at the foot of Mt. Malarayat"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
        <div className="max-w-3xl">
          <Badge className="rounded-full border-0 bg-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
            Pre-selling · EDGE Advanced Certified
          </Badge>
          <h1 className="mt-6 text-balance font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.02] text-white">
            Solar-powered <em className="italic text-moss">wellness living</em> at the foot of Mt. Malarayat.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            Vermira is a 32.7-hectare clustered community of solar-powered homes in Lipa,
            Batangas — designed around pocket parks, botanical gardens, and a life beyond
            your four walls.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#inquire"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-bone px-7 text-sm font-medium text-primary transition hover:bg-white"
            >
              Get Pricing & Availability
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/50 bg-transparent px-7 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Message Us on Messenger
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-wider text-white/70">
            <span className="flex items-center gap-2"><Award className="h-4 w-4" />Best Housing Development · Luzon 2024</span>
            <span className="flex items-center gap-2"><Leaf className="h-4 w-4" />Best Wellness Community 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Overview ---------------- */
function Overview() {
  const facts = [
    { label: "Total Land Area", value: "32.7 ha" },
    { label: "Location", value: "Lipa, Batangas" },
    { label: "Developer", value: "Keyland Corp." },
    { label: "Status", value: "Pre-selling" },
  ];
  return (
    <section id="overview" className="relative bg-bone py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>The Vision</SectionLabel>
            <h2 className="mt-4 text-balance text-4xl leading-[1.1] sm:text-5xl">
              A wellness community built around <em className="italic text-clay">verdant fields</em>, not four walls.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              <em className="not-italic font-medium text-foreground">[ver]</em> verdant ·{" "}
              <em className="not-italic font-medium text-foreground">[mira]</em> to see.
              Vermira's clustered layout weaves themed pocket parks, botanical gardens, and
              shared green spaces through every neighborhood — with a commercial center
              fronting the property and a partnership with the World Wildlife Fund guiding
              how the community grows.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-leaf/15 sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.label} className="bg-bone p-5 sm:p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {f.label}
                  </div>
                  <div className="mt-2 font-display text-xl text-primary sm:text-2xl">
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 sm:gap-6">
          <ImagePlaceholder src={overviewImg} alt="Architect's perspective of Vermira layout" tall />
          <ImagePlaceholder src={clubhouseImg} alt="Central clubhouse architect's perspective" tall />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Amenities ---------------- */
function Amenities() {
  return (
    <section id="amenities" className="bg-primary py-20 text-primary-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <SectionLabel className="text-moss">Amenities & Features</SectionLabel>
          <h2 className="mt-4 text-balance text-4xl leading-[1.1] sm:text-5xl">
            Designed for life <em className="italic text-moss">outdoors</em>, indoors.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((a) => {
            const Icon = a.icon;
            return (
              <article
                key={a.title}
                className="group overflow-hidden rounded-3xl bg-bone/5 ring-1 ring-white/10 transition hover:bg-bone/10"
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-clay text-white shadow-lg">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-bone">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone/70">{a.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Units ---------------- */
function Units() {
  return (
    <section id="units" className="bg-bone py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Units & Pricing</SectionLabel>
            <h2 className="mt-4 text-balance text-4xl leading-[1.1] sm:text-5xl">
              Homes that bring the <em className="italic text-clay">outdoors in</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            All models feature integrated solar, protected entrances, large windows for
            natural light, and provision for a 2-car garage.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {UNITS.map((u) => (
            <UnitCard key={u.name} unit={u} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-center">
          <Badge variant="outline" className="rounded-full border-leaf/40 bg-card px-4 py-2 text-xs font-medium text-primary">
            ✓ Pag-IBIG Financing Available
          </Badge>
          <Badge variant="outline" className="rounded-full border-leaf/40 bg-card px-4 py-2 text-xs font-medium text-primary">
            ✓ Bank Financing Available
          </Badge>
        </div>
      </div>
    </section>
  );
}

function UnitCard({ unit }: { unit: (typeof UNITS)[number] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-leaf/15 transition hover:ring-clay/40">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={unit.image}
          alt={`${unit.name} model render`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {unit.flagship && (
          <span className="absolute left-4 top-4 rounded-full bg-clay px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            Flagship
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="text-xs uppercase tracking-wider text-clay">{unit.type}</div>
        <h3 className="mt-1 font-display text-3xl">{unit.name}</h3>

        <dl className="mt-5 grid grid-cols-2 gap-3 border-y border-border py-5 text-sm">
          <SpecRow icon={<Home className="h-4 w-4" />} label="Lot" value={unit.lotArea} />
          <SpecRow icon={<Home className="h-4 w-4" />} label="Floor" value={unit.floorArea} />
          <SpecRow icon={<Bed className="h-4 w-4" />} label="Beds" value={unit.beds} />
          <SpecRow icon={<Bath className="h-4 w-4" />} label="Baths" value={unit.baths} />
        </dl>

        <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
          {unit.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Leaf className="mt-0.5 h-3.5 w-3.5 shrink-0 text-leaf" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl bg-muted px-4 py-3">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
            Starting at
          </div>
          <div className="font-display text-lg text-primary">
            ₱___ — contact for current promo
          </div>
        </div>

        <a
          href="#inquire"
          className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Inquire Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function SpecRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-leaf/10 text-leaf">
        {icon}
      </span>
      <div className="leading-tight">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}

/* ---------------- Location ---------------- */
function Location() {
  const bullets = [
    "~1.5 hrs drive from Makati City",
    "300m to Mt. Malarayat Golf & Country Club",
    "Commercial center fronting the property",
    "4.8 km to SM City Lipa · 7.0 km to Robinsons Lipa",
    "1.5 km to Nazareth School · 7.0 km to DLSU Lipa",
  ];
  return (
    <section id="location" className="bg-secondary py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Location & Accessibility</SectionLabel>
            <h2 className="mt-4 text-balance text-4xl leading-[1.1] sm:text-5xl">
              Everything <em className="italic text-clay">grows</em> in Lipa.
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Nestled near the foot of Mt. Malarayat along Lipa-Alaminos Road —
              Km 89, Brgy. Talisay / Lumbang, Lipa City, Batangas.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm sm:text-base">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Vermira+Sales+Pavilion+Lipa-Alaminos+Road+Talisay+Lipa+Batangas"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-primary/30 px-5 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              Open in Google Maps
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Map embed placeholder */}
          <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-leaf/15">
            <div className="relative aspect-[4/3]">
              <img
                src={locationMapImg}
                alt="Map showing Vermira location near Mt. Malarayat in Lipa, Batangas"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-bone/95 p-4 backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
                <div className="text-[11px] uppercase tracking-wider text-clay">
                  Vermira Sales Pavilion
                </div>
                <div className="mt-1 text-sm text-foreground">
                  Km 89, Lipa-Alaminos Road, Brgy. Talisay, Lipa City, Batangas
                </div>
              </div>
            </div>
            <div className="px-4 py-3 text-center text-[11px] uppercase tracking-wider text-muted-foreground">
              [ Map embed placeholder — swap for live Google Maps iframe ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  const tiles = [
    { src: gallery1, span: "sm:col-span-2 sm:row-span-2" },
    { src: gallery2, span: "" },
    { src: gallery3, span: "" },
    { src: gallery4, span: "" },
    { src: gallery5, span: "sm:col-span-2" },
    { src: gallery6, span: "" },
  ];
  return (
    <section id="gallery" className="bg-bone py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="mt-4 text-balance text-4xl leading-[1.1] sm:text-5xl">
              Lifestyle, <em className="italic text-clay">framed</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Renders, drone stills, and lifestyle moments from inside the community.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`group relative aspect-square overflow-hidden rounded-2xl bg-muted ${t.span}`}
            >
              <img
                src={t.src}
                alt={`Vermira gallery ${i + 1}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] uppercase tracking-wider text-muted-foreground">
          [ Image placeholders — swap with your own renders / drone shots ]
        </p>
      </div>
    </section>
  );
}

/* ---------------- Lead Form ---------------- */
function LeadFormSection() {
  return (
    <section id="inquire" className="relative bg-primary py-20 text-primary-foreground sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionLabel className="text-moss">Inquire</SectionLabel>
          <h2 className="mt-4 text-balance text-4xl leading-[1.1] sm:text-5xl">
            Tara, magpa-tour <em className="italic text-moss">tayo</em>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bone/80">
            Tell us what you're looking for and we'll send pricing, current promos,
            and tour availability — usually within one business day.
          </p>
          <div className="mt-8 space-y-3 text-sm text-bone/80">
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-moss" /> +63 927 676 6785</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-moss" /> joycecuenca002@gmail.com</p>
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-moss" /> Vermira Sales Pavilion, Lipa City</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <LeadForm unitOptions={UNITS.filter((u) => !u.placeholder).map((u) => `${u.name} — ${u.type}`)} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Agent ---------------- */
function AgentSection() {
  return (
    <section id="agent" className="bg-bone py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-card shadow-sm ring-1 ring-leaf/15">
          <div className="grid md:grid-cols-5">
            <div className="relative md:col-span-2">
              <div className="aspect-[4/5] w-full bg-muted md:h-full">
                <img
                  src={agentJoyce}
                  alt="Joyce Recinto Cuenca, Licensed Real Estate Agent"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="p-7 sm:p-12 md:col-span-3">
              <SectionLabel>Your Vermira Guide</SectionLabel>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                Joyce Recinto Cuenca
              </h2>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-clay">
                Licensed Real Estate Agent
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                [ Short bio placeholder — 2-3 sentences about Joyce's background, years in
                Lipa real estate, and what makes her a trusted guide for first-time Vermira
                buyers. Replace this with the final copy. ]
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+639276766785"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm transition hover:border-clay hover:text-clay"
                >
                  <Phone className="h-4 w-4 text-clay" />
                  <span>+63 927 676 6785</span>
                </a>
                <a
                  href="mailto:joycecuenca002@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm transition hover:border-clay hover:text-clay"
                >
                  <Mail className="h-4 w-4 text-clay" />
                  <span className="truncate">joycecuenca002@gmail.com</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm transition hover:border-clay hover:text-clay"
                >
                  <Instagram className="h-4 w-4 text-clay" />
                  <span>Instagram (link soon)</span>
                </a>
                <a
                  href={MESSENGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message on Messenger
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-primary py-14 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-clay">
                <Sparkles className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="font-display text-2xl">Vermira</span>
            </div>
            <p className="mt-4 text-sm text-bone/70">
              A wellness community development by Keyland Lipa Properties Inc.,
              a subsidiary of Keyland Corporation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:gap-16">
            <div>
              <div className="text-xs uppercase tracking-wider text-moss">Contact</div>
              <ul className="mt-4 space-y-2 text-bone/80">
                <li>+63 927 676 6785</li>
                <li>joycecuenca002@gmail.com</li>
                <li>Lipa City, Batangas</li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-moss">Follow</div>
              <ul className="mt-4 space-y-2 text-bone/80">
                <li><a href="#" className="hover:text-clay">Facebook</a></li>
                <li><a href="#" className="hover:text-clay">Instagram</a></li>
                <li><a href={MESSENGER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-clay">Messenger</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-bone/60">
          <p>
            Information provided for marketing purposes. Subject to developer's terms and
            final computation. © {new Date().getFullYear()} Vermira by Keyland Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */
function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-xs font-medium uppercase tracking-[0.22em] text-clay ${className}`}>
      <span className="mr-2 inline-block h-px w-6 align-middle bg-current" />
      {children}
    </div>
  );
}

function ImagePlaceholder({ src, alt, tall }: { src: string; alt: string; tall?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-3xl bg-muted ${tall ? "aspect-[4/3]" : "aspect-square"}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}
