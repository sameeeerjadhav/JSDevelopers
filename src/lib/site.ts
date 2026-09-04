export const siteConfig = {
  // TODO: swap for the real production domain once it's registered/confirmed.
  siteUrl: "https://www.jsgardendevelopers.com",
  name: "J.S. Garden Developers",
  shortName: "JS Garden Developers",
  legalName: "Jeevan Sagar Garden Developers",
  phone: "9035528080",
  phoneDisplay: "+91 9035528080",
  email: "jsgardendevelopers@gmail.com",
  whatsapp: "919035528080",
  address:
    "#230/1, 2nd Floor, Above Mohan Jewellers, Old Madras Road, K.R. Puram, Bengaluru - 560036",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Old%20Madras%20Road%20K.R.%20Puram%20Bengaluru%20560036&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Old+Madras+Road+K.R.+Puram+Bengaluru+560036",
  iso: "ISO 9001 Certified",
  stats: [
    { value: "12+", label: "Projects Completed" },
    { value: "12+", label: "Years of Experience" },
    { value: "100+", label: "Acres Developed" },
    { value: "500+", label: "Skilled Workforce" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Our Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export type ProjectCategory = {
  id: string;
  label: string;
  headline: string;
  body: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  projectIds: string[];
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  location: string;
  shortLocation: string;
  status: string;
  badges: string[];
  banker?: string;
  reraNo?: string;
  description: string;
  priceLabel: string;
  heroImage: string;
  overview: { label: string; value: string }[];
  highlights: string[];
  amenities: string[];
  amenitiesOutdoor?: string[];
  amenitiesIndoor?: string[];
  locationHighlights?: { place: string; time: string }[];
  storyHeadline?: string;
  storySubhead?: string;
  storyBody?: string[];
  communityHeadline?: string;
  communitySubhead?: string;
  communityBody?: string;
  gallery: { src: string; alt: string }[];
  layoutPlans?: { title: string; src: string }[];
  brochureUrl?: string;
  siteUpdates?: { src: string; alt: string }[];
  mapEmbedUrl?: string;
  mapLink?: string;
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "villa-plots",
    label: "Villa Plots",
    headline: "Premium villa plots, thoughtfully laid out.",
    body: "Open layouts designed for independent homes — clear dimensions, approach roads, and locations chosen for long-term growth along Bengaluru’s eastern corridor.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern villa exterior among trees",
    ctaLabel: "Learn more",
    ctaHref: "/projects#listings",
    projectIds: [
      "js-lakeview-garden",
      "dhanapriya-paradise",
      "kanakasree-enclave",
    ],
  },
  {
    id: "ongoing",
    label: "Ongoing",
    headline: "Live projects you can visit today.",
    body: "Active layouts with MPA approvals and RERA registration where applicable. Walk the land, review paperwork, and speak directly with our development team before you decide.",
    image: "/projects/js-lakeview-garden/updates/update-9.jpg",
    imageAlt: "Ongoing villa plot layout with roads and street lights",
    ctaLabel: "View listings",
    ctaHref: "/projects#listings",
    projectIds: [
      "js-lakeview-garden",
      "dhanapriya-paradise",
      "kanakasree-enclave",
      "royal-meadows",
    ],
  },
  {
    id: "corridors",
    label: "Growth Corridors",
    headline: "Land where connectivity compounds value.",
    body: "Whitefield, Malur, Hoskote, Bagepalli and Doddakadathur — corridors with road upgrades, industrial pull and residential demand. We help you choose plots with a clear location story.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Aerial view of developing urban corridor",
    ctaLabel: "Explore locations",
    ctaHref: "/contact",
    projectIds: [
      "js-lakeview-garden",
      "dhanapriya-paradise",
      "kanakasree-enclave",
      "royal-meadows",
    ],
  },
  {
    id: "completed",
    label: "Completed",
    headline: "Delivered layouts. Proven track record.",
    body: "Over a decade of completed residential projects across Bengaluru’s periphery. Ask us for past layout references when you want proof beyond a brochure.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Residential neighbourhood aerial view",
    ctaLabel: "Talk to us",
    ctaHref: "/contact",
    projectIds: [],
  },
];

export const projects: Project[] = [
  {
    id: "js-lakeview-garden",
    name: "Jeevan Sagar Lakeview Garden",
    tagline: "DTCP-approved villa plots",
    location:
      "Sy No. 523/1 & 2, Mittemari, Bagepalli to Chintamani Main Road, Bagepalli Taluk, Chikkaballapura Dist.",
    shortLocation: "Mittemari, Bagepalli",
    status: "Ongoing",
    badges: ["DC Conversion", "DTCP Approved"],
    banker: "LIC HFL · IDBI Bank · Axis Finance",
    reraNo: "DTCP-284/BLR/CBR/LAY 2024-25",
    description:
      "DTCP-approved residential layout on the Bagepalli–Chintamani corridor — grand entrance, CC roads, parks and plot sizes from 30×40 to 40×60, positioned for North Bengaluru–NH-44 growth.",
    priceLabel: "On request",
    heroImage: "/projects/js-lakeview-garden/hero-entrance-2.jpg",
    brochureUrl: "/projects/js-lakeview-garden/brochure.pdf",
    storyHeadline: "Lakeview living. Highway linked.",
    storySubhead: "Emerging corridor. Clear approvals.",
    storyBody: [
      "Jeevan Sagar Lakeview Garden sits at Mittemari on the Bagepalli–Chintamani main road — within the NH-44 Bengaluru–Hyderabad growth belt and close to Bagepalli’s industrial expansion.",
      "DC-converted and DTCP-approved residential layout with infrastructure you can walk today: internal CC roads, street lighting, parks and gated entry.",
    ],
    communityHeadline: "Designed for life",
    communitySubhead: "Built for community",
    communityBody:
      "Avenue plantation, children’s play area, parks and a landscaped central green — planned for families who want plot ownership with everyday amenities in place.",
    locationHighlights: [
      { place: "Bagepalli Bus Stop", time: "8 km" },
      { place: "NH-44 (Bengaluru–Hyderabad)", time: "10 km" },
      { place: "Chikkaballapur", time: "40 km" },
      { place: "Kempegowda International Airport", time: "60 km" },
      { place: "Bengaluru City", time: "90 km" },
    ],
    amenitiesOutdoor: [
      "Grand entrance arch",
      "Internal CC roads",
      "Modern street lights",
      "Park with avenue plantation",
      "Children’s play area",
      "Precast compound wall",
    ],
    amenitiesIndoor: [
      "Underground electricity",
      "Overhead tank with water connection per plot",
      "Underground drainage (DWC pipes)",
      "STP plant",
      "CCTV camera",
    ],
    layoutPlans: [
      {
        title: "Layout master plan",
        src: "/projects/js-lakeview-garden/plans/layout-master-plan.png",
      },
    ],
    siteUpdates: [
      {
        src: "/projects/js-lakeview-garden/updates/update-1.jpg",
        alt: "Interlocking paver walkway in progress",
      },
      {
        src: "/projects/js-lakeview-garden/updates/update-2.jpg",
        alt: "Site development progress",
      },
      {
        src: "/projects/js-lakeview-garden/updates/update-3.jpg",
        alt: "Layout infrastructure update",
      },
      {
        src: "/projects/js-lakeview-garden/updates/update-4.jpg",
        alt: "Road and plot works",
      },
      {
        src: "/projects/js-lakeview-garden/updates/update-5.jpg",
        alt: "Internal roads with landscaping and benches",
      },
      {
        src: "/projects/js-lakeview-garden/updates/update-6.jpg",
        alt: "Ongoing site development",
      },
      {
        src: "/projects/js-lakeview-garden/updates/update-7.jpg",
        alt: "Plot demarcation and roads",
      },
      {
        src: "/projects/js-lakeview-garden/updates/update-8.jpg",
        alt: "Street lighting and avenue planting",
      },
      {
        src: "/projects/js-lakeview-garden/updates/update-9.jpg",
        alt: "Wide view of layout roads and plots",
      },
    ],
    overview: [
      { label: "Project Name", value: "Jeevan Sagar Lakeview Garden" },
      { label: "Type", value: "DTCP-Approved Residential Layout" },
      {
        label: "Plot sizes",
        value: "30×40, 30×50, 40×60 & Odd sites",
      },
      {
        label: "Location",
        value: "Mittemari, Bagepalli Taluk, Chikkaballapura",
      },
      {
        label: "Approvals",
        value: "DC Conversion · DTCP Approved (2024–25)",
      },
      {
        label: "License",
        value: "DTCP-284/BLR/CBR/LAY 2024-25",
      },
      { label: "Bankers", value: "LIC HFL · IDBI Bank · Axis Finance" },
    ],
    highlights: [
      "DC conversion & DTCP-approved residential layout",
      "Plot sizes: 30×40, 30×50, 40×60 & odd sites",
      "On Bagepalli–Chintamani main road, Mittemari",
      "NH-44 Bengaluru–Hyderabad corridor access (~10 km)",
      "Near Bagepalli industrial growth belt",
      "Internal 40 ft & 30 ft roads with parks",
      "Bankers: LIC HFL, IDBI Bank, Axis Finance",
    ],
    amenities: [
      "Grand Entrance Arch",
      "Internal CC Roads",
      "Underground Electricity",
      "Modern Street Lights",
      "Overhead Tank with Water Connection",
      "Park with Avenue Plantation",
      "Children’s Play Area",
      "CCTV Camera",
      "Underground Drainage (DWC)",
      "STP Plant",
      "Precast Compound Wall",
    ],
    gallery: [
      {
        src: "/projects/js-lakeview-garden/hero-entrance-2.jpg",
        alt: "J.S. Lake View Garden grand entrance gate",
      },
      {
        src: "/projects/js-lakeview-garden/hero-entrance-1.jpg",
        alt: "Entrance elevation with project signage",
      },
      {
        src: "/projects/js-lakeview-garden/updates/update-9.jpg",
        alt: "Ongoing layout with roads and street lights",
      },
      {
        src: "/projects/js-lakeview-garden/updates/update-5.jpg",
        alt: "Internal roads and landscaping",
      },
    ],
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Mittemari%20Bagepalli%20Chikkaballapura%20Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Mittemari+Bagepalli+Chikkaballapura+Karnataka",
  },
  {
    id: "dhanapriya-paradise",
    name: "Dhanapriya Paradise",
    tagline: "Premium villa plots",
    location: "Madanahatti, Malur · Whitefield corridor",
    shortLocation: "Near Malur Whitefield Road",
    status: "For Sale",
    badges: ["MPA Approved"],
    description:
      "Premium villa plots positioned for growth along the Whitefield–Malur belt — ideal for home builders and long-term investors.",
    priceLabel: "Rs. 1600 / sq.ft",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
    storyHeadline: "Everything is close. Everyone connected.",
    storySubhead: "Urban ease. Natural calm.",
    storyBody: [
      "Dhanapriya Paradise sits on the Whitefield–Malur growth belt — close enough to the city for daily life, open enough for an independent villa.",
      "Clear dimensions, approach roads and MPA approvals mean you can plan your home with paperwork you can verify upfront.",
    ],
    communityHeadline: "Designed for life",
    communitySubhead: "Built for community",
    communityBody:
      "Parks, gated entry, utility-ready plots and spaces planned for families who want to build and stay — not just speculate.",
    locationHighlights: [
      { place: "Malur–Whitefield Road", time: "Nearby" },
      { place: "Whitefield IT corridor", time: "Corridors" },
      { place: "Malur town amenities", time: "Short drive" },
      { place: "Bengaluru city access", time: "Eastern belt" },
    ],
    amenitiesOutdoor: [
      "Park",
      "Children's play area",
      "Car parking",
      "Rain water harvesting",
    ],
    amenitiesIndoor: [
      "24×7 electricity",
      "24×7 water supply",
      "24×7 security",
      "Gated community",
      "Vastu compliant layouts",
    ],
    layoutPlans: [
      {
        title: "Typical villa plot layout",
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Approach & open spaces",
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
      },
    ],
    overview: [
      { label: "Project Name", value: "Dhanapriya Paradise" },
      { label: "Type", value: "Premium Villa Plots" },
      { label: "Location", value: "Madanahatti, Malur (Whitefield corridor)" },
      { label: "Approvals", value: "MPA Approved" },
      { label: "Status", value: "For Sale" },
    ],
    highlights: [
      "Near Malur–Whitefield growth corridor",
      "MPA-approved layout",
      "Ideal for independent villa construction",
      "Clear approach and plotted development",
      "Site visits arranged on request",
    ],
    amenities: [
      "24×7 Electricity",
      "24×7 Security",
      "24×7 Water Supply",
      "Car Parking",
      "Children's Play Area",
      "Gated Community",
      "Individual Water Connection",
      "Park",
      "Rain Water Harvesting",
      "Vastu Compliant",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        alt: "Modern villa at dusk",
      },
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        alt: "Premium residential home exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1600047509807-ba8f99d367ea?auto=format&fit=crop&w=1200&q=80",
        alt: "Landscaped residential property",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        alt: "Contemporary home facade",
      },
    ],
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Madanahatti%20Malur%20Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Madanahatti+Malur+Karnataka",
  },
  {
    id: "kanakasree-enclave",
    name: "Kanakasree Enclave",
    tagline: "Premium villa plots",
    location: "Lingapura, Malur · Hoskote–Malur Road",
    shortLocation: "Malur (Hoskote – Malur Road)",
    status: "For Sale",
    badges: ["MPA Approved", "RERA Registered"],
    banker: "LIC HFL",
    reraNo: "RERA Registered",
    description:
      "RERA-registered layout with strong road connectivity to Old Madras Road, Hoskote, Whitefield and Malur.",
    priceLabel: "On request",
    heroImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
    storyHeadline: "Connected corridors. Clear paperwork.",
    storySubhead: "RERA-ready. Road-linked.",
    storyBody: [
      "Kanakasree Enclave links Malur to Hoskote, Old Madras Road and Whitefield — with plot sizes that suit independent villa construction.",
      "MPA-approved and RERA-registered, with LIC HFL banker support so financing conversations start with clarity.",
    ],
    communityHeadline: "Designed for life",
    communitySubhead: "Built for community",
    communityBody:
      "Wide internal roads, parks, underground drainage and gated living — amenities planned for everyday family use.",
    locationHighlights: [
      { place: "Malur Railway Station", time: "5 minutes" },
      { place: "Hoskote", time: "15 minutes" },
      { place: "Kempegowda International Airport", time: "40 minutes" },
      { place: "Old Madras Road / Whitefield", time: "Connected" },
    ],
    amenitiesOutdoor: [
      "Park",
      "Jogging / walking track",
      "Wide internal roads",
      "Street lights",
    ],
    amenitiesIndoor: [
      "Electricity",
      "Overhead water tank",
      "Individual water connection",
      "Underground drainage",
      "Gated community",
    ],
    layoutPlans: [
      {
        title: "Phase layout overview",
        src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Plot typology reference",
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      },
    ],
    overview: [
      { label: "Project Name", value: "Kanakasree Enclave" },
      { label: "Size", value: "1st & 2nd Phase — 11 Acres" },
      {
        label: "Dimensions",
        value: "30×40, 30×50, 30×60 & Odd Sites",
      },
      { label: "Location", value: "Lingapura, Malur" },
      { label: "Approvals", value: "MPA Approved · RERA Registered" },
      { label: "Banker", value: "LIC HFL" },
    ],
    highlights: [
      "5 min. drive from Malur Railway Station",
      "15 min. drive from Hoskote",
      "40 min. drive from Kempegowda International Airport",
      "Connected to Old Madras Road & Whitefield",
      "RERA-registered premium villa plots",
    ],
    amenities: [
      "Electricity",
      "Gated Community",
      "Individual Water Connection",
      "Jogging / Walking Track",
      "Overhead Water Tank",
      "Water Supply",
      "Park",
      "Street Lights",
      "Underground Drainage",
      "Wide Internal Roads",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        alt: "Luxury villa with pool at night",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        alt: "Modern residential architecture",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        alt: "Home exterior with landscaping",
      },
      {
        src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
        alt: "Contemporary living space exterior",
      },
    ],
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Lingapura%20Malur%20Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Lingapura+Malur+Karnataka",
  },
  {
    id: "royal-meadows",
    name: "Royal Meadows",
    tagline: "Plots for sale",
    location: "Near Doddakadathur",
    shortLocation: "Near Doddakadathur",
    status: "Available",
    badges: ["Layout Ready"],
    description:
      "Open plots in a developing corridor — a practical option for buyers looking beyond the city crush.",
    priceLabel: "On request",
    heroImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80",
    storyHeadline: "Space to grow. Room to decide.",
    storySubhead: "Peripheral value. Clear intent.",
    storyBody: [
      "Royal Meadows offers layout-ready plots in a developing corridor near Doddakadathur — suited to buyers planning beyond the city crush.",
      "Walk the land, review documentation with our team, and choose a plot with a long-term holding story.",
    ],
    communityHeadline: "Designed for life",
    communitySubhead: "Built for tomorrow",
    communityBody:
      "Internal roads, park space and utility provisions laid out for residential living as the corridor matures.",
    locationHighlights: [
      { place: "Doddakadathur belt", time: "On corridor" },
      { place: "Peripheral Bengaluru access", time: "Growing links" },
      { place: "Site visit coordination", time: "On request" },
    ],
    amenitiesOutdoor: ["Park space", "Internal roads", "Street lighting"],
    amenitiesIndoor: ["Electricity", "Water supply", "Drainage"],
    layoutPlans: [
      {
        title: "Layout overview",
        src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Open plot reference",
        src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
      },
    ],
    overview: [
      { label: "Project Name", value: "Royal Meadows" },
      { label: "Type", value: "Residential Plots" },
      { label: "Location", value: "Near Doddakadathur" },
      { label: "Status", value: "Available" },
      { label: "Focus", value: "Affordable plotted development" },
    ],
    highlights: [
      "Developing peripheral corridor",
      "Suitable for long-term investment",
      "Layout-ready plotted sites",
      "Easy site-visit coordination",
      "Clear documentation support",
    ],
    amenities: [
      "Electricity",
      "Water Supply",
      "Internal Roads",
      "Park Space",
      "Street Lighting",
      "Drainage",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
        alt: "Suburban residential home",
      },
      {
        src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
        alt: "House with front lawn",
      },
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        alt: "Modern home at twilight",
      },
    ],
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Doddakadathur%20Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Doddakadathur+Karnataka",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.id === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.id);
}
