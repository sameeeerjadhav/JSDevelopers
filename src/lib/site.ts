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
    headline: "MPA & DTCP villa plots across Malur and Bagepalli.",
    body: "Lakeview Garden, Dhanapriya Paradise, Kanakasree Enclave and Royal Meadows — clear plot sizes, approach roads and approvals you can verify before you build.",
    image: "/projects/dhanapriya-paradise/hero.jpg",
    imageAlt: "Dhanapriya Paradise premium villa plots near Malur Whitefield Road",
    ctaLabel: "View villa plots",
    ctaHref: "/projects/category/villa-plots",
    projectIds: [
      "js-lakeview-garden",
      "dhanapriya-paradise",
      "kanakasree-enclave",
      "royal-meadows",
    ],
  },
  {
    id: "ongoing",
    label: "Ongoing",
    headline: "Live layouts you can walk today.",
    body: "Roads, lighting and amenities progressing on the ground at Lakeview Garden and our Malur corridor projects — visit the site, review paperwork, then decide.",
    image: "/projects/js-lakeview-garden/updates/update-9.jpg",
    imageAlt: "Lakeview Garden on-site roads, plots and street infrastructure",
    ctaLabel: "See ongoing projects",
    ctaHref: "/projects/category/ongoing",
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
    headline: "Whitefield, Malur, Hoskote and NH-44 growth belts.",
    body: "Plots positioned on corridors with express roads, industrial demand and airport links — Doddakadathur, Lingapura, Madanahatti and Mittemari–Bagepalli.",
    image: "/projects/royal-meadows/hero.jpg",
    imageAlt: "Royal Meadows near Doddakadathur on the Malur growth corridor",
    ctaLabel: "Explore locations",
    ctaHref: "/locations",
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
    headline: "A decade of delivered layouts.",
    body: "Over 12+ years of plotted developments across Bengaluru’s periphery. Ask our K.R. Puram team for past layout references when you want proof beyond a brochure.",
    image: "/projects/kanakasree-enclave/updates/update-1.jpg",
    imageAlt: "JS Garden Developers team at a Kanakasree Enclave site handover",
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
    location: "Madanahatti, Malur · Near Malur Whitefield Road",
    shortLocation: "Near Malur Whitefield Road",
    status: "For Sale",
    badges: ["MPA Approved"],
    description:
      "MPA-approved premium villa plots at Madanahatti, Malur — near Malur Whitefield Road, built for families who want a gated layout with clear utilities and long-term Whitefield–Malur corridor connectivity.",
    priceLabel: "Rs. 1600 / sq.ft",
    heroImage: "/projects/dhanapriya-paradise/hero.jpg",
    storyHeadline: "Whitefield linked. Malur living.",
    storySubhead: "MPA approved. Premium villa plots.",
    storyBody: [
      "Dhanapriya Paradise offers premium villa plots at Madanahatti, Malur — near Malur Whitefield Road, on the eastern growth belt where IT connectivity and residential demand meet.",
      "MPA-approved layout with gated community living, 24×7 utilities, parks and vastu-compliant plots — walk the land and plan your independent villa with paperwork you can verify.",
    ],
    communityHeadline: "Designed for life",
    communitySubhead: "Built for community",
    communityBody:
      "Gated entry, landscaped park, children’s play area, car parking and rain water harvesting — with 24×7 electricity, water and security so everyday living stays simple.",
    locationHighlights: [
      { place: "Malur Whitefield Road", time: "Nearby" },
      { place: "Madanahatti, Malur", time: "On location" },
      { place: "Whitefield IT corridor", time: "Eastern belt" },
      { place: "Malur town amenities", time: "Short drive" },
    ],
    amenitiesOutdoor: [
      "Park",
      "Children's play area",
      "Car parking",
      "Rain water harvesting",
      "Gated community",
    ],
    amenitiesIndoor: [
      "24×7 electricity",
      "24×7 water supply",
      "24×7 security",
      "Individual water connection",
      "Vastu compliant",
    ],
    layoutPlans: [
      {
        title: "Project brochure",
        src: "/projects/dhanapriya-paradise/brochure.jpg",
      },
    ],
    siteUpdates: [
      {
        src: "/projects/dhanapriya-paradise/updates/update-1.jpg",
        alt: "Dhanapriya Paradise launch — team with project brochures and layout plans",
      },
    ],
    overview: [
      { label: "Project Name", value: "Dhanapriya Paradise" },
      { label: "Type", value: "Premium Villa Plots" },
      { label: "Location", value: "Near Malur Whitefield Road · Madanahatti, Malur" },
      { label: "Approvals", value: "MPA Approved" },
      { label: "Status", value: "For Sale" },
      { label: "Price", value: "Rs. 1600 / sq.ft" },
    ],
    highlights: [
      "Near Malur Whitefield Road",
      "Premium villa plots at Madanahatti, Malur",
      "MPA-approved layout",
      "Gated community with 24×7 utilities",
      "Ideal for independent villa construction",
      "Site visits arranged on request",
    ],
    amenities: [
      "24×7 Electricity",
      "24×7 Security",
      "24×7 Water Supply",
      "Car Parking",
      "Children's Play Area",
      "Electricity",
      "Gated Community",
      "Individual Water Connection",
      "Park",
      "Rain Water Harvesting",
      "Vastu Compliant",
    ],
    gallery: [
      {
        src: "/projects/dhanapriya-paradise/hero.jpg",
        alt: "Dhanapriya Paradise — premium villa plots brochure, Madanahatti Malur",
      },
      {
        src: "/projects/dhanapriya-paradise/updates/update-1.jpg",
        alt: "Dhanapriya Paradise project launch with layout brochures",
      },
    ],
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Madanahatti%20Malur%20Whitefield%20Road%20Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Madanahatti+Malur+Whitefield+Road+Karnataka",
  },
  {
    id: "kanakasree-enclave",
    name: "Kanakasree Enclave",
    tagline: "Premium villa plots",
    location:
      "Sy. No. 39/1, 39/2, 40/1, 40/2, Lingapura, Malur",
    shortLocation: "Lingapura · Malur",
    status: "For Sale",
    badges: ["MPA Approved", "RERA Registered"],
    banker: "LIC HFL",
    reraNo: "RERA Registered",
    description:
      "MPA-approved & RERA-registered premium villa plots across 11 acres (1st & 2nd phase) at Lingapura, Malur — 30×40, 30×50, 30×60 and odd sites, about 2 km from the Bengaluru–Chennai Express Corridor.",
    priceLabel: "On request",
    heroImage: "/projects/kanakasree-enclave/hero.jpg",
    storyHeadline: "Lingapura living. Express corridor close.",
    storySubhead: "MPA approved. RERA registered.",
    storyBody: [
      "Kanakasree Enclave spans 11 acres across the 1st and 2nd phase at Lingapura, Malur — on the Hoskote–Malur belt with clear links to Malur town, industrial areas and the Bengaluru–Chennai 300 ft express corridor (~2 km).",
      "Plot options include 30×40, 30×50, 30×60 and odd sites. MPA-approved, RERA-registered, with LIC HFL banker support — walk the land and review paperwork with our team before you decide.",
    ],
    communityHeadline: "Designed for life",
    communitySubhead: "Built for community",
    communityBody:
      "Gated community living with black-top roads, landscaped parks, jogging track, overhead tank, individual water connections, electricity, and drainage & sewage — amenities planned for everyday family use.",
    locationHighlights: [
      { place: "Bengaluru–Chennai Express Corridor (300 ft)", time: "2 km" },
      { place: "Malur Railway Station", time: "5 min" },
      { place: "Malur Bus Stand", time: "5 min" },
      { place: "ITC Factory", time: "5 min" },
      { place: "Malur Industrial Area", time: "5 min" },
      { place: "Narsapura Industrial Area", time: "15 min" },
      { place: "MVJ Medical College", time: "15 min" },
      { place: "Hoskote", time: "15 min" },
      { place: "Orion Uptown Mall", time: "20 min" },
      { place: "K.R. Puram", time: "35 min" },
      { place: "Kempegowda International Airport", time: "40 min" },
    ],
    amenitiesOutdoor: [
      "Gated community",
      "Landscaped park",
      "Jogging / walking track",
      "Black-top roads",
      "Drainage and sewage system",
    ],
    amenitiesIndoor: [
      "Electricity",
      "Individual water connection",
      "Overhead water tank",
      "Water supply",
    ],
    layoutPlans: [
      {
        title: "Layout master plan",
        src: "/projects/kanakasree-enclave/plans/layout-master-plan.jpg",
      },
    ],
    siteUpdates: [
      {
        src: "/projects/kanakasree-enclave/updates/update-1.jpg",
        alt: "Plot handover at Kanakasree Enclave — 30×40 site marker on ground",
      },
    ],
    overview: [
      { label: "Project Name", value: "Kanakasree Enclave" },
      { label: "Type", value: "Premium Villa Plots · MPA & RERA" },
      { label: "Size", value: "1st & 2nd Phase — 11 Acres" },
      {
        label: "Plot sizes",
        value: "30×40, 30×50, 30×60 & Odd Sites",
      },
      { label: "Location", value: "Lingapura, Malur" },
      { label: "Approvals", value: "MPA Approved · RERA Registered" },
      { label: "Banker", value: "LIC HFL" },
    ],
    highlights: [
      "Ongoing Bengaluru–Chennai Express Corridor road — 2 km from layout",
      "5 min drive from Malur Railway Station",
      "5 min drive from Malur Bus Stand",
      "5 min drive from ITC Factory",
      "5 min drive from Malur Industrial Area",
      "15 min drive from Narsapura Industrial Area (Honda, Volvo, Scania, Apex Auto, etc.)",
      "15 min drive from MVJ Medical College",
      "15 min drive from Hoskote",
      "20 min drive from Orion Uptown Mall",
      "35 min drive from K.R. Puram",
      "40 min drive from Kempegowda International Airport",
    ],
    amenities: [
      "Electricity",
      "Gated Community",
      "Individual Water Connection",
      "Jogging or Walking Track",
      "Overhead Water Tank",
      "Water Supply",
      "Landscaped Park",
      "Black Top Road",
      "Drainage and Sewage System",
    ],
    gallery: [
      {
        src: "/projects/kanakasree-enclave/hero.jpg",
        alt: "On-site plot visit at Kanakasree Enclave, Lingapura Malur",
      },
      {
        src: "/projects/kanakasree-enclave/brochure.jpg",
        alt: "Kanakasree Enclave brochure — MPA approved, RERA registered",
      },
      {
        src: "/projects/kanakasree-enclave/plans/layout-master-plan.jpg",
        alt: "Kanakasree Enclave layout master plan — Lingapura Malur",
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
    tagline: "MPA-approved plots near Malur",
    location:
      "Doddakadathur, Malur — near N.H.4 Bengaluru to Kolar Highway",
    shortLocation: "Doddakadathur · Malur",
    status: "Available",
    badges: ["DC Conversion", "MPA Approved"],
    banker: "LIC HFL",
    description:
      "DC-converted & MPA-approved residential layout near Doddakadathur, Malur — 30×40 and odd sites with concrete roads, electricity, individual water connection and a landscaped park, within 1 km of the Bengaluru–Chennai Express Corridor.",
    priceLabel: "On request",
    heroImage: "/projects/royal-meadows/hero.jpg",
    storyHeadline: "Malur growth. Express corridor linked.",
    storySubhead: "DC conversion. MPA approved.",
    storyBody: [
      "Royal Meadows is a DC-converted & MPA-approved plotted development near Doddakadathur, Malur — close to the N.H.4 Bengaluru–Kolar Highway and within 1 km of the ongoing Bengaluru–Chennai Express Corridor (300 ft road).",
      "30×40 and odd sites are available. Walk the layout, review documentation with our team, and choose a plot with clear approach to Malur, Hoskote and the industrial belt.",
    ],
    communityHeadline: "Designed for life",
    communitySubhead: "Built for families",
    communityBody:
      "30 ft wide internal concrete roads, electricity, individual water line connections, drainage & sewage, and a landscaped central park — planned for everyday residential living.",
    locationHighlights: [
      { place: "Bengaluru–Chennai Express Corridor (300 ft)", time: "Within 1 km" },
      { place: "Malur Railway Station", time: "5 min" },
      { place: "Malur Bus Stand", time: "5 min" },
      { place: "Malur Industrial Area", time: "5 min" },
      { place: "Narsapura Industrial Area", time: "10 min" },
      { place: "ITC Factory", time: "10 min" },
      { place: "Hoskote", time: "15 min" },
      { place: "Orion Uptown Mall", time: "20 min" },
      { place: "MVJ Medical College", time: "20 min" },
      { place: "K.R. Puram", time: "35 min" },
      { place: "Kempegowda International Airport", time: "40 min" },
    ],
    amenitiesOutdoor: [
      "Landscaped park",
      "30 ft concrete internal roads",
      "Drainage & sewage system",
    ],
    amenitiesIndoor: [
      "Electricity",
      "Individual water line connection",
    ],
    layoutPlans: [
      {
        title: "Layout master plan",
        src: "/projects/royal-meadows/plans/layout-master-plan.png",
      },
    ],
    overview: [
      { label: "Project Name", value: "Royal Meadows" },
      { label: "Type", value: "DC Conversion & MPA Approved Layout" },
      {
        label: "Plot sizes",
        value: "30×40 & Odd sites",
      },
      {
        label: "Location",
        value: "Doddakadathur, Malur (near N.H.4 Bengaluru–Kolar)",
      },
      {
        label: "Approvals",
        value: "DC Conversion · MPA Approved",
      },
      { label: "Bankers", value: "LIC HFL" },
    ],
    highlights: [
      "Layout within 1 km of Bengaluru–Chennai Express Corridor (300 ft road)",
      "5 min drive from Malur Railway Station",
      "40 min drive from Kempegowda International Airport",
      "5 min drive from Malur Industrial Area",
      "10 min drive from Narsapura Industrial Area (Honda, Volvo, Scania, Apex Auto, etc.)",
      "15 min drive from Hoskote",
      "35 min drive from K.R. Puram",
      "10 min drive from ITC Factory",
      "20 min drive from MVJ Medical College",
      "5 min drive from Malur Bus Stand",
      "20 min drive from Orion Uptown Mall",
    ],
    amenities: [
      "Electricity",
      "Individual Water Connection",
      "Park",
      "Concrete Roads",
      "Drainage & Sewage System",
    ],
    gallery: [
      {
        src: "/projects/royal-meadows/hero.jpg",
        alt: "Royal Meadows villa elevation render — Doddakadathur, Malur",
      },
      {
        src: "/projects/royal-meadows/plans/layout-master-plan.png",
        alt: "Royal Meadows layout master plan with 30×40 and odd sites",
      },
    ],
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Doddakadathur%20Malur%20Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Doddakadathur+Malur+Karnataka",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.id === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.id);
}
