export const siteConfig = {
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

export const projects = [
  {
    id: "dhanapriya-paradise",
    name: "Dhanapriya Paradise",
    tagline: "Premium villa plots",
    location: "Madanahatti, Malur · Whitefield corridor",
    status: "For Sale",
    badges: ["MPA Approved"],
    description:
      "Premium villa plots positioned for growth along the Whitefield–Malur belt — ideal for home builders and long-term investors.",
  },
  {
    id: "kanakasree-enclave",
    name: "Kanakasree Enclave",
    tagline: "Premium villa plots",
    location: "Lingapura, Malur · Hoskote–Malur Road",
    status: "For Sale",
    badges: ["MPA Approved", "RERA Registered"],
    banker: "LIC HFL",
    description:
      "RERA-registered layout with strong road connectivity to Old Madras Road, Hoskote, Whitefield and Malur.",
  },
  {
    id: "royal-meadows",
    name: "Royal Meadows",
    tagline: "Plots for sale",
    location: "Near Doddakadathur",
    status: "Available",
    badges: ["Layout Ready"],
    description:
      "Open plots in a developing corridor — a practical option for buyers looking beyond the city crush.",
  },
];
