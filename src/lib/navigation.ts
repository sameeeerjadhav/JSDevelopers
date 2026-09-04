export type MegaMenuLink = {
  label: string;
  href: string;
};

export type MegaMenuPanel = {
  id: string;
  label: string;
  description: string;
  learnMoreHref: string;
  /** Three columns of links, PCL-style */
  columns: MegaMenuLink[][];
};

export type MegaMenuConfig = {
  sidebarLabel: string;
  panels: MegaMenuPanel[];
};

export type NavItem =
  | {
      id: string;
      label: string;
      href: string;
      megaMenu?: never;
    }
  | {
      id: string;
      label: string;
      href?: never;
      megaMenu: MegaMenuConfig;
    };

/** Desktop mega-menu navigation — placeholder copy until final content is ready. */
export const mainNavigation: NavItem[] = [
  {
    id: "projects",
    label: "Projects",
    megaMenu: {
      sidebarLabel: "Projects",
      panels: [
        {
          id: "villa-plots",
          label: "Villa Plots",
          description:
            "Premium residential plots with clear dimensions, approach roads, and locations chosen for long-term growth along Bengaluru’s eastern corridor.",
          learnMoreHref: "/projects/category/villa-plots",
          columns: [
            [
              { label: "Jeevan Sagar Lakeview Garden", href: "/projects/js-lakeview-garden" },
              { label: "Dhanapriya Paradise", href: "/projects/dhanapriya-paradise" },
              { label: "Kanakasree Enclave", href: "/projects/kanakasree-enclave" },
              { label: "Plot sizing guide", href: "/projects/category/villa-plots" },
            ],
            [
              { label: "East Bengaluru layouts", href: "/projects/category/growth-corridors" },
              { label: "MPA-approved projects", href: "/projects#listings" },
              { label: "RERA-registered listings", href: "/projects#listings" },
            ],
            [
              { label: "Site visit booking", href: "/contact" },
              { label: "Investment overview", href: "/insights/investment-tips" },
              { label: "Download brochure", href: "/contact" },
            ],
          ],
        },
        {
          id: "ongoing",
          label: "Ongoing",
          description:
            "Active layouts where earthwork, roads and amenities are progressing — with regular updates for buyers who want to track development on the ground.",
          learnMoreHref: "/projects/category/ongoing",
          columns: [
            [
              { label: "Jeevan Sagar Lakeview Garden", href: "/projects/js-lakeview-garden" },
              { label: "Current launches", href: "/projects/category/ongoing" },
              { label: "Construction updates", href: "/projects/js-lakeview-garden" },
              { label: "Amenity progress", href: "/projects/category/ongoing" },
            ],
            [
              { label: "Early-bird pricing", href: "/contact" },
              { label: "Payment plans", href: "/contact" },
              { label: "Bank tie-ups", href: "/contact" },
            ],
            [
              { label: "Schedule a visit", href: "/contact" },
              { label: "WhatsApp updates", href: "/contact" },
              { label: "Project FAQs", href: "/about" },
            ],
          ],
        },
        {
          id: "growth-corridors",
          label: "Growth Corridors",
          description:
            "Land portfolios positioned along infrastructure-led growth routes — where connectivity, employment hubs and planned expansion meet verified paperwork.",
          learnMoreHref: "/projects/category/growth-corridors",
          columns: [
            [
              { label: "Whitefield corridor", href: "/locations/whitefield" },
              { label: "Malur expansion", href: "/locations/malur" },
              { label: "Hoskote belt", href: "/locations/hoskote" },
            ],
            [
              { label: "Connectivity map", href: "/projects/category/growth-corridors" },
              { label: "Future infrastructure", href: "/insights/area-spotlight-malur" },
              { label: "Area comparisons", href: "/locations" },
            ],
            [
              { label: "Investment advisory", href: "/contact" },
              { label: "Resale guidance", href: "/services/after-sales" },
              { label: "Market insights", href: "/insights" },
            ],
          ],
        },
      ],
    },
  },
  {
    id: "services",
    label: "Services",
    megaMenu: {
      sidebarLabel: "Services",
      panels: [
        {
          id: "buying",
          label: "Buying",
          description:
            "End-to-end support from first enquiry through site visits, plot selection and registration — with a Bengaluru team you can reach by phone or WhatsApp.",
          learnMoreHref: "/services/buying",
          columns: [
            [
              { label: "Site visit coordination", href: "/services/buying" },
              { label: "Plot comparison", href: "/projects" },
              { label: "Price & payment terms", href: "/contact" },
            ],
            [
              { label: "Documentation review", href: "/services/documentation" },
              { label: "Loan assistance", href: "/insights/loan-basics" },
              { label: "Registration support", href: "/services/documentation" },
            ],
            [
              { label: "NRI enquiries", href: "/contact" },
              { label: "Family plot planning", href: "/services/buying" },
              { label: "Callback request", href: "/contact" },
            ],
          ],
        },
        {
          id: "documentation",
          label: "Documentation",
          description:
            "Clear paperwork trails for every layout — approvals, titles and compliance details explained in plain language before you commit.",
          learnMoreHref: "/services/documentation",
          columns: [
            [
              { label: "Approval certificates", href: "/services/documentation" },
              { label: "Title verification", href: "/services/documentation" },
              { label: "RERA compliance", href: "/services/documentation" },
            ],
            [
              { label: "Layout plans", href: "/projects" },
              { label: "Encumbrance checks", href: "/contact" },
              { label: "Legal coordination", href: "/contact" },
            ],
            [
              { label: "ISO 9001 processes", href: "/about" },
              { label: "Buyer checklist", href: "/insights/buying-guide" },
              { label: "FAQs", href: "/about" },
            ],
          ],
        },
        {
          id: "after-sales",
          label: "After Sales",
          description:
            "Support that continues after booking — from possession coordination to resale guidance and referrals within our buyer community.",
          learnMoreHref: "/services/after-sales",
          columns: [
            [
              { label: "Possession handover", href: "/services/after-sales" },
              { label: "Maintenance guidance", href: "/services/after-sales" },
              { label: "Community updates", href: "/services/after-sales" },
            ],
            [
              { label: "Resale assistance", href: "/services/after-sales" },
              { label: "Referral programme", href: "/services/after-sales" },
              { label: "Complaint resolution", href: "/contact" },
            ],
            [
              { label: "Contact support", href: "/contact" },
              { label: "Office visit", href: "/contact" },
              { label: "Feedback", href: "/contact" },
            ],
          ],
        },
      ],
    },
  },
  {
    id: "our-work",
    label: "Our Work",
    href: "/projects",
  },
  {
    id: "locations",
    label: "Locations",
    megaMenu: {
      sidebarLabel: "Locations",
      panels: [
        {
          id: "whitefield",
          label: "Whitefield",
          description:
            "Residential layouts near IT corridors and established neighbourhoods — with strong rental demand and mature social infrastructure.",
          learnMoreHref: "/locations/whitefield",
          columns: [
            [
              { label: "Nearby projects", href: "/projects/category/growth-corridors" },
              { label: "Connectivity", href: "/locations/whitefield" },
              { label: "Schools & hospitals", href: "/locations/whitefield" },
            ],
            [
              { label: "Plot availability", href: "/contact" },
              { label: "Price trends", href: "/insights/market-update-q2" },
              { label: "Site visits", href: "/contact" },
            ],
            [
              { label: "Area guide", href: "/locations/whitefield" },
              { label: "Investment outlook", href: "/insights/investment-tips" },
              { label: "Enquire now", href: "/contact" },
            ],
          ],
        },
        {
          id: "malur",
          label: "Malur",
          description:
            "Emerging growth pockets east of Bengaluru — attractive entry pricing with improving road links and industrial expansion nearby.",
          learnMoreHref: "/locations/malur",
          columns: [
            [
              { label: "Active layouts", href: "/projects/category/ongoing" },
              { label: "Distance to city", href: "/locations/malur" },
              { label: "Industrial belt", href: "/locations/malur" },
            ],
            [
              { label: "Plot sizes", href: "/projects/dhanapriya-paradise" },
              { label: "Amenities", href: "/projects/kanakasree-enclave" },
              { label: "Visit scheduling", href: "/contact" },
            ],
            [
              { label: "Buyer stories", href: "/about" },
              { label: "Brochure request", href: "/contact" },
              { label: "WhatsApp chat", href: "/contact" },
            ],
          ],
        },
        {
          id: "hoskote",
          label: "Hoskote",
          description:
            "Strategic corridors with airport proximity and planned infrastructure — suited for buyers planning medium to long-term appreciation.",
          learnMoreHref: "/locations/hoskote",
          columns: [
            [
              { label: "Project listings", href: "/projects/royal-meadows" },
              { label: "Airport access", href: "/locations/hoskote" },
              { label: "Upcoming roads", href: "/locations/hoskote" },
            ],
            [
              { label: "Layout approvals", href: "/services/documentation" },
              { label: "Payment options", href: "/contact" },
              { label: "Book a visit", href: "/contact" },
            ],
            [
              { label: "Compare areas", href: "/locations" },
              { label: "Investment FAQ", href: "/insights/investment-tips" },
              { label: "Talk to us", href: "/contact" },
            ],
          ],
        },
      ],
    },
  },
  {
    id: "who-we-are",
    label: "Who We Are",
    megaMenu: {
      sidebarLabel: "Who We Are",
      panels: [
        {
          id: "company",
          label: "Company",
          description:
            "For over a decade, J.S. Garden Developers has planned and delivered residential layouts across Bengaluru’s eastern growth corridors.",
          learnMoreHref: "/about",
          columns: [
            [
              { label: "About us", href: "/about" },
              { label: "Our story", href: "/about" },
              { label: "Leadership", href: "/about" },
            ],
            [
              { label: "ISO certification", href: "/about" },
              { label: "Values & principles", href: "/about" },
              { label: "Awards & recognition", href: "/about" },
            ],
            [
              { label: "Careers", href: "/contact" },
              { label: "Partners", href: "/contact" },
              { label: "Media kit", href: "/contact" },
            ],
          ],
        },
        {
          id: "commitments",
          label: "Commitments",
          description:
            "We focus on trust, clear paperwork and layouts you can inspect on the ground — before you decide.",
          learnMoreHref: "/about",
          columns: [
            [
              { label: "Quality standards", href: "/about" },
              { label: "Transparency", href: "/about" },
              { label: "Buyer protection", href: "/about" },
            ],
            [
              { label: "Environmental care", href: "/about" },
              { label: "Community impact", href: "/about" },
              { label: "Safety practices", href: "/about" },
            ],
            [
              { label: "Sustainability", href: "/about" },
              { label: "CSR initiatives", href: "/about" },
              { label: "Contact us", href: "/contact" },
            ],
          ],
        },
        {
          id: "insights",
          label: "Insights",
          description:
            "Guides, market notes and practical advice for first-time plot buyers and investors exploring Bengaluru’s land market.",
          learnMoreHref: "/insights",
          columns: [
            [
              { label: "Buying guide", href: "/insights/buying-guide" },
              { label: "Documentation 101", href: "/insights/documentation-101" },
              { label: "Loan basics", href: "/insights/loan-basics" },
            ],
            [
              { label: "Area spotlights", href: "/insights/area-spotlight-malur" },
              { label: "Market updates", href: "/insights/market-update-q2" },
              { label: "Investment tips", href: "/insights/investment-tips" },
            ],
            [
              { label: "News & updates", href: "/insights" },
              { label: "Newsletter", href: "/contact" },
              { label: "Subscribe", href: "/contact" },
            ],
          ],
        },
      ],
    },
  },
  {
    id: "insights",
    label: "Insights",
    href: "/insights",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];
