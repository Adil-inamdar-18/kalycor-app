// All copy and links below are taken verbatim from the original industry
// page components. URLs are never hard-coded here — they come from
// src/config/routes.ts, matching the pattern used by src/data/landing.ts
// and src/data/business.ts.

import { crossLinks } from "@/config/routes";
import type { IndustryPage } from "@/types";

const contactCta = { label: "Talk to Our Team", href: crossLinks.contact };
const contactCtaAlt = {
  label: "Start a Conversation",
  href: crossLinks.contact,
};

export const agriculture: IndustryPage = {
  slug: "agriculture",
  name: "Agriculture",
  metaTitle: "Agriculture",
  metaDescription:
    "Connecting agriculture businesses with the people, technology, and solutions they need to build more efficient, sustainable, and resilient operations.",
  hero: {
    image: "/images/industries/agriculture.jpeg",
    kicker: "Agriculture",
    title: ["Empowering", "Agriculture.", "Growing What’s Next."],
    accentLine: 1,
    highlights: [
      { icon: "sprout", label: "Higher Yields" },
      { icon: "shield", label: "Sustainable Practices" },
      { icon: "settings", label: "Smart Technology" },
      { icon: "users", label: "Stronger Communities" },
    ],
    description:
      "Connecting agriculture businesses with the people, technology, and solutions they need to build more efficient, sustainable, and resilient operations.",
    primaryCta: {
      label: "Explore Our Solutions",
      href: "#agriculture-solutions",
    },
    secondaryCta: contactCta,
  },
  stats: {
    kicker: "Agriculture at a Glance",
    heading: "Field-tested workforce and technology support",
    items: [
      { value: "500+", label: "Agriculture and agritech professionals placed" },
      { value: "18", label: "States supported across farm and food-production operations" },
      { value: "92%", label: "Client retention across multi-season contracts" },
      { value: "72 hrs", label: "Average time to deploy a qualified field team" },
    ],
  },
  overview: {
    id: "agriculture-overview",
    kicker: "Agriculture Industry",
    heading: "Agriculture in a Changing World",
    paragraph:
      "Agriculture is evolving rapidly. From modern farming and food production to agricultural technology and supply-chain operations, businesses need adaptable talent and smarter solutions to keep pace with changing demands.",
    areas: [
      "Agricultural Operations",
      "Food Production & Processing",
      "AgriTech",
      "Supply Chain & Logistics",
      "Farm & Field Operations",
      "Agricultural Equipment & Technology",
    ],
  },
    process: {
    kicker: "How We Work",
    heading: "From Brief to Boots on the Ground",
    description:
      "A straightforward process built to get the right agricultural talent in place without slowing down your season.",
    steps: [
      {
        number: "01",
        title: "Understand the Operation",
        description:
          "We learn your crop cycles, sites, and the roles that keep your operation running.",
      },
      {
        number: "02",
        title: "Source & Screen",
        description:
          "We tap our agriculture network and vet candidates for skills, reliability, and safety compliance.",
      },
      {
        number: "03",
        title: "Deploy the Team",
        description:
          "Selected candidates are onboarded and placed on-site, ready to work within days.",
      },
      {
        number: "04",
        title: "Support & Scale",
        description:
          "We stay engaged through the season, adjusting headcount as planting, harvest, and demand shift.",
      },
    ],
  },
solutions: {
    id: "agriculture-solutions",
    kicker: "What We Do",
    heading: "Solutions Built for Agriculture",
    description:
      "From people and processes to technology and growth, our solutions help agriculture businesses adapt, scale, and move forward.",
    items: [
      {
        number: "01",
        title: "Workforce Solutions",
        description:
          "Build reliable teams for agricultural operations, production, logistics, and support functions.",
      },
      {
        number: "02",
        title: "Recruitment & Placement",
        description:
          "Connect with skilled professionals across agriculture, food production, technology, and management.",
      },
      {
        number: "03",
        title: "Professional Services",
        description:
          "Access specialized expertise to improve processes, operations, and business performance.",
      },
      {
        number: "04",
        title: "Technology Solutions",
        description:
          "Support digital transformation through technology-driven solutions designed for modern agriculture.",
      },
    ],
  },
    caseStudy: {
    kicker: "Case Study",
    heading: "Staffing a Harvest Season Without the Scramble",
    client: "Regional Produce & Food-Processing Operator",
    challenge:
      "A multi-site produce operator needed to more than double its field and packing-line headcount within three weeks of harvest, without compromising on safety compliance.",
    approach:
      "We activated our regional agriculture talent pool, ran expedited screening against the client's safety and food-handling standards, and staged onboarding across sites so teams were ready before the first truck arrived.",
    results: [
      { value: "140", label: "Field and packing roles filled in 18 days" },
      { value: "0", label: "Safety compliance issues across the season" },
      { value: "3 sites", label: "Staffed on a single coordinated timeline" },
    ],
  },
areas: {
    kicker: "Our Focus Areas",
    heading: "Where We Create Impact",
    description:
      "Supporting the people, operations, and technology shaping the future of agriculture.",
    items: [
      {
        number: "01",
        title: "Farming & Cultivation",
        description:
          "Supporting modern farming operations with the people and solutions needed for efficient cultivation.",
      },
      {
        number: "02",
        title: "Agricultural Equipment",
        description:
          "Helping organizations support equipment, machinery, maintenance, and technology-driven agricultural operations.",
      },
      {
        number: "03",
        title: "Food Processing",
        description:
          "Connecting businesses with talent and solutions across food production, processing, packaging, and operations.",
      },
      {
        number: "04",
        title: "Supply Chain",
        description:
          "Supporting the movement of agricultural products through efficient logistics, distribution, and supply-chain operations.",
      },
      {
        number: "05",
        title: "AgriTech",
        description:
          "Supporting technology-driven agriculture through digital solutions, innovation, and specialized talent.",
      },
      {
        number: "06",
        title: "Agricultural Operations",
        description:
          "Providing workforce and business solutions across the diverse operational needs of the agriculture industry.",
      },
    ],
  },
    testimonials: {
    kicker: "What Clients Say",
    heading: "Trusted Across the Agriculture Sector",
    items: [
      {
        quote:
          "Kalycor understood our harvest timeline from day one. They had qualified field staff on site faster than any agency we'd used before.",
        name: "Operations Director",
        role: "Regional Produce Operator",
      },
      {
        quote:
          "What stood out was the compliance rigor. Every worker they placed was properly screened before they set foot on our packing line.",
        name: "Plant Manager",
        role: "Food Processing Facility",
      },
      {
        quote:
          "They flex with our seasons instead of forcing us into a fixed contract. That adaptability has made them our go-to partner.",
        name: "VP of Operations",
        role: "Multi-Site Agribusiness",
      },
    ],
  },
future: {
    kicker: "The Future of Agriculture",
    title: ["From Field", "to Future."],
    description:
      "We help agriculture organizations adapt to changing markets, evolving technology, and workforce demands by connecting the right people and solutions with the right opportunities.",
  },
  whyKalycor: {
    kicker: "Why Kalycor",
    heading: "Rooted in Agriculture. Built for Growth.",
    description:
      "We bring together people, expertise, and technology to help agriculture businesses respond to today’s challenges and build for tomorrow.",
    items: [
      {
        number: "01",
        title: "Industry-Focused Talent",
        description:
          "Connect with people who understand the demands of agriculture and its evolving business landscape.",
      },
      {
        number: "02",
        title: "Flexible Workforce Solutions",
        description:
          "Build teams that can adapt to changing operational needs, business cycles, and growth requirements.",
      },
      {
        number: "03",
        title: "Technology-Enabled Operations",
        description:
          "Support modern agriculture with technology-driven solutions that improve efficiency and connectivity.",
      },
      {
        number: "04",
        title: "Scalable Business Support",
        description:
          "Access solutions that can grow alongside your organization and changing business requirements.",
      },
      {
        number: "05",
        title: "Long-Term Partnership",
        description:
          "Work with a partner focused on understanding your goals and supporting sustainable growth.",
      },
    ],
  },
  faq: {
    kicker: "Common Questions",
    heading: "Agriculture Staffing, Answered",
    description:
      "Straight answers to what agriculture and agritech businesses most often ask us before they hire.",
    items: [
      {
        question: "Can you staff up quickly for harvest and peak seasons?",
        answer:
          "Yes. We keep a ready pipeline of vetted field, processing, and logistics workers so seasonal teams can scale up or down within days, not weeks.",
      },
      {
        question: "Do you handle compliance for farm and food-production labor?",
        answer:
          "Every placement is screened against relevant labor, safety, and food-handling requirements so you can onboard workers with confidence.",
      },
      {
        question: "Can you help us find agritech and precision-farming talent?",
        answer:
          "We recruit across agronomy, equipment technology, and farm-management software, connecting you with specialists who understand both agriculture and technology.",
      },
      {
        question: "What if our staffing needs change mid-season?",
        answer:
          "Our workforce solutions are built to flex. We adjust team size and skill mix as conditions, yields, and demand shift throughout the season.",
      },
    ],
  },
  cta: {
    kicker: "Let’s Grow Together",
    title: ["Ready to Grow", "What’s Next?"],
    description: "Let’s build smarter agriculture solutions together.",
    buttonLabel: contactCtaAlt.label,
  },
};

export const importExport: IndustryPage = {
  slug: "import-export",
  name: "Import & Export",
  metaTitle: "Import & Export",
  metaDescription:
    "Connecting businesses, people, and opportunities across global markets through smarter trade, supply chain, and business solutions.",
  hero: {
    image: "/images/industries/import-export.jpeg",
    kicker: "Import & Export",
    title: ["Connecting Markets.", "Moving What’s Next."],
    description:
      "Connecting businesses, people, and opportunities across global markets through smarter trade, supply chain, and business solutions.",
    primaryCta: {
      label: "Explore Our Solutions",
      href: "#import-export-solutions",
    },
    secondaryCta: contactCta,
  },
  stats: {
    kicker: "Global Trade at a Glance",
    heading: "Coverage across borders and supply chains",
    items: [
      { value: "40+", label: "Countries touched through client trade operations" },
      { value: "300+", label: "Logistics and trade professionals placed" },
      { value: "15 days", label: "Average time to staff a new warehouse or trade desk" },
      { value: "95%", label: "Client satisfaction across cross-border engagements" },
    ],
  },
  overview: {
    id: "import-export-overview",
    kicker: "Import & Export Industry",
    heading: "Connecting Business Across Borders",
    paragraph:
      "Global trade is constantly evolving. Businesses need reliable people, efficient processes, and adaptable solutions to navigate international markets, supply chains, and changing customer demands.",
    areas: [
      "Global Trade & Distribution",
      "Import & Export Operations",
      "Supply Chain & Logistics",
      "International Sourcing",
      "Warehousing & Fulfillment",
      "Trade Technology & Solutions",
    ],
  },
    process: {
    kicker: "How We Work",
    heading: "From Brief to Border-Ready Teams",
    description:
      "A clear process for standing up trade, logistics, and warehousing teams wherever your business operates.",
    steps: [
      {
        number: "01",
        title: "Map the Requirement",
        description:
          "We learn your trade lanes, compliance needs, and the roles each market requires.",
      },
      {
        number: "02",
        title: "Source & Screen",
        description:
          "Candidates are matched for trade experience, language fluency, and regulatory knowledge.",
      },
      {
        number: "03",
        title: "Deploy the Team",
        description:
          "Teams are onboarded and placed at your warehouse, trade desk, or logistics hub.",
      },
      {
        number: "04",
        title: "Support & Scale",
        description:
          "We adjust staffing as trade volumes, markets, and seasonal demand change.",
      },
    ],
  },
solutions: {
    id: "import-export-solutions",
    kicker: "What We Do",
    heading: "Solutions for a Connected World",
    description:
      "From workforce and recruitment to professional and technology solutions, we help businesses operate confidently across markets.",
    items: [
      {
        number: "01",
        title: "Workforce Solutions",
        description:
          "Build dependable teams across trade operations, logistics, warehousing, customer support, and business functions.",
      },
      {
        number: "02",
        title: "Recruitment & Placement",
        description:
          "Connect businesses with skilled professionals across international trade, supply chain, logistics, and management.",
      },
      {
        number: "03",
        title: "Professional Services",
        description:
          "Access specialized expertise to improve trade processes, operational efficiency, and business performance.",
      },
      {
        number: "04",
        title: "Technology Solutions",
        description:
          "Enable smarter trade and supply-chain operations through technology-driven solutions and digital capabilities.",
      },
    ],
  },
    caseStudy: {
    kicker: "Case Study",
    heading: "Standing Up a New Import Hub in Two Weeks",
    client: "Mid-Size Import & Distribution Business",
    challenge:
      "A growing importer needed a fully staffed warehouse and trade-documentation desk in a new region, with no existing local hiring network.",
    approach:
      "We recruited and screened warehouse, logistics, and trade-compliance staff locally, coordinated onboarding around the client's launch date, and stayed on to support the first two months of ramp-up.",
    results: [
      { value: "45", label: "Roles filled across warehouse and trade desk" },
      { value: "14 days", label: "From kickoff to a fully staffed site" },
      { value: "100%", label: "Roles retained through the ramp-up period" },
    ],
  },
areas: {
    kicker: "Our Focus Areas",
    heading: "Where We Create Impact",
    description:
      "Supporting the people, processes, and technology that keep global trade moving.",
    items: [
      {
        number: "01",
        title: "Global Trade & Distribution",
        description:
          "Supporting businesses involved in moving products and services across domestic and international markets.",
      },
      {
        number: "02",
        title: "Import & Export Operations",
        description:
          "Helping organizations manage the people and operational capabilities required for efficient trade activities.",
      },
      {
        number: "03",
        title: "Supply Chain & Logistics",
        description:
          "Supporting connected supply chains through workforce, operational, and technology-driven solutions.",
      },
      {
        number: "04",
        title: "International Sourcing",
        description:
          "Helping businesses connect with the resources, suppliers, and capabilities needed to operate across markets.",
      },
      {
        number: "05",
        title: "Warehousing & Fulfillment",
        description:
          "Supporting efficient warehouse and fulfillment operations through adaptable teams and business solutions.",
      },
      {
        number: "06",
        title: "Trade Technology & Solutions",
        description:
          "Enabling modern trade operations with technology and digital solutions designed for a connected global economy.",
      },
    ],
  },
    testimonials: {
    kicker: "What Clients Say",
    heading: "Trusted Across Global Trade",
    items: [
      {
        quote:
          "We needed a warehouse staffed in a market we'd never operated in. Kalycor had a full team trained and ready inside two weeks.",
        name: "Logistics Director",
        role: "Import & Distribution Business",
      },
      {
        quote:
          "Their understanding of trade compliance saved us from hiring mistakes we'd made in the past. Every candidate came pre-vetted for the role.",
        name: "Head of Trade Compliance",
        role: "International Sourcing Company",
      },
      {
        quote:
          "As we've expanded into new markets, Kalycor has expanded with us. It genuinely feels like one partner across every region.",
        name: "COO",
        role: "Global Trade & Logistics Firm",
      },
    ],
  },
future: {
    kicker: "The Future of Global Trade",
    title: ["From Local", "to Global."],
    description:
      "We help businesses navigate changing markets, evolving supply chains, and new opportunities by connecting the right people, processes, and solutions.",
  },
  whyKalycor: {
    kicker: "Why Kalycor",
    heading: "One Partner. Every Border.",
    description:
      "We bring together people, expertise, and technology to help businesses operate more effectively in an increasingly connected global economy.",
    items: [
      {
        number: "01",
        title: "Global Trade Expertise",
        description:
          "Connect with people and solutions that understand the complexities of modern trade and international business.",
      },
      {
        number: "02",
        title: "Flexible Workforce Solutions",
        description:
          "Build adaptable teams across logistics, operations, warehousing, customer support, and business functions.",
      },
      {
        number: "03",
        title: "Connected Operations",
        description:
          "Support smoother operations by bringing people, processes, and technology together across the supply chain.",
      },
      {
        number: "04",
        title: "Scalable Business Support",
        description:
          "Access solutions that can adapt as your business expands into new markets and opportunities.",
      },
      {
        number: "05",
        title: "Long-Term Partnership",
        description:
          "Work with a partner focused on understanding your business and supporting sustainable growth across markets.",
      },
    ],
  },
  faq: {
    kicker: "Common Questions",
    heading: "Global Trade Staffing, Answered",
    description:
      "Straight answers to what import and export businesses most often ask us before they hire.",
    items: [
      {
        question: "Can you support staffing across multiple countries at once?",
        answer:
          "Yes. We coordinate hiring for trade, logistics, and warehousing roles across markets, so your operations stay consistent wherever you expand.",
      },
      {
        question: "Do you place people with customs and compliance experience?",
        answer:
          "We recruit professionals experienced in customs documentation, trade compliance, and international shipping regulations to keep your operations audit-ready.",
      },
      {
        question: "Can you find multilingual talent for global accounts?",
        answer:
          "Language and market fluency are part of our screening for international sourcing, sales, and account-management roles.",
      },
      {
        question: "How quickly can you ramp up a new warehouse or trade desk?",
        answer:
          "Most warehouse and trade-desk teams are fully staffed within about two weeks, with core roles filled even faster when timelines are tight.",
      },
    ],
  },
  cta: {
    kicker: "Let’s Move Forward",
    title: ["Ready to Move", "What’s Next?"],
    description:
      "Let’s build smarter solutions for a more connected global business.",
    buttonLabel: contactCtaAlt.label,
  },
};

export const realEstate: IndustryPage = {
  slug: "realestate",
  name: "Real Estate",
  metaTitle: "Real Estate",
  metaDescription:
    "Connecting real estate businesses with the people, expertise, and solutions needed to create stronger properties, operations, and opportunities.",
  hero: {
    image: "/images/industries/realestate.jpeg",
    kicker: "Real Estate",
    title: ["Building Opportunities.", "Shaping What’s Next."],
    description:
      "Connecting real estate businesses with the people, expertise, and solutions needed to create stronger properties, operations, and opportunities.",
    primaryCta: {
      label: "Explore Our Solutions",
      href: "#real-estate-solutions",
    },
    secondaryCta: contactCta,
  },
  stats: {
    kicker: "Real Estate at a Glance",
    heading: "Teams that keep properties and projects moving",
    items: [
      { value: "250+", label: "Property and facilities teams built" },
      { value: "1,200+", label: "Units supported across managed portfolios" },
      { value: "10 days", label: "Average time to fill property management roles" },
      { value: "90%", label: "Clients who return for their next project" },
    ],
  },
  overview: {
    id: "real-estate-overview",
    kicker: "Real Estate Industry",
    heading: "Real Estate in a Changing Market",
    paragraph:
      "The real estate industry is evolving through changing customer expectations, new technologies, and growing operational demands. Businesses need capable people, efficient processes, and adaptable solutions to keep properties and projects moving forward.",
    areas: [
      "Property Development",
      "Commercial Real Estate",
      "Residential Real Estate",
      "Property Management",
      "Construction & Infrastructure",
      "Facilities & Operations",
    ],
  },
    process: {
    kicker: "How We Work",
    heading: "From Brief to Boots on the Property",
    description:
      "A dependable process for building property, facilities, and construction-support teams as your portfolio grows.",
    steps: [
      {
        number: "01",
        title: "Understand the Portfolio",
        description:
          "We learn your properties, project timelines, and the roles each site needs.",
      },
      {
        number: "02",
        title: "Source & Screen",
        description:
          "Candidates are matched for property, facilities, or construction-support experience.",
      },
      {
        number: "03",
        title: "Deploy the Team",
        description:
          "Teams are onboarded and placed across your properties or project sites.",
      },
      {
        number: "04",
        title: "Support & Scale",
        description:
          "We adjust staffing as your portfolio, projects, and tenant needs evolve.",
      },
    ],
  },
solutions: {
    id: "real-estate-solutions",
    kicker: "What We Do",
    heading: "Solutions for a Changing Property Landscape",
    description:
      "From workforce and recruitment to professional and technology solutions, we help real estate businesses build stronger operations and create better opportunities.",
    items: [
      {
        number: "01",
        title: "Workforce Solutions",
        description:
          "Build dependable teams across property management, facilities, construction support, customer service, and business operations.",
      },
      {
        number: "02",
        title: "Recruitment & Placement",
        description:
          "Connect real estate organizations with skilled professionals across property, facilities, construction, sales, and management functions.",
      },
      {
        number: "03",
        title: "Professional Services",
        description:
          "Access specialized expertise to improve property operations, project support, workforce management, and business performance.",
      },
      {
        number: "04",
        title: "Technology Solutions",
        description:
          "Enable smarter property and business operations through technology-driven solutions and digital capabilities.",
      },
    ],
  },
    caseStudy: {
    kicker: "Case Study",
    heading: "Scaling a Property Management Team Across a Growing Portfolio",
    client: "Regional Property Management Firm",
    challenge:
      "A property manager acquiring several new buildings needed to staff leasing, maintenance, and tenant-support roles across sites within a single quarter.",
    approach:
      "We built a rolling recruitment pipeline matched to each property's needs, staggered onboarding around acquisition dates, and provided ongoing support as the portfolio kept growing.",
    results: [
      { value: "60+", label: "Property and facilities roles placed" },
      { value: "1,200+", label: "Units brought under staffed management" },
      { value: "90%", label: "First-year retention across placed staff" },
    ],
  },
areas: {
    kicker: "Our Focus Areas",
    heading: "Where We Create Impact",
    description:
      "Supporting the people, processes, and technology that help real estate businesses build, manage, and grow.",
    items: [
      {
        number: "01",
        title: "Property Development",
        description:
          "Supporting development teams with people and operational solutions that help move property projects forward.",
      },
      {
        number: "02",
        title: "Commercial Real Estate",
        description:
          "Helping commercial property businesses build capable teams and efficient operations across their portfolios.",
      },
      {
        number: "03",
        title: "Residential Real Estate",
        description:
          "Supporting residential property organizations with workforce and business solutions across their operations.",
      },
      {
        number: "04",
        title: "Property Management",
        description:
          "Helping property management teams improve day-to-day operations, tenant support, facilities, and service delivery.",
      },
      {
        number: "05",
        title: "Construction & Infrastructure",
        description:
          "Connecting businesses with workforce and operational capabilities needed to support construction and infrastructure projects.",
      },
      {
        number: "06",
        title: "Facilities & Operations",
        description:
          "Supporting efficient property and facility operations through dependable teams, processes, and technology.",
      },
    ],
  },
    testimonials: {
    kicker: "What Clients Say",
    heading: "Trusted Across Real Estate",
    items: [
      {
        quote:
          "As we acquired new properties, Kalycor scaled our property management team right alongside us, without a single gap in coverage.",
        name: "Portfolio Manager",
        role: "Regional Property Management Firm",
      },
      {
        quote:
          "Their construction-support staffing kept our project on schedule when our own hiring pipeline couldn't keep up.",
        name: "Project Director",
        role: "Commercial Construction Firm",
      },
      {
        quote:
          "Tenant-facing roles are hard to get right. Kalycor's candidates consistently fit our culture and stayed long-term.",
        name: "Director of Operations",
        role: "Residential Property Group",
      },
    ],
  },
future: {
    kicker: "The Future of Real Estate",
    title: ["From Property", "to Possibility."],
    description:
      "We help real estate businesses adapt to changing markets by connecting the right people, processes, and technology to create stronger operations and new opportunities.",
  },
  whyKalycor: {
    kicker: "Why Kalycor",
    heading: "From Blueprint to Building.",
    description:
      "We bring together people, expertise, and technology to help real estate businesses operate more effectively and create opportunities for sustainable growth.",
    items: [
      {
        number: "01",
        title: "Real Estate Industry Understanding",
        description:
          "Connect with people and solutions that understand the operational needs of modern property and real estate businesses.",
      },
      {
        number: "02",
        title: "Flexible Workforce Solutions",
        description:
          "Build adaptable teams across property management, facilities, construction support, customer service, and business operations.",
      },
      {
        number: "03",
        title: "Connected Operations",
        description:
          "Bring people, processes, and technology together to support smoother property and facility operations.",
      },
      {
        number: "04",
        title: "Scalable Business Support",
        description:
          "Access flexible solutions that can adapt as your property portfolio, projects, and operational requirements grow.",
      },
      {
        number: "05",
        title: "Long-Term Partnership",
        description:
          "Work with a partner focused on understanding your business and supporting sustainable growth across the real estate lifecycle.",
      },
    ],
  },
  faq: {
    kicker: "Common Questions",
    heading: "Real Estate Staffing, Answered",
    description:
      "Straight answers to what property and real estate businesses most often ask us before they hire.",
    items: [
      {
        question: "Can you staff a growing property portfolio as it scales?",
        answer:
          "Yes. We build property-management and facilities teams that expand with your portfolio, from a handful of units to large, multi-site operations.",
      },
      {
        question: "Do you supply workforce support for construction projects?",
        answer:
          "We place workforce and professional-services support across construction and infrastructure projects, coordinated around your project timelines.",
      },
      {
        question: "Can you help fill leasing and tenant-facing roles quickly?",
        answer:
          "Leasing, tenant support, and customer-service roles are among our fastest fills, since we maintain an active pipeline of property-experienced candidates.",
      },
      {
        question: "Do you support both commercial and residential portfolios?",
        answer:
          "We work across commercial, residential, and mixed-use portfolios, tailoring teams to the operational needs of each property type.",
      },
    ],
  },
  cta: {
    kicker: "Let’s Build Together",
    title: ["Ready to Build", "What’s Next?"],
    description:
      "Let’s create smarter real estate solutions that turn opportunities into lasting growth.",
    buttonLabel: contactCtaAlt.label,
  },
};

export const security: IndustryPage = {
  slug: "security",
  name: "Security",
  metaTitle: "Security",
  metaDescription:
    "Connecting businesses with people, technology, and solutions that help create safer, more resilient, and better-prepared environments.",
  hero: {
    image: "/images/industries/security.jpeg",
    kicker: "Security",
    title: ["Protecting What Matters.", "Securing What’s Next."],
    description:
      "Connecting businesses with people, technology, and solutions that help create safer, more resilient, and better-prepared environments.",
    primaryCta: { label: "Explore Our Solutions", href: "#security-solutions" },
    secondaryCta: contactCta,
  },
  stats: {
    kicker: "Security at a Glance",
    heading: "Dependable coverage when it matters most",
    items: [
      { value: "350+", label: "Security and risk professionals deployed" },
      { value: "24/7", label: "Coverage supported across client sites" },
      { value: "99%", label: "Screening and compliance pass rate" },
      { value: "48 hrs", label: "Average time to mobilize a security team" },
    ],
  },
  overview: {
    id: "security-overview",
    kicker: "Security Industry",
    heading: "Security in a Changing World",
    paragraph:
      "Businesses today need more than traditional security measures. They need dependable people, strong processes, and adaptable solutions that help protect their workplaces, facilities, assets, and operations.",
    areas: [
      "Corporate & Workplace Security",
      "Security Operations",
      "Risk Management",
      "Facility & Asset Protection",
      "Technology & Surveillance",
      "Security Workforce Solutions",
    ],
  },
    process: {
    kicker: "How We Work",
    heading: "From Brief to Boots on Site",
    description:
      "A disciplined process for deploying screened, compliant security teams as fast as your risk profile demands.",
    steps: [
      {
        number: "01",
        title: "Assess the Risk",
        description:
          "We learn your sites, threat profile, and the coverage your operation requires.",
      },
      {
        number: "02",
        title: "Screen & Verify",
        description:
          "Candidates undergo background verification and role-specific compliance checks.",
      },
      {
        number: "03",
        title: "Deploy the Team",
        description:
          "Vetted personnel are onboarded and placed on-site, often within 48 hours.",
      },
      {
        number: "04",
        title: "Support & Scale",
        description:
          "We adjust coverage as risks, events, and operational needs change.",
      },
    ],
  },
solutions: {
    id: "security-solutions",
    kicker: "What We Do",
    heading: "Solutions Built for Safer Operations",
    description:
      "From workforce and recruitment to professional and technology solutions, we help organizations build stronger and more resilient security operations.",
    items: [
      {
        number: "01",
        title: "Workforce Solutions",
        description:
          "Build dependable security and support teams across facilities, workplaces, operations, and business environments.",
      },
      {
        number: "02",
        title: "Recruitment & Placement",
        description:
          "Connect organizations with qualified professionals for security, operations, facility management, and related functions.",
      },
      {
        number: "03",
        title: "Professional Services",
        description:
          "Access specialized expertise to strengthen operational processes, workforce management, and security programs.",
      },
      {
        number: "04",
        title: "Technology Solutions",
        description:
          "Support modern security operations with technology-driven solutions that improve visibility, efficiency, and coordination.",
      },
    ],
  },
    caseStudy: {
    kicker: "Case Study",
    heading: "Mobilizing Multi-Site Coverage in Under 48 Hours",
    client: "Corporate Campus with Multiple Facilities",
    challenge:
      "A corporate client needed round-the-clock security coverage across three facilities on short notice, with strict background-screening requirements.",
    approach:
      "We drew from our pre-screened security bench, verified compliance against the client's standards, and mobilized shift-based teams across all three sites within two days.",
    results: [
      { value: "3 sites", label: "Fully staffed within 48 hours" },
      { value: "24/7", label: "Coverage sustained from day one" },
      { value: "100%", label: "Screening and compliance pass rate" },
    ],
  },
areas: {
    kicker: "Our Focus Areas",
    heading: "Where We Create Impact",
    description:
      "Supporting the people, processes, and technology that help organizations create safer and more resilient environments.",
    items: [
      {
        number: "01",
        title: "Corporate & Workplace Security",
        description:
          "Supporting organizations with dependable people and operational solutions for safer workplaces and business environments.",
      },
      {
        number: "02",
        title: "Security Operations",
        description:
          "Helping businesses strengthen day-to-day security operations through capable teams, processes, and coordinated support.",
      },
      {
        number: "03",
        title: "Risk Management",
        description:
          "Supporting organizations in identifying operational risks and building processes that improve preparedness and resilience.",
      },
      {
        number: "04",
        title: "Facility & Asset Protection",
        description:
          "Helping protect facilities, properties, equipment, and valuable business assets through structured operational support.",
      },
      {
        number: "05",
        title: "Technology & Surveillance",
        description:
          "Enabling modern security environments through technology-driven solutions, monitoring capabilities, and digital tools.",
      },
      {
        number: "06",
        title: "Security Workforce Solutions",
        description:
          "Connecting organizations with adaptable talent for security, facility operations, support functions, and related business needs.",
      },
    ],
  },
    testimonials: {
    kicker: "What Clients Say",
    heading: "Trusted Across Security Operations",
    items: [
      {
        quote:
          "We had multi-site coverage confirmed within two days, with every guard fully screened. That turnaround is rare in this industry.",
        name: "Head of Facilities",
        role: "Corporate Campus",
      },
      {
        quote:
          "Kalycor's screening process is thorough without slowing us down. We've never had a compliance concern with a placement.",
        name: "Director of Security",
        role: "Multi-Site Enterprise",
      },
      {
        quote:
          "They understand risk, not just staffing. Their teams adapt as our threat profile and event schedule change.",
        name: "VP of Risk Management",
        role: "National Retail Operator",
      },
    ],
  },
future: {
    kicker: "The Future of Security",
    title: ["From Protection", "to Preparedness."],
    description:
      "We help organizations prepare for changing risks and operational challenges by connecting the right people, processes, and technology.",
  },
  whyKalycor: {
    kicker: "Why Kalycor",
    heading: "Ready Before Risk Is.",
    description:
      "We bring together people, expertise, and technology to help organizations build safer, stronger, and more resilient operations.",
    items: [
      {
        number: "01",
        title: "Security Industry Understanding",
        description:
          "Connect with people and solutions that understand the operational needs of modern security and workplace environments.",
      },
      {
        number: "02",
        title: "Reliable Workforce Solutions",
        description:
          "Build dependable teams across security operations, facilities, support functions, and business environments.",
      },
      {
        number: "03",
        title: "Technology-Enabled Operations",
        description:
          "Bring people, processes, and technology together to support more connected and efficient security operations.",
      },
      {
        number: "04",
        title: "Scalable Business Support",
        description:
          "Access flexible solutions that can adapt as your facilities, workforce, and operational requirements evolve.",
      },
      {
        number: "05",
        title: "Long-Term Partnership",
        description:
          "Work with a partner focused on understanding your organization and supporting sustainable operational improvement.",
      },
    ],
  },
  faq: {
    kicker: "Common Questions",
    heading: "Security Staffing, Answered",
    description:
      "Straight answers to what organizations most often ask us before they hire security and risk teams.",
    items: [
      {
        question: "How thoroughly are security personnel screened?",
        answer:
          "Every candidate goes through background verification and role-specific compliance checks before being placed on your site.",
      },
      {
        question: "Can you scale coverage for events or short-term needs?",
        answer:
          "Yes. We can mobilize additional security personnel for events, seasonal demand, or short-term projects, typically within 48 hours.",
      },
      {
        question: "Do you support technology-enabled security operations?",
        answer:
          "We place professionals experienced with surveillance systems, access control, and monitoring technology alongside traditional security roles.",
      },
      {
        question: "Can you provide round-the-clock coverage across multiple sites?",
        answer:
          "We build shift-based teams structured for 24/7 coverage across single or multi-site operations, coordinated to your risk profile.",
      },
    ],
  },
  cta: {
    kicker: "Let’s Build a Safer Future",
    title: ["Ready to Secure", "What’s Next?"],
    description:
      "Let’s build smarter security solutions for a safer and more resilient business environment.",
    buttonLabel: contactCtaAlt.label,
  },
};

/** Every industry page, keyed by its URL slug (`/industries/[slug]`). */
export const industryPages = {
  agriculture,
  "import-export": importExport,
  realestate: realEstate,
  security,
} as const satisfies Record<string, IndustryPage>;

export type IndustrySlug = keyof typeof industryPages;