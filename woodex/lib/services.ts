export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  number: string;
  shortName: string;
  eyebrow: string;
  title: string; // H1
  tagline: string; // large statement
  heroImage: string;
  accent?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string[];
  signature: { title: string; copy: string };
  includes: { title: string; copy: string }[];
  outcomes: { stat: string; label: string; copy: string }[];
  gallery: { src: string; caption: string }[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: 'office-interior-design',
    number: '01',
    shortName: 'Office Interiors',
    eyebrow: 'Commercial & Residential — Service 01',
    title: 'Office Interior Design',
    tagline: 'Your office is your most visible brand statement.',
    heroImage: '/images/service-office.jpg',
    metaTitle:
      'Office Interior Designers in Lahore | Workspaces That Perform',
    metaDescription:
      'Award-calibre office interior design in Lahore: space planning, branded workspaces, 3D walkthroughs and turnkey fit-outs for headquarters, coworking and IT offices. Book a free design consultation.',
    keywords: [
      'office interior design lahore',
      'corporate office interior designers lahore',
      'workspace design Pakistan',
      'office fit-out companies lahore',
      'IT office interior design',
      'coworking space design lahore',
      'commercial interior designer lahore',
      'office renovation DHA Lahore',
    ],
    intro: [
      'Before a client reads your proposal, they have already judged your company — in the reception, across the meeting table, in the corridor outside your CEO’s office. Employees decide whether to stay within their first ninety days, and the room is part of that decision. Your office is not a cost centre. It is the most visible, most visited, most photographed statement your brand will ever make.',
      'Woodex designs and builds offices for companies that intend to lead: headquarters, IT and technology floors, coworking campuses, executive suites, finance houses and industrial head offices across Lahore, Islamabad and Karachi. We handle the full arc — workplace strategy, test-fit plans, 3D walkthroughs, BOQ transparency, civil work, solid-wood furniture from our own workshop, and handover on a fixed date.',
      'The result is a workspace that recruits for you on Monday morning, sells for you in every client meeting, and still looks deliberate in year seven.',
    ],
    signature: {
      title: 'Design that grows your business',
      copy: 'We start with how your organisation actually works — team ratios, meeting cultures, peak occupancy, growth headroom, acoustic privacy, brand cues — before a single material is chosen. Every line on the plan is answerable to a business outcome: faster hiring, longer retention, denser but comfortable occupancy, or a reception that closes deals before the meeting starts.',
    },
    includes: [
      {
        title: 'Workplace strategy & test-fits',
        copy: 'Departmental adjacency maps, occupancy and density models, hybrid/desk-sharing scenarios, and up to three test-fit options for your floor plate so you sign off a plan that matches headcount and growth plans — not the contractor’s convenience.',
      },
      {
        title: 'Branded spatial identity',
        copy: 'Reception feature walls, logo moments, material and colour systems drawn from your brand guidelines, signage and wayfinding — designed so the company’s story is legible to visitors within the first ten steps.',
      },
      {
        title: 'Workstations, meeting & collaboration zones',
        copy: 'Open-plan bench systems, focus booths and phone pods, huddle rooms, boardrooms and breakout lounges — ergonomically specified with the right acoustic, lighting and cable strategy for each zone.',
      },
      {
        title: 'Lighting, acoustics & MEP coordination',
        copy: 'Layered lighting scenes from task to ambient, acoustic slat ceilings and panels rated for speech privacy, and fully coordinated HVAC, electrical and data drawings so nothing is “decided on site”.',
      },
      {
        title: 'Custom solid-wood furniture',
        copy: 'Reception desks, boardroom tables, workstations, credenzas and storage built in our own workshop in walnut, sheesham and oak veneers — matched to the renders, built to survive a decade of daily use.',
      },
      {
        title: 'Turnkey fit-out & project management',
        copy: 'Civil, false ceiling, flooring, glazing, painting and final styling delivered by one accountable team with a published Gantt, weekly site reports, fixed BOQ pricing and a joint snag-list walkthrough at handover.',
      },
    ],
    outcomes: [
      { stat: '6–10', label: 'week design phase', copy: 'From brief to photoreal 3D walkthrough and fixed BOQ, typically six to ten weeks depending on floor area.' },
      { stat: '25%', label: 'smarter density', copy: 'Better adjacency and shared zones typically free a quarter of floor area for growth or amenities.' },
      { stat: '100+', label: 'workspaces delivered', copy: 'Offices, coworking floors, retail boxes and fit-outs completed since 2014 across Pakistan.' },
      { stat: '1', label: 'accountable team', copy: 'One designer-led team, one contract, one handover date — no finger-pointing between vendors.' },
    ],
    gallery: [
      { src: '/images/gallery-boardroom.jpg', caption: 'Walnut boardroom for a financial services HQ, Gulberg' },
      { src: '/images/gallery-lobby.jpg', caption: 'Double-height reception with backlit onyx and oak slats' },
      { src: '/images/hero-office.jpg', caption: 'Reception lounge of a completed corporate headquarters' },
      { src: '/images/service-office.jpg', caption: 'Open-plan technology floor with acoustic slat ceiling' },
    ],
    faqs: [
      {
        q: 'How much does office interior design and fit-out cost in Lahore?',
        a: 'Turnkey office fit-outs typically range from PKR 2,500–6,500 per sq ft depending on specification — civil changes, glazing, HVAC upgrades and imported finishes move the figure. We provide a transparent, line-by-line BOQ after the concept stage, with mid and premium specification tracks so you stay in control of the budget. The design consultation and initial test-fit are free.',
      },
      {
        q: 'How long does a complete office fit-out take?',
        a: 'A 3,000–8,000 sq ft office usually takes 6–10 weeks of design and 8–16 weeks of construction. Larger headquarters (15,000+ sq ft) run 4–7 months end to end. You receive a dated Gantt chart before work begins, and weekly reports track every milestone against it.',
      },
      {
        q: 'Can you work after hours so our business keeps operating?',
        a: 'Yes. Phased and out-of-hours fit-outs are a core part of our service for occupied offices — we divide the floor into zones, complete one section at a time, and coordinate noisy or dusty work outside business hours with zero disruption to clients on your premises.',
      },
      {
        q: 'Do you provide 3D designs before construction starts?',
        a: 'Every commercial project includes photorealistic still renders and, on request, a full animated walkthrough. You approve every wall, material and light fixture virtually before we order a single thing — what you approve is what gets built.',
      },
      {
        q: 'Do you only work in Lahore?',
        a: 'Our studio and workshop are in Lahore (Gulberg), with active projects in Islamabad, Karachi, Sialkot and Gujranwala. DHA, Bahria Town, Gulberg, Model Town and industrial estates are covered as standard.',
      },
    ],
  },
  {
    slug: 'residential-interior-design',
    number: '02',
    shortName: 'Homes & Apartments',
    eyebrow: 'Commercial & Residential — Service 02',
    title: 'Residential Interior Design',
    tagline: 'A home should feel inevitable — as though it could belong to nobody else.',
    heroImage: '/images/service-residential.jpg',
    metaTitle:
      'Residential Interior Designers in Lahore | Homes, Villas & Apartments',
    metaDescription:
      'Complete residential interior design in Lahore — 5 marla to 2 kanal homes, DHA villas and apartments. Space planning, bespoke woodwork, false ceilings, 3D designs and turnkey execution.',
    keywords: [
      'residential interior design lahore',
      'house interior designer DHA',
      '1 kanal house interior lahore',
      'apartment interior design lahore',
      'villa interior design Pakistan',
      'living room design lahore',
      'bedroom interior design',
      'home renovation lahore',
    ],
    intro: [
      'A developer hands you a shell. Your life is supposed to move into it. Between those two facts sits every decision you have been postponing — the TV wall that also needs storage, the dining table that seats six on Tuesday and fourteen on Eid, the parents’ wing that must feel dignified rather than separate.',
      'Woodex designs homes and apartments from 5-marla first properties to 2-kanal family compounds: spatial planning that respects joint-family rhythms, false ceilings and lighting that flatter both daylight and evening, kitchens that survive daily use, and bespoke solid-wood furniture built in our own workshop.',
      'We design for the way Pakistani families actually live — generous guest circulation, durable surfaces, concealed storage, and quiet luxury that never shouts.',
    ],
    signature: {
      title: 'Designed around your family’s calendar',
      copy: 'Our discovery process maps daily routines, guest frequency, domestic staff flow and future-proofing (a nursery today, a study in three years). The resulting plan is then rendered in photoreal 3D, so the whole family can walk the home before it exists.',
    },
    includes: [
      { title: 'Whole-home space planning', copy: 'Furniture layouts, circulation and vastu/function-first zoning for living, dining, kitchen, bedrooms, guest rooms and servant areas — across ground floors, mezzanines and full villas.' },
      { title: 'Kitchens & wardrobes', copy: 'Modular and carcass kitchens in solid wood and premium ply, island counters, pantry and appliance planning, plus floor-to-ceiling wardrobes with internals designed around your belongings.' },
      { title: 'False ceilings & lighting design', copy: 'Rafter, tray and slat ceilings with cove, profile and spotlight layouts — modelled in renders for both daytime and 7 p.m. scenes.' },
      { title: 'Flooring, walls & finishes', copy: 'Wood-effect and engineered timber flooring, marble and terrazzo coordination, veneer paneling, wallpaper and paint specification, with full material mood boards.' },
      { title: 'Bespoke furniture & soft furnishings', copy: 'Sofas, beds, dining sets, consoles and coffee tables built in-house, with curtain, rug and art styling that ties every room into one calm narrative.' },
      { title: 'Turnkey execution', copy: 'Civil modifications, electrical and plumbing rerouting, woodwork, polish and installation managed by one team against a fixed budget and handover date.' },
    ],
    outcomes: [
      { stat: '40%', label: 'more storage', copy: 'Purpose-built joinery typically adds 40% usable storage without adding a square foot.' },
      { stat: '3', label: 'design routes', copy: 'Every home presents classic, contemporary or warm-modern routes before final detailing.' },
      { stat: '0', label: 'surprises on site', copy: 'Renders, drawings and a fixed BOQ are signed off before execution begins.' },
      { stat: '12 yrs', label: 'of homes delivered', copy: 'Apartments, townhouses and family compounds completed across Punjab and Islamabad since 2014.' },
    ],
    gallery: [
      { src: '/images/service-residential.jpg', caption: 'Warm-modern living room with teak paneling and travertine' },
      { src: '/images/service-turnkey.jpg', caption: 'Built-in bedroom joinery during the final fit-out stage' },
      { src: '/images/gallery-lobby.jpg', caption: 'Residential entrance foyer with oak slats and brass inlay' },
      { src: '/images/service-furniture.jpg', caption: 'Bespoke sheesham dining set hand-built in our workshop' },
    ],
    faqs: [
      {
        q: 'What does a full 1 kanal house interior cost in Lahore?',
        a: 'Whole-home turnkey interiors for a 1 kanal house generally range from PKR 45 lakh to 1.8 crore+ depending on scope and specification — kitchens, bathrooms, imported flooring and solid-wood furniture are the largest variables. After a free site visit we provide two to three specification tracks with a transparent BOQ, so you can prioritise room by room.',
      },
      {
        q: 'Can you design only specific rooms rather than the whole house?',
        a: 'Absolutely. Living rooms, kitchens, master bedrooms and lobby renovations are common standalone projects. We also offer a design-only package for clients who have their own execution team.',
      },
      {
        q: 'How do you handle families with different taste preferences?',
        a: 'Our discovery session includes every household decision-maker. We present two or three coherent design routes rather than asking family members to pick pieces from a catalogue, which makes consensus far easier.',
      },
      {
        q: 'Is the furniture really made in your own workshop?',
        a: 'Yes. Woodex began as a furniture maker, and our sheesham, walnut and oak pieces are built in-house with documented joinery, seasoning guarantees and finish samples approved before production.',
      },
    ],
  },
  {
    slug: 'retail-showroom-interior-design',
    number: '03',
    shortName: 'Shops & Showrooms',
    eyebrow: 'Commercial & Residential — Service 03',
    title: 'Retail & Showroom Interior Design',
    tagline: 'Every square foot should either sell — or make the selling easier.',
    heroImage: '/images/service-retail.jpg',
    metaTitle:
      'Retail & Showroom Interior Design in Lahore | Shops, Boutiques, Malls',
    metaDescription:
      'Conversion-focused retail and showroom interiors in Lahore: boutiques, jewellery and bridal stores, furniture showrooms, mall kiosks and brand outlets — designed for footfall, dwell time and sales.',
    keywords: ['retail interior design lahore', 'showroom interior design', 'boutique design lahore', 'mall outlet design', 'jewellery store interior', 'shop renovation lahore', 'commercial interiors Pakistan'],
    intro: [
      'Retail design is retail strategy made physical. Where the customer turns, what they touch first, how long the fitting room takes, which wall is visible from the mall corridor — each is a commercial decision rendered in timber, light and glass.',
      'Woodex designs shops, boutiques and showrooms that convert: bridal and jewellery stores, fashion and lifestyle boutiques, furniture and sanitary showrooms, automotive display floors and mall kiosks. We plan the customer journey, design the display systems, specify lighting that makes merchandise look expensive, and build it on the clock — because every week a shop is closed costs real money.',
    ],
    signature: {
      title: 'Designed on a sales map, not a decoration brief',
      copy: 'Before aesthetics, we produce a dwell-and-conversion map: entrance magnet zone, feature/power wall, trial or consultation zone, impulse fixtures, and the cashier moment. The interior is then built to move traffic through those beats.',
    },
    includes: [
      { title: 'Customer journey planning', copy: 'Entrance thresholds, circulation loops, power walls and sight-line analysis from the mall corridor or street frontage.' },
      { title: 'Display & fixture systems', copy: 'Timber slatwalls, gondolas, vitrines, bespoke counters and product-specific displays — jewellery, apparel, bridal, electronics or furniture.' },
      { title: 'Retail lighting', copy: 'High-CRI track spots, warm accent lighting, window-display scenes and layered ambient light that lifts perceived product value.' },
      { title: 'Brand environments', copy: 'Facade and signage coordination, brand colour and material translation, graphics and campaign-ready walls.' },
      { title: 'Fitting & consultation rooms', copy: 'Flattering lighting, mirrors, privacy and seating engineered to reduce decision anxiety and raise close rates.' },
      { title: 'Fast-track build', copy: 'Night-shift fit-outs in operating malls, landlord-approval drawings and tight 3–8 week construction schedules.' },
    ],
    outcomes: [
      { stat: '3–8', label: 'weeks on site', copy: 'Most retail boxes are built and merchandising-ready in three to eight weeks.' },
      { stat: '12–18%', label: 'dwell-time lift', copy: 'Journey-led layouts and lighting typically increase time-in-store by 12–18%.' },
      { stat: '100%', label: 'landlord-ready drawings', copy: 'Electrical, fire and facade drawings prepared for mall management approval.' },
    ],
    gallery: [
      { src: '/images/service-retail.jpg', caption: 'Timber-and-brass fashion boutique, Gulberg' },
      { src: '/images/gallery-lobby.jpg', caption: 'Double-height brand showroom entrance' },
      { src: '/images/service-furniture.jpg', caption: 'Display counters and fixtures built in our own workshop' },
      { src: '/images/service-turnkey.jpg', caption: 'Night-shift mall fit-out delivered without closing neighbours' },
    ],
    faqs: [
      {
        q: 'Can you fit out a shop inside a running mall without issues?',
        a: 'Yes — mall fit-outs are a specialty. We work to the mall’s fit-out manual, prepare the landlord approval drawings, and run noisy work in approved night windows. Most boxes complete in 3–8 weeks.'
      },
      {
        q: 'Do you design display furniture too?',
        a: 'All fixtures — counters, vitrines, slatwalls, gondolas and seating — are designed bespoke and built in our own workshop, so quality and timing stay under one roof.'
      },
      {
        q: 'Will the store work for a franchise / national brand rollout?',
        a: 'We produce a documented fixture and materials kit that can be repeated across locations, keeping brand consistency while adapting to each floor plate.'
      },
    ],
  },
  {
    slug: 'custom-solid-wood-furniture',
    number: '04',
    shortName: 'Custom Furniture',
    eyebrow: 'Commercial & Residential — Service 04',
    title: 'Custom Solid-Wood Furniture',
    tagline: 'We began as woodworkers. Everything else grew from the grain.',
    heroImage: '/images/service-furniture.jpg',
    metaTitle:
      'Custom Solid Wood Furniture in Lahore | Sheesham, Walnut & Oak',
    metaDescription:
      'Bespoke solid-sheesham, walnut and oak furniture made in Lahore: boardroom tables, beds, dining sets, reception desks and wardrobes. Seasoned timber, documented joinery, 10-year craft warranty.',
    keywords: ['custom furniture lahore', 'solid sheesham furniture', 'walnut furniture Pakistan', 'bespoke boardroom table', 'handmade wooden furniture lahore', 'reception desk design', 'wood furniture workshop lahore'],
    intro: [
      'Before Woodex designed buildings, it built furniture — and the workshop remains the conscience of the studio. Every veneered wall and slatted ceiling we design is backed by people who actually know how timber moves, seasons and joins.',
      'Our custom furniture service is open to homeowners, offices and contractors: boardroom and dining tables, four-poster and platform beds, reception desks, credenzas, wardrobes, console tables and doors. We work in properly seasoned sheesham (rosewood), walnut, oak and teak, with hand-rubbed oil and satin PU finishes, traditional mortise-and-tenon joinery and a documented ten-year craft warranty.',
    ],
    signature: {
      title: 'From one boardroom table to a hundred-workstation order',
      copy: 'Every piece starts with a scale drawing and a finish sample you approve. Single commissions and commercial batch orders run on the same documented system — timber source, moisture readings, joinery details and polish schedule.',
    },
    includes: [
      { title: 'Bespoke design & shop drawings', copy: 'Pieces drawn to your space and storage needs, with 2D drawings, 3D previews and material/finish samples.' },
      { title: 'Seasoned solid timber', copy: 'Sheesham, walnut, oak and teak, kiln- and air-seasoned with moisture-content checks to prevent warping.' },
      { title: 'Traditional joinery', copy: 'Mortise-and-tenon, dovetail drawers and solid-wood framing — no cheap staples or particle-board cores.' },
      { title: 'Hand finishes', copy: 'Natural oils, hardwax and multi-stage satin PU polishing in walnut, honey, espresso and smoked tones.' },
      { title: 'Commercial batch capacity', copy: 'Workstations, hotel and restaurant furniture produced to spec with consistent lead times for quantity orders.' },
      { title: 'Delivery & installation', copy: 'White-glove delivery, on-site assembly and a ten-year structural craft warranty.' },
    ],
    outcomes: [
      { stat: '10 yr', label: 'craft warranty', copy: 'Structural joinery guaranteed for a decade, with finish care guidance included.' },
      { stat: '8–12', label: 'weeks typical', copy: 'Most bespoke pieces complete in eight to twelve weeks depending on timber and complexity.' },
      { stat: '0', label: 'particle board', copy: 'Structural carcasses are solid wood or premium hardwood ply — never cheap composites.' },
    ],
    gallery: [
      { src: '/images/service-furniture.jpg', caption: 'Dovetail joinery in seasoned sheesham' },
      { src: '/images/gallery-boardroom.jpg', caption: '14-seat solid-walnut boardroom table' },
      { src: '/images/service-residential.jpg', caption: 'Bespoke joinery inside a completed warm-modern suite' },
      { src: '/images/about-studio.jpg', caption: 'Finish samples reviewed in studio before production begins' },
    ],
    faqs: [
      {
        q: 'How do I commission a custom piece?',
        a: 'Share dimensions, reference images and your preferred timber at a free studio visit. We produce drawings and a fixed quote, then a finish sample for sign-off before production begins.'
      },
      {
        q: 'What is the price difference between solid sheesham and veneer?',
        a: 'Solid sheesham is a premium, long-investment material; veneer over hardwood ply gives the same continuous grain look at roughly 40–60% of the cost for large panel surfaces. We specify each honestly and label which is which on your BOQ.'
      },
      {
        q: 'Do you deliver outside Lahore?',
        a: 'Yes. Crated furniture is shipped nationwide with insured carriers and on-site assembly in Islamabad, Karachi and beyond.'
      },
    ],
  },
  {
    slug: '3d-visualization',
    number: '05',
    shortName: '3D Visualization',
    eyebrow: 'Commercial & Residential — Service 05',
    title: '3D Design & Walkthrough Visualization',
    tagline: 'Approve every brick and beam before anyone orders a brick.',
    heroImage: '/images/service-3d.jpg',
    metaTitle:
      '3D Interior Rendering & Walkthrough Services in Lahore',
    metaDescription:
      'Photorealistic 3D interior renders, animated walkthroughs and virtual reality previews for homes, offices and retail in Lahore — approve materials, lighting and layout before construction.',
    keywords: ['3D interior rendering lahore', 'architectural visualization Pakistan', '3D walkthrough service', 'photorealistic interior renders', 'VR interior preview', '3D design lahore'],
    intro: [
      'The most expensive sentence in construction is “I thought it would look different.” 3D visualization deletes it. Every Woodex project is designed, lit and walk-through-able in photoreal detail before demolition begins — the same service is also available standalone for architects, developers and contractors who need presentation-grade imagery.',
      'We deliver still renders, 360° panoramas, cinematic walkthrough videos and, for flagship spaces, real-time VR walkthroughs. Materials are sampled from the actual supplier boards we intend to use, so the render is a promise rather than an impression.',
    ],
    signature: {
      title: 'Render-to-reality fidelity',
      copy: 'We maintain a library of the real materials, veneers and light fixtures we specify locally. The gap between approved render and finished photograph is routinely small enough to place side by side.',
    },
    includes: [
      { title: '3D floor & space modelling', copy: 'Accurate modelling from architectural drawings or site measurements, with furniture layouts to scale.' },
      { title: 'Photoreal still renders', copy: 'Day and night lighting scenes, true material textures, multiple camera angles per room.' },
      { title: 'Cinematic walkthroughs', copy: 'Smooth camera-path videos with sound design, ideal for investors, launches and marketing.' },
      { title: '360° panoramas & VR', copy: 'Interactive panoramas and headset walkthroughs for flagship commercial and residential projects.' },
      { title: 'Real material matching', copy: 'Textures matched to locally available veneers, stones, fabrics and laminates from our sampled library.' },
      { title: 'Fast-turnaround packages', copy: 'Single-room renders in days; full-project visual suites on scheduled sprints for tenders.' },
    ],
    outcomes: [
      { stat: '48–72h', label: 'first frames', copy: 'Initial camera angles for single rooms within two to three working days.' },
      { stat: '2', label: 'revision rounds', copy: 'Two structured revision rounds included, with change lists tracked line by line.' },
      { stat: '4K', label: 'delivery standard', copy: 'Print- and presentation-resolution 4K stills, 1080p/4K video.' },
    ],
    gallery: [
      { src: '/images/service-3d.jpg', caption: 'Studio workflow: render, board, real material sample' },
      { src: '/images/hero-office.jpg', caption: 'Approved render of a reception space, pre-construction' },
      { src: '/images/service-office.jpg', caption: 'Open-plan floor rendered in daylight and night scenes' },
    ],
    faqs: [
      {
        q: 'I already have 2D drawings — can you render them?',
        a: 'Yes. We work from CAD files, PDFs, hand sketches or even site measurements for existing spaces. Developers and architects use this standalone service frequently for client presentations and marketing.'
      },
      {
        q: 'How much do 3D renders cost?',
        a: 'Per-view pricing scales with room complexity; walkthroughs and VR are quoted per minute/scene. A design+build Woodex project includes its render suite within the design fee — ask for the current rate card.'
      },
      {
        q: 'Can the render include our actual furniture and branding?',
        a: 'Custom furniture, branded signage, art and exact light fixtures are all modelled — and for build projects, our own workshop constructs the pieces shown.'
      },
    ],
  },
  {
    slug: 'turnkey-design-build',
    number: '06',
    shortName: 'Turnkey Fit-Outs',
    eyebrow: 'Commercial & Residential — Service 06',
    title: 'Turnkey Design & Build / Renovation',
    tagline: 'One contract. One timeline. One team that cannot point fingers.',
    heroImage: '/images/service-turnkey.jpg',
    metaTitle:
      'Turnkey Interior Design & Build Company in Lahore',
    metaDescription:
      'Single-contract turnkey interiors in Lahore — civil work, false ceilings, flooring, electrical, HVAC coordination, woodwork and styling for offices, homes and retail with fixed BOQ pricing.',
    keywords: ['turnkey interior contractors lahore', 'design and build company Pakistan', 'interior fit-out lahore', 'office renovation contractor', 'home renovation lahore', 'commercial construction fit-out'],
    intro: [
      'Designing with one firm, buying furniture from a second, and discovering the electrician and the ceiling designer have never met each other is the classic way Pakistani renovation projects derail — budget creep, schedule slip, and nobody accepting responsibility.',
      'Woodex’s design-and-build service puts strategy, design, rendering, civil work, joinery, furniture and final styling under one contract led by one project director. You see a fixed BOQ before work starts, a live Gantt chart while it runs, and you walk into a finished, snag-checked space at handover.',
    ],
    signature: {
      title: 'Fixed scope, fixed price, fixed date',
      copy: 'Once the 3D design and BOQ are approved, scope is frozen by mutual agreement. Any change runs through a priced variation order — there are no quiet “extras” appearing in the final bill.',
    },
    includes: [
      { title: 'Civil & structural modifications', copy: 'Demolition, new partitions, brick and drywall, flooring screed, door and window openings.' },
      { title: 'Ceilings, flooring & painting', copy: 'False and slat ceilings, engineered wood, tile, marble and terrazzo flooring, textures and multi-coat paint systems.' },
      { title: 'Electrical, plumbing & HVAC coordination', copy: 'Power and data layouts, lighting circuits, sanitary reroutes and coordinated ducting with certified trades.' },
      { title: 'Glazing & partitions', copy: 'Frameless glass offices, black-frame partitions, doors and hardware with acoustic ratings.' },
      { title: 'Built-in & loose furniture', copy: 'Reception desks, kitchens, wardrobes and freestanding pieces from our workshop, installed and dressed.' },
      { title: 'Snagging & handover', copy: 'Joint walkthrough with a documented snag list, closure within 10 working days, warranties file and care guide.' },
    ],
    outcomes: [
      { stat: '1', label: 'point of responsibility', copy: 'Designer, builder and furniture maker share one team and one handover date.' },
      { stat: '0', label: 'hidden variation', copy: 'All changes are priced variation orders signed by you before execution.' },
      { stat: '100%', label: 'snag closure', copy: 'Formal snag list closed within ten working days, in writing.' },
    ],
    gallery: [
      { src: '/images/service-turnkey.jpg', caption: 'Organised fit-out: clean staging, dated milestones' },
      { src: '/images/gallery-lobby.jpg', caption: 'Completed reception from the same contract as the shell works' },
      { src: '/images/service-office.jpg', caption: 'Turnkey office floor delivered in fourteen weeks' },
    ],
    faqs: [
      {
        q: 'What does “turnkey” actually include?',
        a: 'Everything between the bare shell and walking into a finished, furnished, styled space — design, renders, civil, ceilings, flooring, electrical, HVAC coordination, glazing, paint, built-in and loose furniture, and final snagging. You receive one contract and one invoice schedule.'
      },
      {
        q: 'Can we lock the price before construction?',
        a: 'Yes. After design approval you receive a fixed BOQ with two specification tracks. The price changes only if you approve a written variation order.'
      },
      {
        q: 'Do you offer design-only if we have a contractor?',
        a: 'We do. The design-only package includes drawings, 3D renders, BOQ and on-site support visits so your contractor executes accurately.'
      }
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
