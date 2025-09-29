"use client"

import React, { useState } from "react"
import {
  ChevronDown,
  Star,
  Monitor,
  User,
  MoreHorizontal,
  X,
  Search,
  Plus,
  Bold,
  Italic,
  MoreVertical,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteCarousel } from "@/components/quote-carousel"
import { ArtCarousel } from "@/components/art-carousel"

const navigationItems = [
  { id: "home", label: "(just) me" },
  { id: "experiences", label: "professional me" },
  { id: "writings", label: "writings & media" },
]

const comments = [
  { name: "friend1", date: "June 17, 2025", message: "Bro is crazy, and I love whatever is wrong with her." },
  { name: "friend2", date: "July 16, 2025", message: "Honestly, Aishtri is authentic, and I appreciate her for that." },
  { name: "friend3", date: "July 16, 2025", message: "She's the chaotic energy that we all should fear from!" },
  
]

const experiences = [
  {
    title: "Business Analyst",
    company: "White Crow Entertainment (Spain)",
    type: "Full-time",
    period: "2025 June - Present",
    description:
      "Led in-depth market analysis covering 5+ competitor segments, identifying 3 untapped market opportunities worth an estimated ₹2.5 crore in potential revenue. Designed and optimized business strategies, improving projected market penetration by 18% within target segments.",
  },
  {
    title: "Data Analyst Intern",
    company: "IITM BS Degree Office",
    type: "Internship",
    period: "2025 Mar - 2025 June",
    description:
      "Analysed marketing data using Python (Pandas, Matplotlib) and Excel to uncover trends and guide campaign strategies. Developed visual reports and dashboards to track KPIs, client engagement, and campaign ROI.",
  },
  {
    title: "Marketing & Research Lead",
    company: "IITM Pravartak",
    type: "Leadership Role",
    period: "2024 Dec - 2025 Feb",
    description:
      "Used Python to clean and analyse datasets related to product adoption, customer behaviour, and competitor benchmarking. Conducted sentiment analysis on user feedback and reviews to guide product positioning.",
  },
  {
    title: "Market Research and Data Science Intern",
    company: "Daloft Airspace Pvt. Ltd.",
    type: "Internship",
    period: "2024 July - 2024 Dec",
    description:
      "Conducted market and competitor analysis using Python and Excel to drive product and marketing strategy. Built KPI dashboards and visual reports with Matplotlib and Excel for strategic decision-making.",
  },
  {
    title: "Digital Marketing",
    company: "Freelance",
    type: "Freelance",
    period: "2023 Oct - 2024 June",
    description:
      "Successfully managed multiple freelance projects across marketing and analytics, delivering high-quality results within tight deadlines. Contributed to measurable client growth through data-driven insights and creative strategies.",
  },
]


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [showComments, setShowComments] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Handle mobile detection
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle click outside to close dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-container')) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="space-y-6">

            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-black" />
                </div>
                <span className="text-zinc-300">hey there! nice to meet you :)</span>
                <MoreVertical className="w-4 h-4 text-zinc-500 ml-auto" />
              </div>

              <div className="bg-zinc-800 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src="/mainprofile.jpeg"
                    alt="Aishetri's profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="bg-amber-600/90 text-black px-3 py-1 rounded text-sm font-semibold">
                      DATA SCIENTIST
                    </div>
                    <div className="bg-amber-600/90 text-black px-3 py-1 rounded text-sm font-semibold">
                      IIT MADRAS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-zinc-500 text-sm">September 26, 2025</div>

            <div>
              <h2 className="text-2xl font-sans text-zinc-200 mb-4">welcome to my little corner of the internet</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                I'm a Data Science student at IIT Madras who loves mixing logic with creativity — whether it's coding, problem-solving, or writing. I get excited by anything that blends tech and imagination and opens up new opportunities.
              </p>
              <div className="bg-amber-600/10 border border-amber-600/30 rounded-lg p-4">
                <p className="text-amber-200 text-sm leading-relaxed">
                  <span className="font-semibold">Disclaimer:</span> Click{" "}
                  <button
                    onClick={() => setActiveSection("experiences")}
                    className="text-amber-300 underline hover:text-amber-100 transition-colors font-medium"
                  >
                    "Professional Me"
                  </button>{" "}
                  first — unless you came here for the chaos and my yapping.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-sans text-zinc-200 italic">currently, my fav song:</h3>
              <div className="bg-zinc-900/80 rounded-lg p-4 border border-zinc-700">
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/7bPWdJgx8vek7S5i5yAtvG?utm_source=generator"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Three sides intro */}
            <div className="mt-8 mb-6">
              <p className="text-zinc-300 leading-relaxed text-center italic">
                Here are the 3 sides of me you're about to witness: fashion obsessed, gaming addicted, and academically driven. 
              </p>
            </div>

            {/* Fashion section */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-sans text-zinc-200">Fashion freak</h3>
              <div className="text-zinc-300 leading-relaxed">
                <p>
                  Fashion is very important to me. On important days, the drip matters most — looking boring is not an option because why be basic when you can be extra? ✨
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="/fashion.jpeg"
                    alt="[Image #2]"
                    className="w-full max-w-md mx-auto rounded-lg border-2 border-amber-600/30"
                  />
                  <span className="block text-center text-xs text-zinc-500 mt-2">[Image #2]</span>
                </div>
              </div>
            </div>

            {/* Gaming section */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-sans text-zinc-200">Gaming geek</h3>
              <div className="text-zinc-300 leading-relaxed">
                <p>
                  I'm a total gamer at heart — my old laptop has seen it all, but it still runs what I love. I'm obsessed with Plarium Studios and Riot Games, especially Mech Arena — I literally breathe that game. Someday, I want to build my own international gaming studio and production house, and even explore the tech side of things.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="/gaming.jpeg"
                    alt="[Image #3]"
                    className="w-full max-w-md mx-auto rounded-lg border-2 border-amber-600/30"
                  />
                  <span className="block text-center text-xs text-zinc-500 mt-2">[Image #3]</span>
                </div>
              </div>
            </div>

            {/* Academic section */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-sans text-zinc-200">Academic nerd</h3>
              <div className="text-zinc-300 leading-relaxed">
                <p>
                  I might live on impulse, but academics are where I get serious. I love exploring anything technical and creative — the mix of logic and imagination fascinates me. As a Data Science student at IIT Madras, I'm passionate about learning and turning ideas into opportunities.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="/library.jpeg"
                    alt="[Image #4]"
                    className="w-full max-w-md mx-auto rounded-lg border-2 border-amber-600/30"
                  />
                  <span className="block text-center text-xs text-zinc-500 mt-2">[Image #4]</span>
                  <div className="mt-3 text-center">
                    <a
                      href="https://youtu.be/oRvKeWqDIko?si=kGhbHOHcL1zJChI8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-amber-400 hover:text-amber-300 transition-colors underline italic"
                    >
                      🥚 easter egg: childhood me explaining physics
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-700 pt-4">
              <div className="text-zinc-400">You</div>
            </div>
          </div>
        )


      case "experiences":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-black font-semibold">A</span>
              </div>
              <h2 className="text-2xl font-sans text-zinc-200">professional me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                <div className="aspect-[3/4] w-full max-w-sm mx-auto">
                  <img
                    src="/aboutprofile.jpeg"
                    alt="Aishetri - Data Science Student"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  honestly, anything technical and creative just peaks my interest. there's something absolutely fascinating about the blend of logic and imagination - i mean, that's where the real magic happens, right? i've always wanted to pursue a field where i can work with both these sides of my brain.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  writing has been my hobby for as long as i can remember, and i've been lucky enough to win some prizes through my pen work.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  i'm currently a data science student at IIT Madras with a decent CGPA of 8.33/10 (not to brag, but i'm kinda proud of that!), and i'm genuinely passionate about this field  as it opens me to a variety of opportunities and experiences.
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-sans text-zinc-200">socials:</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/davalinda_mccrimson?igsh=aXpodG0wbTZ4b2Nn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-amber-300 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-mono text-sm">@davalinda_mccrimson</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/aishetri-das-b3b5a1317/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-amber-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-mono text-sm">linkedin</span>
                </a>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-sans text-zinc-200">what i'm good at</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                  <h4 className="text-zinc-200 font-semibold mb-2">Data Science</h4>
                  <p className="text-zinc-400 text-sm">Python, SQL, Pandas, NumPy, Matplotlib</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                  <h4 className="text-zinc-200 font-semibold mb-2">Analytics Tools</h4>
                  <p className="text-zinc-400 text-sm">Power BI, Tableau, Google Analytics</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                  <h4 className="text-zinc-200 font-semibold mb-2">Digital Marketing</h4>
                  <p className="text-zinc-400 text-sm">LinkedIn Analytics, Google Ads, Instagram Creator Tools</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                  <h4 className="text-zinc-200 font-semibold mb-2">Research & Strategy</h4>
                  <p className="text-zinc-400 text-sm">Market Analysis, Consumer Behavior, Campaign Planning</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-sans text-zinc-200">some cool stuff i've done</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                  <h4 className="text-zinc-200 font-semibold mb-2">academic wins</h4>
                  <p className="text-zinc-400 text-sm">
                    ielts 8.5 band, multiple olympiad gold medals (yeah, i was that kid!)
                  </p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                  <h4 className="text-zinc-200 font-semibold mb-2">debate champion</h4>
                  <p className="text-zinc-400 text-sm">4x gold, 2x silver - i love a good argument!</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                  <h4 className="text-zinc-200 font-semibold mb-2">gaming enthusiast</h4>
                  <p className="text-zinc-400 text-sm">competitive gamer, strategy games specialist</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                  <h4 className="text-zinc-200 font-semibold mb-2">storyteller</h4>
                  <p className="text-zinc-400 text-sm">2x gold, 2x silver, 1x bronze in creative writing</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-sans text-zinc-200 mb-4">my professional journey</h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-zinc-900 rounded-lg p-6 border border-zinc-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-zinc-200">{exp.title}</h3>
                    <span className="text-zinc-400 text-sm">{exp.period}</span>
                  </div>
                  <div className="text-zinc-400 mb-2">
                    {exp.company} • {exp.type}
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-sans text-zinc-200">leadership & community stuff</h3>
              <div className="space-y-4">
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-zinc-200">Co-ordinator</h3>
                    <span className="text-zinc-400 text-sm">2024 Feb - 2024 May</span>
                  </div>
                  <div className="text-zinc-400 mb-2">Google Developer Group, IIT Madras • Leadership</div>
                  <p className="text-zinc-300 leading-relaxed">
                    Led community initiatives, organized tech workshops, and collaborated with developers and tech
                    enthusiasts to foster innovation. Successfully hosted events like hackathons and speaker sessions.
                  </p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-zinc-200">Co-ordinator</h3>
                    <span className="text-zinc-400 text-sm">2023 Sep - 2024 Aug</span>
                  </div>
                  <div className="text-zinc-400 mb-2">Multimedia Production Paradox, IIT Madras • Leadership</div>
                  <p className="text-zinc-300 leading-relaxed">
                    Led multimedia production initiatives and organized creative workshops, fostering innovation in
                    digital content creation and production.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )

      case "writings":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-black font-semibold">A</span>
              </div>
              <h2 className="text-2xl font-sans text-zinc-200">things i wrote</h2>
            </div>

            <h3 className="text-xl font-sans text-zinc-200 mb-4">My Story</h3>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <div className="md:float-right md:ml-4 mb-4 flex justify-center md:justify-start">
                <div className="relative bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                  <img
                    src="/mediaprofile.jpeg"
                    alt="2022 me"
                    className="w-48 h-auto rounded-lg border-2 border-amber-600/30"
                  />
                  <span className="block text-center text-xs text-zinc-500 mt-2">That's 2022 me</span>
                </div>
              </div>
              <p>
                Having big ambitions while hailing from a middle class family may or may not be a good combination. Even though you mostly have everything you need but rarely have everything you want. I suppose this situation itself taught me to appreciate the little things in life while simultaneously chasing my dreams and taking charge of my own future.
              </p>
              <p>
                I knew from a very early age that I have no safety net to fall back on yet I have to keep testing my own limits and pave my own way. Well, there is one person to thank for this 'do or die' mentality; my mother, the only person who, without hesitation, is always my greatest cheerleader.
              </p>
              <p>
                Her endless sacrifices, her adorable innocence has always been my sole inspiration. Honestly life has never been very kind to us so I know I'll have to go where I want to, because she deserves that daughter and I'm her daughter.
              </p>
            </div>

            {/* Quotes swipe carousel */}
            <div className="space-y-3 mt-8">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-sans text-zinc-200">quotes i vibe with</h3>
                <span className="text-xs text-zinc-500 italic">swipe to see more →</span>
              </div>
              <QuoteCarousel />
            </div>

            {/* Art designs carousel */}
            <div className="space-y-3 mt-8">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-sans text-zinc-200">my graphic designs</h3>
                <span className="text-xs text-zinc-500 italic">click arrows to browse →</span>
              </div>
              <ArtCarousel />
            </div>

            {/* Hobby Instagram */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-sans text-zinc-200">random shenanigans</h3>
              <div className="text-zinc-300 leading-relaxed mb-4">
                <p>
                  For the chaotic, unfiltered version of me and my random thoughts - check out my hobby Instagram where I post whatever comes to mind.
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.instagram.com/davis_being_random/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-amber-300 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-mono text-sm">@davis_being_random</span>
                  <span className="text-xs text-zinc-500">(hobby page)</span>
                </a>
              </div>
            </div>

          </div>
        )

      default:
        return null
    }
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars */}
        <Star className="absolute top-12 left-16 md:left-64 w-4 md:w-6 h-4 md:h-6 text-amber-400 fill-current animate-pulse" />
        <Star className="absolute top-8 right-16 md:right-96 w-3 md:w-4 h-3 md:h-4 text-amber-300 fill-current animate-pulse delay-1000" />
        <Star className="absolute top-32 left-8 md:left-32 w-2 md:w-3 h-2 md:h-3 text-amber-500 fill-current animate-pulse delay-2000" />

        {/* Abstract shapes */}
        <div className="absolute -left-16 md:-left-32 top-1/4 w-32 md:w-64 h-32 md:h-64 bg-amber-100/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-16 md:-right-32 top-1/3 w-40 md:w-80 h-40 md:h-80 bg-amber-200/5 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-48 md:w-96 h-48 md:h-96 bg-green-800/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-32 md:w-64 h-32 md:h-64 bg-amber-600/5 rounded-full blur-3xl"></div>

        {/* Geometric shapes */}
        <div className="hidden md:block absolute right-32 bottom-32 w-32 h-48 bg-green-700/20 rounded-lg rotate-12"></div>
        <div className="hidden md:block absolute right-48 bottom-16 w-24 h-32 bg-amber-100/10 rounded-lg -rotate-6"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-sans text-amber-200 italic">hey, i'm aishetri</h1>
          <span className="text-lg md:text-2xl text-amber-300/70 italic">a chaotic & creative soul</span>
        </div>

        {/* Computer Interface */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-t-lg border-2 border-amber-600/30">
            {/* Browser Header */}
            <div className="flex items-center justify-between p-2 md:p-3 border-b border-zinc-700">
              <div className="flex items-center gap-2 md:gap-3">
                <Monitor className="w-4 md:w-5 h-4 md:h-5 text-amber-400" />
                <span className="text-amber-200 font-mono text-sm md:text-base">aishetri's digital space</span>
                <div className="hidden md:flex gap-1 text-xs text-zinc-400">
                  <span>Analytical</span>
                  <span>creative</span>
                  <span>passionate</span>
                  <span>Innovative</span>
                  <span>flexible</span>
                </div>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white p-1 md:p-2">
                  <Star className="w-3 md:w-4 h-3 md:h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="hidden md:flex text-zinc-400 hover:text-white">
                  <Monitor className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="hidden md:flex text-zinc-400 hover:text-white">
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white p-1 md:p-2">
                  <User className="w-3 md:w-4 h-3 md:h-4" />
                </Button>
              </div>
            </div>

            {/* Address Bar */}
            <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 border-b border-zinc-700 bg-zinc-900/50">
              <Search className="w-3 md:w-4 h-3 md:h-4 text-zinc-500" />
              <span className="text-amber-400 font-mono text-sm">100%</span>

              {/* Custom Dropdown for Mobile Compatibility */}
              <div className="relative dropdown-container">
                <Button
                  variant="ghost"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-amber-200 hover:bg-zinc-700 font-mono flex items-center gap-1 md:gap-2 text-sm md:text-base"
                >
                  {navigationItems.find((item) => item.id === activeSection)?.label}
                  <ChevronDown className={`w-3 md:w-4 h-3 md:h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </Button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 min-w-[150px] bg-zinc-800 border border-zinc-600 rounded-md shadow-lg z-[9999]">
                    {navigationItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveSection(item.id)
                          setIsDropdownOpen(false)
                        }}
                        className={`w-full text-left px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-700 transition-colors ${
                          activeSection === item.id ? "bg-zinc-700" : ""
                        } first:rounded-t-md last:rounded-b-md`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <span className="text-zinc-500">—</span>
              <span className="text-zinc-400 font-mono text-sm">22 years old</span>
              <Plus className="hidden md:block w-4 h-4 text-zinc-500" />
              <Bold className="hidden md:block w-4 h-4 text-zinc-500" />
              <Italic className="hidden md:block w-4 h-4 text-zinc-500" />

              <div className="ml-auto">
                <MoreHorizontal className="w-3 md:w-4 h-3 md:h-4 text-zinc-500" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row">
              {/* Sidebar Navigation */}
              <div className="hidden md:block w-64 bg-zinc-900/80 border-r border-zinc-700 p-4">
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded font-mono text-sm transition-colors ${
                        activeSection === item.id
                          ? "bg-amber-600/20 text-amber-200"
                          : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex-1 p-3 md:p-6 min-h-[400px] md:min-h-[600px] max-h-[400px] md:max-h-[600px] overflow-y-auto ${!showComments ? "mr-0" : ""}`}
              >
                {renderContent()}
              </div>

              {/* Comments Sidebar */}
              {showComments && (
                <div
                  className={`${isMobile ? "hidden" : "block"} w-80 bg-zinc-900/80 border-l border-zinc-700`}
                >
                  <div className="flex items-center justify-between p-4 border-b border-zinc-700">
                    <span className="text-zinc-300 font-mono">homie comments</span>
                    <button
                      onClick={() => setShowComments(false)}
                      className="text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4 space-y-4 max-h-[550px] overflow-y-auto">
                    {comments.map((comment, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-zinc-300">{comment.name[0]}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-zinc-300 text-sm font-medium">{comment.name}</span>
                            <span className="text-zinc-500 text-xs">{comment.date}</span>
                          </div>
                          <p className="text-zinc-400 text-sm leading-relaxed">{comment.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:hidden border-t border-zinc-700 p-3">
              <button
                onClick={() => setShowComments(!showComments)}
                className="w-full text-center text-zinc-400 hover:text-zinc-200 font-mono text-sm py-2"
              >
                {showComments ? "hide comments" : "show homie comments"}
              </button>

              {/* Mobile Comments Section */}
              {showComments && (
                <div className="mt-3 bg-zinc-900/80 rounded-lg border border-zinc-700">
                  <div className="flex items-center justify-between p-3 border-b border-zinc-700">
                    <span className="text-zinc-300 font-mono text-sm">homie comments</span>
                    <button
                      onClick={() => setShowComments(false)}
                      className="text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-3 space-y-3 max-h-60 overflow-y-auto">
                    {comments.map((comment, index) => (
                      <div key={index} className="flex gap-2">
                        <div className="w-6 h-6 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-zinc-300">{comment.name[0]}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-zinc-300 text-xs font-medium">{comment.name}</span>
                            <span className="text-zinc-500 text-xs">{comment.date}</span>
                          </div>
                          <p className="text-zinc-400 text-xs leading-relaxed">{comment.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
