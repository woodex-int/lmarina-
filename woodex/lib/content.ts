export type Project = {
  slug: string;
  title: string;
  category: 'Offices' | 'Residential' | 'Retail' | 'Hospitality';
  location: string;
  year: string;
  area: string;
  image: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: 'meridian-capital-hq',
    title: 'Meridian Capital HQ',
    category: 'Offices',
    location: 'Gulberg, Lahore',
    year: '2025',
    area: '11,500 sq ft',
    image: '/images/gallery-boardroom.jpg',
    summary: 'A walnut-and-brass headquarters for a financial services firm, built around a 14-seat boardroom and a quiet client corridor.',
  },
  {
    slug: 'the-grove-hotel-lobby',
    title: 'The Grove — Lobby & Reception',
    category: 'Hospitality',
    location: 'DHA Phase 6, Lahore',
    year: '2025',
    area: '6,200 sq ft',
    image: '/images/gallery-lobby.jpg',
    summary: 'Double-height arrival hall with backlit onyx, oak slat ceiling and a sculptural pendant installation.',
  },
  {
    slug: 'northwind-tech-floor',
    title: 'Northwind Technology Floor',
    category: 'Offices',
    location: 'Jail Road, Lahore',
    year: '2024',
    area: '18,000 sq ft',
    image: '/images/service-office.jpg',
    summary: 'An IT workplace with acoustic slat ceilings, phone booths and a town-hall breakout for 120 engineers.',
  },
  {
    slug: 'house-of-noon',
    title: 'House of Noon',
    category: 'Residential',
    location: 'DHA Phase 7, Lahore',
    year: '2024',
    area: '1 Kanal',
    image: '/images/service-residential.jpg',
    summary: 'Warm-modern family home with teak paneling, travertine moments and concealed storage throughout.',
  },
  {
    slug: 'kindle-coworking',
    title: 'Kindle Coworking Campus',
    category: 'Offices',
    location: 'Orchard, Lahore',
    year: '2025',
    area: '9,400 sq ft',
    image: '/images/service-office.jpg',
    summary: 'Flexible membership workspace with timber pods, velvet lounges and a cafe-style collaboration core.',
  },
  {
    slug: 'maison-atelier-boutique',
    title: 'Maison Atelier Boutique',
    category: 'Retail',
    location: 'Mall Road, Lahore',
    year: '2024',
    area: '2,800 sq ft',
    image: '/images/service-retail.jpg',
    summary: 'A timber-and-brass fashion boutique planned around a single unbroken customer loop and a power wall.',
  },
  {
    slug: 'ember-cafe',
    title: 'Ember — Cafe & Roastery',
    category: 'Hospitality',
    location: 'Gulberg II, Lahore',
    year: '2025',
    area: '1,900 sq ft',
    image: '/images/service-retail.jpg',
    summary: 'Oak-slatted hospitality interior with communal tables, leather banquettes and globe-lit evenings.',
  },
  {
    slug: 'quiet-room-suite',
    title: 'The Quiet Room Suite',
    category: 'Residential',
    location: 'Bahria Town, Lahore',
    year: '2023',
    area: '10 Marla',
    image: '/images/service-residential.jpg',
    summary: 'A serene principal suite with a full-height walnut bed wall and cove-lit morning routine.',
  },
];

export const categories = ['All', 'Offices', 'Residential', 'Retail', 'Hospitality'] as const;

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: 'office-interior-trends-2026',
    title: 'Office interior trends shaping Pakistani workplaces in 2026',
    excerpt: 'From acoustic timber to hotel lobbies and focus-first planning — what Lahore’s best new offices will be doing differently.',
    category: 'Commercial',
    date: '2026-08-18',
    readTime: '6 min read',
    image: '/images/service-office.jpg',
    body: [
      {
        paragraphs: [
          'The office is no longer competing with the desk at home by offering more desks — it is competing by offering what home cannot: identity, ritual, and the gravity of a shared room. The best commercial fit-outs landing in Lahore during 2026 share six moves.',
        ],
      },
      {
        heading: '1. Acoustic timber becomes the default ceiling',
        paragraphs: [
          'Open plans failed not because people disliked openness, but because nobody could hear themselves think. Slatted timber ceilings over acoustic felt — already standard in our boardrooms and tech floors — are moving across entire offices. They look warm in photos and cut reverberation by roughly a third.',
        ],
      },
      {
        heading: '2. The reception is a hotel lobby',
        paragraphs: [
          'Visitors now wait inside a designed hospitality moment: coffee bar, lounge seating, branded scent and lighting. Companies measured against global standards treat the first 90 seconds as part of the sales pitch — because they are.',
        ],
      },
      {
        heading: '3. Desk ratios drop, room quality rises',
        paragraphs: [
          'Hybrid teams no longer need a desk per person. Floor plates trade 20–30% of bench space for bookable focus booths, phone pods, and small huddle rooms. Density feels lower even as occupancy gets smarter.',
        ],
        list: ['One focus booth per 18–25 desks', 'At least one 4-person huddle per team', 'Acoustic rating considered before aesthetics on every partition'],
      },
      {
        heading: '4. Warm materials outrank glass-and-white minimalism',
        paragraphs: [
          'Walnut, oak veneer, travertine and warm plaster are replacing sterile white boxes. Wood ages gracefully, photographs beautifully, and signals permanence — a quiet message to clients and recruits alike.',
        ],
      },
      {
        heading: '5. Lighting is layered, not evenly sprayed',
        paragraphs: [
          '2026 floors separate task, ambient and accent light and add scenes for morning, midday and evening. The same room feels awake at 10 a.m. and intimate at 6 p.m. for roughly the same fit-out budget.',
        ],
      },
      {
        heading: '6. The fit-out is documented before it starts',
        paragraphs: [
          'Walkthrough renders, MEP coordination drawings and fixed BOQs are no longer premium add-ons — they are how serious firms avoid 20% budget creep. If a contractor wants to “decide on site”, the room is already behind.',
          'If you are planning a 2026 move or refurbishment, the free first consultation at Woodex covers test-fit options, a rough budget band and a timeline — before any design fee is discussed.',
        ],
      },
    ],
  },
  {
    slug: 'solid-wood-vs-veneer',
    title: 'Solid wood vs veneer: how to choose furniture that actually lasts',
    excerpt: 'A joiner’s honest guide to sheesham, walnut, oak and veneer — where to spend, where to save, and the claims that should make you walk away.',
    category: 'Craft',
    date: '2026-07-02',
    readTime: '5 min read',
    image: '/images/service-furniture.jpg',
    body: [
      {
        paragraphs: ['“Solid wood” is the most abused phrase in Pakistani furniture showrooms. Here is how to buy with your eyes open.'],
      },
      {
        heading: 'Where solid timber is non-negotiable',
        paragraphs: ['Table tops that take impact, chair legs, bed frames, doors and any structural joinery should be solid hardwood — sheesham (rosewood), walnut, oak or properly seasoned teak. These pieces move with the seasons and can be re-polished for decades.'],
      },
      {
        heading: 'Where veneer is the smarter choice',
        paragraphs: ['Large flat panels — wardrobe doors, wall paneling, boardroom table leaves — are often better in book-matched veneer over seasoned hardwood ply. It is more stable (it will not warp across a 2.4m span), gives continuous cathedral grain, and costs 40–60% less. Calling veneer “fake wood” is a beginner’s mistake; it is how the world’s finest furniture is made.'],
        list: ['Ask the moisture content — under 10% for interior Punjab work', 'Inspect drawer internals: dovetails signal a workshop, staples signal a factory', 'A finish sample should be signed before production begins', 'Warranty should be written, with the timber species named on the invoice'],
      },
      {
        heading: 'What should make you walk away',
        paragraphs: ['Particle-board or MDF carcasses sold as “solid wood”, no named species (“it’s just sheesham, saab”), no finish sample, and any quote that refuses a BOQ. Seasoned timber, named joinery and a documented warranty are cheap for a maker who is proud of the work.'],
      },
    ],
  },
  {
    slug: 'office-fitout-timeline',
    title: 'How long does an office fit-out take? A realistic Lahore timeline',
    excerpt: 'The honest schedule for a 5,000 sq ft office — including the three phases clients always forget to budget time for.',
    category: 'Commercial',
    date: '2026-05-21',
    readTime: '7 min read',
    image: '/images/service-turnkey.jpg',
    body: [
      {
        paragraphs: [
          '“How soon can we move in?” is the first question on every call. The answer is almost always longer than the contractor promised and shorter than you fear — provided the sequence is respected. Here is the real arc for a typical 3,000–8,000 sq ft Lahore office.',
        ],
      },
      {
        heading: 'Phase 1 — Discovery & test-fit (2–3 weeks)',
        paragraphs: ['Site survey, workplace strategy, departmental adjacencies, and two or three test-fit options. Skipping this is how companies end up with a beautiful reception and desks that do not fit.'],
      },
      {
        heading: 'Phase 2 — Design development & 3D walkthrough (3–5 weeks)',
        paragraphs: ['Mood boards, materials, photoreal renders, electrical and ceiling drawings, and the fixed BOQ. Nothing is ordered until you have walked the space on screen.'],
      },
      {
        heading: 'Phase 3 — Procurement (the forgotten phase, 2–6 weeks)',
        paragraphs: ['Long-lead items — glass, imported light fixtures, solid-wood furniture, HVAC units — must be ordered before or during early civil work. This overlap is where turnkey teams save a month and piecemeal projects lose two.'],
      },
      {
        heading: 'Phase 4 — Fit-out on site (8–14 weeks)',
        paragraphs: ['Civil and partitions first, then MEP, ceiling, flooring, paint, glazing, and finally furniture installation and styling. A dated Gantt with weekly reporting keeps every trade sequenced.'],
      },
      {
        heading: 'Phase 5 — Snagging & handover (1–2 weeks)',
        paragraphs: ['A joint walkthrough, a written snag list, closure within ten working days, and a warranties file. Refuse final payment until this phase is genuinely finished.', ],
        list: ['3,000 sq ft: roughly 14–18 weeks end to end', '8,000 sq ft: 20–26 weeks', '15,000+ sq ft HQ: 4–7 months', 'Add 3 weeks for occupied, phased sites'],
      },
      {
        paragraphs: ['The pattern behind every on-time office is identical: the design was finished before construction began. Book the free test-fit consultation and count backwards from your move date before you sign anything.'],
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      'They treated our reception like a sales asset, not decoration. Clients now comment on the office before they comment on the pitch — and our hiring managers stopped losing candidates after site visits.',
    name: 'Ahsan R.',
    role: 'COO, financial services, Gulberg',
  },
  {
    quote:
      'One contract, one team, one handover date. Having built two earlier offices through five separate vendors, the difference was night and day. The BOQ never moved.',
    name: 'Mariam S.',
    role: 'Founder, technology company, Jail Road',
  },
  {
    quote:
      'The renders and the finished rooms were practically the same photograph. Our walnut boardroom table alone gets mentioned in every board meeting we host.',
    name: 'Faisal K.',
    role: 'Managing partner, DHA Phase 5',
  },
  {
    quote:
      'They designed around how three generations of our family actually use the house. A year in, there is still nothing we would change.',
    name: 'Ayesha & family',
    role: '1 kanal residence, Bahria Town',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    duration: 'Week 1–2',
    copy: 'A free site visit and strategy session: how you work, who visits, headcount and growth, budget bands and the date that genuinely matters. We leave with a brief you recognise.',
  },
  {
    step: '02',
    title: 'Concept & test-fit',
    duration: 'Week 2–4',
    copy: 'Two or three spatial directions with mood boards, adjacency plans and rough budget tracks. You choose a direction before any detailed fee is committed.',
  },
  {
    step: '03',
    title: 'Design & 3D walkthrough',
    duration: 'Week 4–8',
    copy: 'Photoreal renders, lighting scenes, material samples, full drawing set and a transparent, line-by-line BOQ. You approve a space you have already walked through on screen.',
  },
  {
    step: '04',
    title: 'Craft & build',
    duration: 'Week 8–18',
    copy: 'Civil, MEP, ceilings, glazing and finishes on site, while our workshop builds the solid-wood furniture. Weekly reports and a live Gantt keep every trade sequenced.',
  },
  {
    step: '05',
    title: 'Style & handover',
    duration: 'Final 2 weeks',
    copy: 'Furniture installation, art, rugs, greenery and lighting scenes, then a joint snag walkthrough closed within ten days — with warranties and a care guide in your hand.',
  },
];

export const stats = [
  { value: '12', suffix: ' yrs', label: 'Designing & building since 2014' },
  { value: '240', suffix: '+', label: 'Spaces delivered across Pakistan' },
  { value: '45', suffix: 'k+', label: 'Square feet of custom woodwork fitted' },
  { value: '94', suffix: '%', label: 'Clients who return or refer us' },
];

export const clients = [
  'Meridian Capital', 'Northwind', 'Kindle Works', 'Q-Links Group',
  'Ember Roasters', 'The Grove', 'Maison Atelier', 'Alyoum Foods',
  'Pine Enclave', 'Sapphire 7AK',
];
