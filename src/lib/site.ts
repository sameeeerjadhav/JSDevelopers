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
  description: string;
  priceLabel: string;
  heroImage: string;
  overview: { label: string; value: string }[];
  highlights: string[];
  amenities: string[];
  gallery: { src: string; alt: string }[];
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
    projectIds: ["dhanapriya-paradise", "kanakasree-enclave"],
  },
  {
    id: "ongoing",
    label: "Ongoing",
    headline: "Live projects you can visit today.",
    body: "Active layouts with MPA approvals and RERA registration where applicable. Walk the land, review paperwork, and speak directly with our development team before you decide.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Contemporary development at dusk",
    ctaLabel: "View listings",
    ctaHref: "/projects#listings",
    projectIds: ["dhanapriya-paradise", "kanakasree-enclave", "royal-meadows"],
  },
  {
    id: "corridors",
    label: "Growth Corridors",
    headline: "Land where connectivity compounds value.",
    body: "Whitefield, Malur, Hoskote and Doddakadathur — corridors with road upgrades, industrial pull and residential demand. We help you choose plots with a clear location story.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Aerial view of developing urban corridor",
    ctaLabel: "Explore locations",
    ctaHref: "/contact",
    projectIds: ["dhanapriya-paradise", "kanakasree-enclave", "royal-meadows"],
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
    description:
      "RERA-registered layout with strong road connectivity to Old Madras Road, Hoskote, Whitefield and Malur.",
    priceLabel: "On request",
    heroImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
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
