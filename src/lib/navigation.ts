export type MegaMenuLink = {
  label: string;
  href: string;
};

export type MegaMenuPanel = {
  id: string;
  label: string;
  description: string;
  learnMoreHref: string;
  /** Three columns of links */
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

/** Desktop mega-menu navigation for JS Garden Developers. */
export const mainNavigation: NavItem[] = [
  {
    id: "projects",
    label: "Projects",
    megaMenu: {
      sidebarLabel: "Projects",
      panels: [
        {
          id: "featured",
          label: "Featured",
          description:
            "Live and upcoming villa-plot layouts with clear approvals — walk the land, review paperwork, and speak with our Bengaluru team.",
          learnMoreHref: "/projects#listings",
          columns: [
            [
              {
                label: "Jeevan Sagar Lakeview Garden",
                href: "/projects/js-lakeview-garden",
              },
              {
                label: "Dhanapriya Paradise",
                href: "/projects/dhanapriya-paradise",
              },
              {
                label: "Kanakasree Enclave",
                href: "/projects/kanakasree-enclave",
              },
              { label: "Royal Meadows", href: "/projects/royal-meadows" },
            ],
            [
              { label: "All listings", href: "/projects#listings" },
              {
                label: "Villa plots",
                href: "/projects/category/villa-plots",
              },
              { label: "Ongoing projects", href: "/projects/category/ongoing" },
            ],
            [
              { label: "Book a site visit", href: "/contact" },
              { label: "Download brochure", href: "/projects/js-lakeview-garden" },
              { label: "WhatsApp enquiry", href: "/contact" },
            ],
          ],
        },
        {
          id: "villa-plots",
          label: "Villa Plots",
          description:
            "Premium residential plots with clear dimensions, approach roads, and locations chosen for long-term growth.",
          learnMoreHref: "/projects/category/villa-plots",
          columns: [
            [
              {
                label: "Lakeview Garden — Mittemari",
                href: "/projects/js-lakeview-garden",
              },
              {
                label: "Dhanapriya — Madanahatti",
                href: "/projects/dhanapriya-paradise",
              },
              {
                label: "Kanakasree — Lingapura",
                href: "/projects/kanakasree-enclave",
              },
            ],
            [
              { label: "Plot sizes & layouts", href: "/projects#listings" },
              { label: "DTCP / MPA approvals", href: "/projects#listings" },
              { label: "Amenities overview", href: "/projects/js-lakeview-garden" },
            ],
            [
              { label: "Site visit booking", href: "/contact" },
              { label: "Price on request", href: "/contact" },
              { label: "Investment tips", href: "/insights/investment-tips" },
            ],
          ],
        },
        {
          id: "ongoing",
          label: "Ongoing",
          description:
            "Active layouts where roads, lighting and amenities are progressing — visit on the ground and track delivery.",
          learnMoreHref: "/projects/category/ongoing",
          columns: [
            [
              {
                label: "Lakeview Garden updates",
                href: "/projects/js-lakeview-garden",
              },
              { label: "All ongoing", href: "/projects/category/ongoing" },
              { label: "On-site progress photos", href: "/projects/js-lakeview-garden" },
            ],
            [
              { label: "Payment plans", href: "/contact" },
              { label: "Bankers & finance", href: "/contact" },
              { label: "Early enquiries", href: "/contact" },
            ],
            [
              { label: "Schedule a visit", href: "/contact" },
              { label: "Call our office", href: "/contact" },
              { label: "About the developer", href: "/about" },
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
            "From first enquiry through site visits, plot selection and registration — with a team you can reach by phone or WhatsApp.",
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
              { label: "Callback request", href: "/contact" },
              { label: "Enquire online", href: "/contact#enquire" },
            ],
          ],
        },
        {
          id: "documentation",
          label: "Documentation",
          description:
            "Approvals, titles and compliance explained in plain language before you commit.",
          learnMoreHref: "/services/documentation",
          columns: [
            [
              { label: "Approval certificates", href: "/services/documentation" },
              { label: "Title verification", href: "/services/documentation" },
              { label: "DTCP / MPA guidance", href: "/services/documentation" },
            ],
            [
              { label: "Layout plans", href: "/projects" },
              { label: "Legal coordination", href: "/contact" },
              { label: "Buyer checklist", href: "/insights/buying-guide" },
            ],
            [
              { label: "ISO 9001 processes", href: "/about" },
              { label: "Privacy policy", href: "/privacy" },
              { label: "FAQs", href: "/about" },
            ],
          ],
        },
        {
          id: "after-sales",
          label: "After Sales",
          description:
            "Support after booking — possession coordination, community updates and resale guidance.",
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
              { label: "Support desk", href: "/contact" },
            ],
            [
              { label: "Visit our office", href: "/contact" },
              { label: "WhatsApp support", href: "/contact" },
              { label: "Share feedback", href: "/contact" },
            ],
          ],
        },
      ],
    },
  },
  {
    id: "locations",
    label: "Locations",
    megaMenu: {
      sidebarLabel: "Locations",
      panels: [
        {
          id: "bagepalli",
          label: "Bagepalli",
          description:
            "NH-44 Bengaluru–Hyderabad corridor near Mittemari — home to Jeevan Sagar Lakeview Garden with DTCP-approved villa plots.",
          learnMoreHref: "/projects/js-lakeview-garden",
          columns: [
            [
              {
                label: "Lakeview Garden",
                href: "/projects/js-lakeview-garden",
              },
              { label: "Location map", href: "/projects/js-lakeview-garden#map" },
              { label: "Site updates", href: "/projects/js-lakeview-garden" },
            ],
            [
              { label: "NH-44 access", href: "/projects/js-lakeview-garden" },
              { label: "Airport distance", href: "/projects/js-lakeview-garden" },
              { label: "Chikkaballapura belt", href: "/projects/js-lakeview-garden" },
            ],
            [
              { label: "Book a visit", href: "/contact" },
              { label: "Request price", href: "/contact" },
              { label: "Office in K.R. Puram", href: "/contact" },
            ],
          ],
        },
        {
          id: "malur",
          label: "Malur",
          description:
            "Eastern growth corridor with Whitefield links — Dhanapriya Paradise and Kanakasree Enclave nearby.",
          learnMoreHref: "/locations/malur",
          columns: [
            [
              {
                label: "Dhanapriya Paradise",
                href: "/projects/dhanapriya-paradise",
              },
              {
                label: "Kanakasree Enclave",
                href: "/projects/kanakasree-enclave",
              },
              { label: "Malur area guide", href: "/locations/malur" },
            ],
            [
              { label: "Whitefield corridor", href: "/locations/whitefield" },
              { label: "Hoskote belt", href: "/locations/hoskote" },
              { label: "All growth corridors", href: "/projects/category/growth-corridors" },
            ],
            [
              { label: "Site visits", href: "/contact" },
              { label: "Area comparison", href: "/locations" },
              { label: "Enquire now", href: "/contact" },
            ],
          ],
        },
        {
          id: "hoskote-whitefield",
          label: "Hoskote & Whitefield",
          description:
            "Airport-linked and IT-corridor neighbourhoods for buyers planning connectivity and long-term value.",
          learnMoreHref: "/locations",
          columns: [
            [
              { label: "Hoskote overview", href: "/locations/hoskote" },
              { label: "Whitefield overview", href: "/locations/whitefield" },
              { label: "Royal Meadows", href: "/projects/royal-meadows" },
            ],
            [
              { label: "Airport access", href: "/locations/hoskote" },
              { label: "IT corridor living", href: "/locations/whitefield" },
              { label: "All locations", href: "/locations" },
            ],
            [
              { label: "Talk to sales", href: "/contact" },
              { label: "Market insights", href: "/insights" },
              { label: "Book a callback", href: "/contact#enquire" },
            ],
          ],
        },
      ],
    },
  },
  {
    id: "about",
    label: "About",
    href: "/about",
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
