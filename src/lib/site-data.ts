import buildout1 from "@/assets/buildout_desktop1.webp";
import buildout2 from "@/assets/buildout_desktop2.webp";
import buildout3 from "@/assets/buildout_desktop3.webp";
import buildoutM from "@/assets/buildout_mobile.webp";
import vertex1 from "@/assets/vertex_desktop1.webp";
import vertex2 from "@/assets/vertex_desktop2.webp";
import vertex3 from "@/assets/vertex_desktop3.webp";
import vertexM from "@/assets/vertex_mobile.webp";
import ortrends1 from "@/assets/ortrends_desktop1.webp";
import ortrends2 from "@/assets/ortrends_desktop2.webp";
import ortrends3 from "@/assets/ortrends_desktop3.webp";
import ortrendsM from "@/assets/ortrends_mobile.webp";
import qoffah1 from "@/assets/qoffah_desktop1.webp";
import qoffah2 from "@/assets/qoffah_desktop2.webp";
import qoffah3 from "@/assets/qoffah_desktop3.webp";
import qoffahM from "@/assets/qoffah_mobile.webp";

export const contact = {
  name: "Michael Daramola",
  role: "Shopify Expert & E-commerce Developer",
  tagline: "Design · Create · Deliver",
  emails: ["mdaramola477@gmail.com", "mdaramola502@gmail.com"],
  whatsappDisplay: "+234 813 753 4471",
  whatsappUrl: "https://wa.me/2348137534471",
  instagramHandle: "@michael_tech11",
  instagramUrl: "https://instagram.com/michael_tech11/",
  fiverrUrl: "https://www.fiverr.com/michael_daram",
};

export type Project = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  summary: string;
  description: string;
  highlights: string[];
  desktop: string[];
  mobile: string;
};

export const projects: Project[] = [
  {
    slug: "the-buildout-shop",
    name: "The Build-Out Shop",
    url: "https://thebuildoutshop.com/",
    domain: "thebuildoutshop.com",
    category: "Automotive & Overland Parts",
    summary: "A large-catalog parts store for van and truck build-outs, organised by vehicle.",
    description:
      "The Build-Out Shop sells upgrade parts and field gear for Sprinter, Transit and Promaster vans and trucks. A catalog this size needs shoppers to find the right part fast, so the store leans on vehicle-first navigation, a filterable search bar and clear product cards with quick view.",
    highlights: [
      "Shop-by-vehicle menu for Sprinter, Transit, Promaster and universal parts",
      "Search bar with product-type filter across a deep catalog",
      "Bold adventure-style hero with a clear call to action",
      "Trust row and best-seller collections on the homepage",
    ],
    desktop: [buildout1, buildout2, buildout3],
    mobile: buildoutM,
  },
  {
    slug: "vertex-apparel",
    name: "Vertex Apparel",
    url: "https://vertexapparelshop.com/",
    domain: "vertexapparelshop.com",
    category: "Football Fan Apparel",
    summary: "Premium custom tees and caps built around football pride, culture and identity.",
    description:
      "Vertex Apparel creates graphic tees and caps for football fans. The store pairs an elegant serif headline with lifestyle imagery, tells the brand story up front and guides visitors into clean collection cards for tees and accessories.",
    highlights: [
      "Lifestyle hero with an editorial serif headline",
      "Brand story section that sells the feeling, not just the product",
      "Collection cards for Graphic Tees and Caps & Accessories",
      "Simple, focused navigation: Home, T-Shirts, Caps, Contact",
    ],
    desktop: [vertex1, vertex2, vertex3],
    mobile: vertexM,
  },
  {
    slug: "ortrends",
    name: "Ortrends",
    url: "https://www.ortrends.com/",
    domain: "ortrends.com",
    category: "Print-on-Demand Apparel",
    summary: "Made-to-order printed tees and hoodies with seasonal collections and shop-by-style browsing.",
    description:
      "Ortrends sells original printed T-shirts and hoodies, made to order. The store uses a rotating promo bar, seasonal collections and a visual shop-by-style row so shoppers can browse hoodies, sweatshirts, gifts and niche designs in a couple of taps.",
    highlights: [
      "Split hero with a clear offer and single call to action",
      "Trust bar: free U.S. shipping, printed for you, secure checkout",
      "Visual shop-by-style navigation",
      "Product grid with colour swatches and quick add",
    ],
    desktop: [ortrends1, ortrends2, ortrends3],
    mobile: ortrendsM,
  },
  {
    slug: "qoffah",
    name: "Qoffah",
    url: "https://www.qoffah.com/",
    domain: "qoffah.com",
    category: "Luxury Fashion & Accessories",
    summary: "A luxury handbag house inspired by Moroccan heritage, with an editorial, press-led feel.",
    description:
      "Qoffah creates luxury handbags and scarves inspired by Moroccan heritage. The storefront keeps a quiet, high-end tone: bold editorial imagery, a press feature, best-seller rows and a brand story that explains the meaning behind the name.",
    highlights: [
      "Editorial luxury layout with generous white space",
      "\u201cAs seen on\u201d press feature to build trust",
      "Best-seller and collection rows with ratings",
      "Brand story section rooted in heritage",
    ],
    desktop: [qoffah1, qoffah2, qoffah3],
    mobile: qoffahM,
  },
];

export type Service = { title: string; body: string; icon: string };

export const services: Service[] = [
  { icon: "Palette", title: "Shopify Store Design", body: "Beautiful, professional and user-friendly Shopify stores that reflect your brand from the first click." },
  { icon: "RefreshCcw", title: "Shopify Store Redesign", body: "Modern layouts, better navigation and an improved shopping experience for your existing store." },
  { icon: "Code2", title: "Shopify Store Development", body: "Responsive, functional and customised Shopify websites built to work on every device." },
  { icon: "Shirt", title: "Print-on-Demand Setup", body: "Complete POD businesses set up with Printify, Printful and Gelato — products, mockups and fulfilment." },
  { icon: "Link2", title: "Etsy & Shopify Integration", body: "Etsy and Shopify connected for efficient product and order management in one flow." },
  { icon: "Search", title: "Shopify SEO", body: "Product pages, collections and metadata improved for stronger search engine visibility." },
  { icon: "FileText", title: "Product Listing Optimization", body: "Professional product descriptions, images and listings that present your products at their best." },
  { icon: "TrendingUp", title: "Conversion Rate Optimization", body: "Store structure, product presentation, navigation and trust signals refined to encourage more purchases." },
  { icon: "LayoutDashboard", title: "E-commerce Store Management", body: "Hands-on help managing products, collections, integrations and day-to-day store operations." },
  { icon: "Download", title: "Digital Product Store Setup", body: "Stores built for selling downloadable products and digital resources, with smooth delivery." },
];

export type Package = { name: string; forWho: string; includes: string[]; featured?: boolean };

export const packages: Package[] = [
  {
    name: "New Store Build",
    forWho: "For brands launching on Shopify",
    includes: ["Shopify Store Design", "Shopify Store Development", "Product Listing Optimization", "Shopify SEO setup"],
  },
  {
    name: "Redesign & Growth",
    forWho: "For stores that need to sell better",
    includes: ["Shopify Store Redesign", "Conversion Rate Optimization", "Shopify SEO", "Product Listing Optimization"],
    featured: true,
  },
  {
    name: "POD & Digital Launch",
    forWho: "For print-on-demand and digital sellers",
    includes: ["Print-on-Demand Setup", "Etsy & Shopify Integration", "Digital Product Store Setup", "Product Listing Optimization"],
  },
  {
    name: "Ongoing Store Care",
    forWho: "For owners who want a hands-on partner",
    includes: ["E-commerce Store Management", "Collection & product updates", "Integration support", "Continuous optimization"],
  },
];

export const skillGroups: { title: string; icon: string; skills: string[] }[] = [
  { title: "Shopify", icon: "ShoppingBag", skills: ["Shopify", "Shopify Theme Customization", "Shopify Store Development", "Shopify SEO"] },
  { title: "Front-end", icon: "Code2", skills: ["HTML", "CSS", "JavaScript", "Responsive Web Design"] },
  { title: "E-commerce Growth", icon: "TrendingUp", skills: ["E-commerce Design", "Conversion Optimization", "Product Listing Optimization"] },
  { title: "Print-on-Demand & Marketplaces", icon: "Package", skills: ["Printify", "Printful", "Gelato", "Etsy Integration"] },
];

export const process = [
  { n: "01", title: "Discovery", body: "Understanding your business, goals and requirements." },
  { n: "02", title: "Planning", body: "Developing a strategy and outlining the project structure." },
  { n: "03", title: "Design", body: "Creating a professional, user-friendly store experience." },
  { n: "04", title: "Development", body: "Building and customising your Shopify store." },
  { n: "05", title: "Optimization", body: "Improving responsiveness, navigation, SEO and conversion elements." },
  { n: "06", title: "Delivery", body: "Testing the finished project and handing it over to you." },
];

export const reasons = [
  { icon: "Users", title: "Client-focused approach", body: "Your goals shape every decision, from layout to launch." },
  { icon: "MessageCircle", title: "Professional communication", body: "Clear updates and quick replies, so you always know where your project stands." },
  { icon: "Smartphone", title: "Modern, responsive designs", body: "Stores that look sharp and work smoothly on phones, tablets and desktops." },
  { icon: "ScanEye", title: "Attention to detail", body: "Spacing, typography, product pages — the small things that make a store feel premium." },
  { icon: "Puzzle", title: "Customised solutions", body: "No cookie-cutter templates. Each store is shaped around your products and customers." },
  { icon: "ShoppingCart", title: "E-commerce-focused thinking", body: "Every section is built with one question in mind: does it help you sell?" },
  { icon: "BadgeCheck", title: "Commitment to quality", body: "Careful testing before handover, so your store is ready for real customers." },
];

export const projectTypes = [
  "New Shopify store",
  "Store redesign",
  "Shopify development",
  "Print-on-demand setup",
  "Etsy & Shopify integration",
  "Shopify SEO",
  "Product listing optimization",
  "Conversion rate optimization",
  "Store management",
  "Digital product store",
  "Something else",
];
