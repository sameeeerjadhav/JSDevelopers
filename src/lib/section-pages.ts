export type SectionPage = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  body: string[];
  highlights: string[];
  relatedLinks: { label: string; href: string }[];
};

export const servicePages: SectionPage[] = [
  {
    slug: "buying",
    title: "Buying",
    eyebrow: "Services · Buying",
    headline: "From first enquiry to the plot you choose",
    description:
      "End-to-end support for buyers exploring villa plots across Bagepalli, Malur, Hoskote and Whitefield corridors.",
    body: [
      "We help you compare layouts, understand pricing and payment terms, and coordinate site visits at times that work for your family or investment team.",
      "Walk active projects such as Jeevan Sagar Lakeview Garden — see roads, lighting and open spaces on the ground before you decide.",
      "Our Bengaluru office and WhatsApp line are staffed by people who know each project — not a generic call centre.",
      "Whether you are buying your first plot or adding to a portfolio, we walk you through approvals, dimensions and registration steps before you commit.",
    ],
    highlights: [
      "Site visit coordination",
      "Plot comparison across projects",
      "Price and payment term clarity",
      "NRI and family plot planning",
      "On-ground layout walkthroughs",
    ],
    relatedLinks: [
      { label: "View projects", href: "/projects" },
      { label: "Lakeview Garden", href: "/projects/js-lakeview-garden" },
      { label: "Documentation support", href: "/services/documentation" },
      { label: "Book a visit", href: "/contact" },
    ],
  },
  {
    slug: "documentation",
    title: "Documentation",
    eyebrow: "Services · Documentation",
    headline: "Paperwork explained in plain language",
    description:
      "Clear approval trails, title checks and compliance details for every layout we represent — including DTCP and MPA where applicable.",
    body: [
      "Every project comes with approvals you can verify — DC conversion, DTCP, MPA, RERA where applicable, and layout plans you can review with your advocate.",
      "For Lakeview Garden, we share DTCP licence details (DTCP-284/BLR/CBR/LAY 2024-25) and banker introductions with LIC HFL, IDBI and Axis Finance.",
      "We coordinate encumbrance checks and registration support so you are not navigating government offices alone.",
      "Our ISO 9001 processes mean documentation is tracked and shared consistently across projects.",
    ],
    highlights: [
      "Approval certificates",
      "Title and encumbrance review",
      "DTCP / MPA / RERA guidance",
      "Registration coordination",
      "Banker introductions",
    ],
    relatedLinks: [
      { label: "About our standards", href: "/about" },
      { label: "Browse projects", href: "/projects" },
      { label: "Buying support", href: "/services/buying" },
      { label: "Request documents", href: "/contact" },
    ],
  },
  {
    slug: "after-sales",
    title: "After Sales",
    eyebrow: "Services · After Sales",
    headline: "Support that continues after booking",
    description:
      "Possession coordination, community updates and resale guidance for our buyer community.",
    body: [
      "Booking a plot is the start of the relationship — not the end. We stay available for possession handover, maintenance questions and community updates.",
      "Ongoing layouts share progress photos and infrastructure milestones so you can track delivery on the ground.",
      "If you need to resell or refer a buyer, our team can guide you on process and timing within the layout.",
      "Complaints and feedback are handled directly — reach us by phone, email or WhatsApp at our K.R. Puram office.",
    ],
    highlights: [
      "Possession handover",
      "Maintenance guidance",
      "Construction progress updates",
      "Resale assistance",
      "Referral programme",
    ],
    relatedLinks: [
      { label: "Contact support", href: "/contact" },
      { label: "Our projects", href: "/projects" },
      { label: "Buying journey", href: "/services/buying" },
      { label: "About us", href: "/about" },
    ],
  },
];

export const locationPages: SectionPage[] = [
  {
    slug: "whitefield",
    title: "Whitefield",
    eyebrow: "Locations",
    headline: "Residential land near Bengaluru’s IT corridor",
    description:
      "Layouts with strong connectivity, rental demand and mature social infrastructure.",
    body: [
      "Whitefield and its surrounding belts remain one of Bengaluru’s most sought-after residential corridors — driven by IT employment, schools and hospitals.",
      "Our projects in the Malur–Whitefield growth zone offer plotted development with MPA approvals and clear approach roads.",
      "Buyers choose this corridor for end-use villa construction and medium-term appreciation backed by infrastructure upgrades.",
    ],
    highlights: [
      "IT corridor proximity",
      "Schools and hospitals nearby",
      "Strong rental demand",
      "Road connectivity improving",
    ],
    relatedLinks: [
      { label: "Projects in this belt", href: "/projects/category/growth-corridors" },
      { label: "Schedule a site visit", href: "/contact" },
      { label: "Investment outlook", href: "/insights" },
    ],
  },
  {
    slug: "malur",
    title: "Malur",
    eyebrow: "Locations",
    headline: "Emerging growth east of Bengaluru",
    description:
      "Attractive entry pricing with improving road links and industrial expansion nearby.",
    body: [
      "Malur has emerged as a practical choice for buyers who want larger plots at accessible price points — without sacrificing approval quality.",
      "Dhanapriya Paradise and Kanakasree Enclave sit along the Whitefield–Malur belt with layouts you can walk before you buy.",
      "Industrial growth and highway upgrades continue to strengthen the case for long-term land investment in this pocket.",
    ],
    highlights: [
      "Value-oriented plot sizes",
      "Whitefield corridor access",
      "Industrial belt nearby",
      "Active MPA-approved layouts",
    ],
    relatedLinks: [
      { label: "Dhanapriya Paradise", href: "/projects/dhanapriya-paradise" },
      { label: "Kanakasree Enclave", href: "/projects/kanakasree-enclave" },
      { label: "Book a visit", href: "/contact" },
    ],
  },
  {
    slug: "hoskote",
    title: "Hoskote",
    eyebrow: "Locations",
    headline: "Strategic corridor with airport proximity",
    description:
      "Suited for buyers planning medium to long-term appreciation along planned infrastructure routes.",
    body: [
      "Hoskote benefits from airport proximity and ongoing road projects that improve access to central Bengaluru and the eastern periphery.",
      "We track layout approvals and connectivity changes so buyers understand what is live today versus planned for tomorrow.",
      "Royal Meadows and corridor projects in our portfolio give you options to compare plot sizes, amenities and pricing in one conversation.",
    ],
    highlights: [
      "Airport access",
      "Planned road upgrades",
      "Portfolio projects available",
      "Medium-term appreciation focus",
    ],
    relatedLinks: [
      { label: "Royal Meadows", href: "/projects/royal-meadows" },
      { label: "All projects", href: "/projects" },
      { label: "Talk to us", href: "/contact" },
    ],
  },
];

export const projectCategoryPages: SectionPage[] = [
  {
    slug: "villa-plots",
    title: "Villa Plots",
    eyebrow: "Projects",
    headline: "Premium villa plots, thoughtfully laid out",
    description:
      "Open layouts designed for independent homes with clear dimensions and approach roads.",
    body: [
      "Our villa plot projects are planned for families who want to build independent homes — not cramped row-house footprints.",
      "Each layout includes defined road widths, utility provisions and amenities suited to gated residential communities.",
      "Locations are chosen along Bengaluru’s eastern growth corridors where connectivity and approvals align.",
    ],
    highlights: [
      "Clear plot dimensions",
      "MPA-approved layouts",
      "Gated community amenities",
      "Site visits on request",
    ],
    relatedLinks: [
      { label: "View listings", href: "/projects#listings" },
      { label: "Dhanapriya Paradise", href: "/projects/dhanapriya-paradise" },
      { label: "Enquire now", href: "/contact" },
    ],
  },
  {
    slug: "ongoing",
    title: "Ongoing",
    eyebrow: "Projects",
    headline: "Live projects you can visit today",
    description:
      "Active layouts with earthwork, roads and amenities progressing on the ground.",
    body: [
      "Ongoing projects let you see development in progress — roads taking shape, utilities being laid and amenities coming up.",
      "We share construction updates and welcome repeat site visits for buyers who want to track progress before finalising.",
      "Early-bird pricing and payment plans may be available on select layouts — ask our team for current terms.",
    ],
    highlights: [
      "Walk the land today",
      "Construction updates",
      "Early-bird pricing options",
      "Bank tie-up support",
    ],
    relatedLinks: [
      { label: "All projects", href: "/projects" },
      { label: "Payment plans", href: "/contact" },
      { label: "WhatsApp updates", href: "/contact" },
    ],
  },
  {
    slug: "growth-corridors",
    title: "Growth Corridors",
    eyebrow: "Projects",
    headline: "Land where connectivity compounds value",
    description:
      "Portfolios along infrastructure-led routes — Whitefield, Malur, Hoskote and beyond.",
    body: [
      "Growth corridors are where road upgrades, industrial pull and residential demand intersect — and where land stories matter most.",
      "We focus on corridors we know deeply: not every pin on the map, but belts where we have delivered layouts and maintain relationships.",
      "Compare areas, connectivity and pricing with our team before you choose a plot.",
    ],
    highlights: [
      "Whitefield–Malur belt",
      "Hoskote airport corridor",
      "Infrastructure-led growth",
      "Area comparison support",
    ],
    relatedLinks: [
      { label: "Whitefield area", href: "/locations/whitefield" },
      { label: "Malur area", href: "/locations/malur" },
      { label: "Hoskote area", href: "/locations/hoskote" },
    ],
  },
];

export const insightArticles = [
  {
    slug: "buying-guide",
    title: "First-time plot buyer’s guide",
    excerpt:
      "What to check on site, which documents to request, and how to compare two layouts fairly.",
    date: "Aug 2026",
  },
  {
    slug: "documentation-101",
    title: "Documentation 101 for villa plots",
    excerpt:
      "MPA approvals, RERA registration, encumbrance certificates — explained without legal jargon.",
    date: "Jul 2026",
  },
  {
    slug: "loan-basics",
    title: "Loan basics for land purchase",
    excerpt:
      "How banks view plotted land, what LTV to expect, and documents your banker will ask for.",
    date: "Jun 2026",
  },
  {
    slug: "area-spotlight-malur",
    title: "Area spotlight: Malur–Whitefield belt",
    excerpt:
      "Why this corridor attracts both end-users and investors — and what to verify before buying.",
    date: "May 2026",
  },
  {
    slug: "market-update-q2",
    title: "Eastern Bengaluru land market — Q2 update",
    excerpt:
      "Pricing trends, approval timelines and buyer sentiment across our active corridors.",
    date: "Apr 2026",
  },
  {
    slug: "investment-tips",
    title: "Five questions before you invest in plots",
    excerpt:
      "Approvals, access roads, water, resale liquidity and developer track record — a practical checklist.",
    date: "Mar 2026",
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((p) => p.slug === slug);
}

export function getLocationPage(slug: string) {
  return locationPages.find((p) => p.slug === slug);
}

export function getProjectCategoryPage(slug: string) {
  return projectCategoryPages.find((p) => p.slug === slug);
}

export function getInsightArticle(slug: string) {
  return insightArticles.find((a) => a.slug === slug);
}
