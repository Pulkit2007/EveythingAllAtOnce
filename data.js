/* ============================================================
   data.js — All 52 curated websites from Master Directory 2026
   ============================================================ */

const SITES = [
  /* ── Career & Education (12) ── */
  {
    name: "Excel Practice Online",
    url: "excelpracticeonline.com",
    category: "Career & Education",
    tags: ["Learning", "Business"],
    useCase: "Interactive Excel tutorials from beginner to advanced.",
    emoji: "📊"
  },
  {
    name: "Google Scholar",
    url: "scholar.google.com",
    category: "Career & Education",
    tags: ["Academic", "Research"],
    useCase: "Search for peer-reviewed papers and academic books.",
    emoji: "🎓"
  },
  {
    name: "Hacksplaining",
    url: "hacksplaining.com/lessons",
    category: "Career & Education",
    tags: ["Cybersecurity", "Learning"],
    useCase: "Security lessons for developers to prevent hacking.",
    emoji: "🔐"
  },
  {
    name: "ManualsLib",
    url: "manualslib.com",
    category: "Career & Education",
    tags: ["Reference", "Utility"],
    useCase: "Massive library of product manuals and guides.",
    emoji: "📖"
  },
  {
    name: "MindLuster",
    url: "mindluster.com",
    category: "Career & Education",
    tags: ["Learning", "Free", "Certificate"],
    useCase: "300,000 free courses with certificates for skill building.",
    emoji: "🧠"
  },
  {
    name: "MuscleWiki",
    url: "musclewiki.com",
    category: "Career & Education",
    tags: ["Health", "Fitness", "Visual Guide"],
    useCase: "Simplified exercise guides to train specific muscles.",
    emoji: "💪"
  },
  {
    name: "Open Culture",
    url: "openculture.com",
    category: "Career & Education",
    tags: ["Learning", "Archive"],
    useCase: "Free educational media, courses, and ebooks.",
    emoji: "🌐"
  },
  {
    name: "Roadmap.sh",
    url: "roadmap.sh",
    category: "Career & Education",
    tags: ["Coding", "Career", "Reference"],
    useCase: "Developer and data analyst roadmaps for career planning.",
    emoji: "🗺️"
  },
  {
    name: "TryHackMe",
    url: "tryhackme.com",
    category: "Career & Education",
    tags: ["Cybersecurity", "Interactive"],
    useCase: "Learn ethical hacking in a friendly, gamified environment.",
    emoji: "🕵️"
  },
  {
    name: "TypingClub",
    url: "typingclub.com",
    category: "Career & Education",
    tags: ["Skill-Building", "Gamified"],
    useCase: "Master touch typing through interactive games.",
    emoji: "⌨️"
  },
  {
    name: "WolframAlpha",
    url: "wolframalpha.com",
    category: "Career & Education",
    tags: ["Math", "Research", "Academic"],
    useCase: "Solve complex academic equations and subject-wise answers.",
    emoji: "∞"
  },
  {
    name: "Zty.pe",
    url: "zty.pe",
    category: "Career & Education",
    tags: ["Skill-Building", "Fun"],
    useCase: "Typing game to boost speed and accuracy.",
    emoji: "🎮"
  },

  /* ── Content Design (15) ── */
  {
    name: "Artflow AI",
    url: "artflow.ai",
    category: "Content Design",
    tags: ["AI", "Character", "Creative"],
    useCase: "Consistent AI character and actor creation.",
    emoji: "🎭"
  },
  {
    name: "Calligraphr",
    url: "calligraphr.com",
    category: "Content Design",
    tags: ["Typography", "Design Tool"],
    useCase: "Convert your own handwriting into a digital font.",
    emoji: "✍️"
  },
  {
    name: "Clipchamp",
    url: "clipchamp.com",
    category: "Content Design",
    tags: ["Video", "Microsoft", "AI"],
    useCase: "Web-based video editor with AI voiceovers and templates.",
    emoji: "🎬"
  },
  {
    name: "Draw.io",
    url: "draw.io",
    category: "Content Design",
    tags: ["Design", "Open-Source"],
    useCase: "Professional flowcharts, wireframes, and diagrams.",
    emoji: "🖊️"
  },
  {
    name: "Fontjoy",
    url: "fontjoy.com",
    category: "Content Design",
    tags: ["Typography", "AI"],
    useCase: "Find perfect font combinations using AI deep learning.",
    emoji: "🔤"
  },
  {
    name: "LTX Studio",
    url: "ltx.studio",
    category: "Content Design",
    tags: ["AI", "Video", "Storyboarding"],
    useCase: "AI-powered movie and storyboard creation tool.",
    emoji: "🎥"
  },
  {
    name: "MagicUI",
    url: "magicui.design",
    category: "Content Design",
    tags: ["UI", "Frontend", "Animation"],
    useCase: "Animated UI library for modern web development.",
    emoji: "✨"
  },
  {
    name: "Meshy.ai",
    url: "meshy.ai",
    category: "Content Design",
    tags: ["3D", "AI", "Assets"],
    useCase: "Text-to-3D model generation for animators.",
    emoji: "🧊"
  },
  {
    name: "Pigment",
    url: "pigment.shapefactory.co",
    category: "Content Design",
    tags: ["Color", "Palette", "Design Asset"],
    useCase: "Find professional color palettes and mockups.",
    emoji: "🎨"
  },
  {
    name: "Pixcap",
    url: "pixcap.com",
    category: "Content Design",
    tags: ["3D", "UI/UX", "Design Asset"],
    useCase: "Find and customize 3D icons for designs.",
    emoji: "🖼️"
  },
  {
    name: "Sapiens",
    url: "sapiens.ui8.net",
    category: "Content Design",
    tags: ["Illustration", "Character"],
    useCase: "Modular, customizable character illustration library.",
    emoji: "🧑‍🎨"
  },
  {
    name: "Space Type Generator",
    url: "spacetypegenerator.com",
    category: "Content Design",
    tags: ["Typography", "Animation", "UI/UX"],
    useCase: "Animated text generator for web and UI.",
    emoji: "🌌"
  },
  {
    name: "Story.ai",
    url: "story.ai",
    category: "Content Design",
    tags: ["AI", "Animation", "Storytelling"],
    useCase: "Create animated stories from text prompts.",
    emoji: "📖"
  },
  {
    name: "Uiverse",
    url: "uiverse.io",
    category: "Content Design",
    tags: ["UI", "Open Source", "CSS"],
    useCase: "Community-built UI elements for developers.",
    emoji: "🌀"
  },
  {
    name: "Wepik",
    url: "wepik.com",
    category: "Content Design",
    tags: ["Design", "Free", "Templates"],
    useCase: "Graphic design platform with high-quality templates.",
    emoji: "🖌️"
  },

  /* ── Fun (5) ── */
  {
    name: "CityWalks",
    url: "citywalks.live",
    category: "Fun",
    tags: ["Travel", "Ambience"],
    useCase: "Virtual first-person walks through global cities.",
    emoji: "🚶"
  },
  {
    name: "Radio Garden",
    url: "radio.garden",
    category: "Fun",
    tags: ["Geography", "Music"],
    useCase: "Listen to live radio stations from across the globe.",
    emoji: "📻"
  },
  {
    name: "Slow Roads",
    url: "slowroads.io",
    category: "Fun",
    tags: ["Simulator", "Relaxing"],
    useCase: "Procedurally generated infinite driving simulator.",
    emoji: "🛣️"
  },
  {
    name: "Townscaper",
    url: "oskarstalberg.com/Townscaper",
    category: "Fun",
    tags: ["Minimalist", "Sandbox"],
    useCase: "Satisfying and relaxing town-building sandbox.",
    emoji: "🏘️"
  },
  {
    name: "WindowSwap",
    url: "window-swap.com",
    category: "Fun",
    tags: ["Ambience", "Global"],
    useCase: "View the world through someone else's window.",
    emoji: "🪟"
  },

  /* ── Productivity (8) ── */
  {
    name: "Claude Prompt Library",
    url: "anthropic.com",
    category: "Productivity",
    tags: ["AI", "Engineering"],
    useCase: "Curated library of high-quality AI prompts.",
    emoji: "🤖"
  },
  {
    name: "Every Timezone",
    url: "everytimezone.com",
    category: "Productivity",
    tags: ["Utility", "Global"],
    useCase: "Visualizing time zones for global coordination.",
    emoji: "🕐"
  },
  {
    name: "FutureMe",
    url: "futureme.org",
    category: "Productivity",
    tags: ["Personal", "Reflection"],
    useCase: "Write letters to your future self for long-term goals.",
    emoji: "📬"
  },
  {
    name: "Graphy",
    url: "graphy.app",
    category: "Productivity",
    tags: ["Data", "Visualization"],
    useCase: "Create clean, interactive charts and data dashboards.",
    emoji: "📈"
  },
  {
    name: "Noisli",
    url: "noisli.com",
    category: "Productivity",
    tags: ["Focus", "Audio"],
    useCase: "Background ambient sounds for deep work.",
    emoji: "🎧"
  },
  {
    name: "Scribe",
    url: "scribehow.com",
    category: "Productivity",
    tags: ["Automation", "Documentation"],
    useCase: "Auto-generate step-by-step guides and SOPs.",
    emoji: "📝"
  },
  {
    name: "Splitwise",
    url: "splitwise.com",
    category: "Productivity",
    tags: ["Finance", "Utility"],
    useCase: "Track and share expenses with friends and family.",
    emoji: "💸"
  },
  {
    name: "WebSim AI",
    url: "websim.ai",
    category: "Productivity",
    tags: ["AI", "Development"],
    useCase: "Instant site generation for prototyping ideas.",
    emoji: "⚡"
  },

  /* ── Utilities (12) ── */
  {
    name: "Darebee",
    url: "darebee.com",
    category: "Utilities",
    tags: ["Health", "Fitness"],
    useCase: "High-quality, ad-free home workout programs.",
    emoji: "🏋️"
  },
  {
    name: "DeepL",
    url: "deepl.com",
    category: "Utilities",
    tags: ["AI", "Translation"],
    useCase: "High-accuracy AI translation, better than Google.",
    emoji: "🌍"
  },
  {
    name: "Have I Been Pwned",
    url: "haveibeenpwned.com",
    category: "Utilities",
    tags: ["Security", "Privacy"],
    useCase: "Check if your email or phone is in a data breach.",
    emoji: "🔍"
  },
  {
    name: "OmniCalculator",
    url: "omnicalculator.com",
    category: "Utilities",
    tags: ["Math", "Finance", "Science"],
    useCase: "Over 1,000 specialized calculators for every field.",
    emoji: "🔢"
  },
  {
    name: "Sejda",
    url: "sejda.com",
    category: "Utilities",
    tags: ["PDF", "Editing", "AI"],
    useCase: "User-friendly PDF editor and converter.",
    emoji: "📄"
  },
  {
    name: "Snopes",
    url: "snopes.com",
    category: "Utilities",
    tags: ["Fact-Check", "Research"],
    useCase: "The definitive internet reference for fact-checking myths.",
    emoji: "✅"
  },
  {
    name: "Supercook",
    url: "supercook.com",
    category: "Utilities",
    tags: ["Cooking", "Zero-Waste"],
    useCase: "Recipe search based on ingredients you already have.",
    emoji: "👨‍🍳"
  },
  {
    name: "Temp-Mail",
    url: "temp-mail.org",
    category: "Utilities",
    tags: ["Privacy", "Security"],
    useCase: "Temporary email service to avoid spam.",
    emoji: "📧"
  },
  {
    name: "TinyWow",
    url: "tinywow.com",
    category: "Utilities",
    tags: ["Utility", "Free", "Multi-Tool"],
    useCase: "Massive library of daily tools for Video, PDF, Image.",
    emoji: "🛠️"
  },
  {
    name: "VirusTotal",
    url: "virustotal.com",
    category: "Utilities",
    tags: ["Security", "Scanning"],
    useCase: "Scan files and URLs for viruses and malware.",
    emoji: "🛡️"
  },
  {
    name: "Vocal Remover",
    url: "vocalremover.org",
    category: "Utilities",
    tags: ["Audio", "AI-Powered"],
    useCase: "Extract vocals or instrumentals from music.",
    emoji: "🎵"
  },
  {
    name: "Windy",
    url: "windy.com",
    category: "Utilities",
    tags: ["Weather", "Visualization"],
    useCase: "Real-time global weather and wind mapping.",
    emoji: "🌪️"
  }
];
