// All mock data lives here so it can later be swapped for real API
// responses (GET /api/stats, GET /api/causes, etc.) without touching
// component code — components only consume the shapes defined below.

export const impactStats = [
  { id: 'people', label: 'People Helped', value: 24, suffix: '+' },
  { id: 'families', label: 'Families Supported', value: 12, suffix: '+' },
  { id: 'meals', label: 'Meals Provided', value: 85, suffix: '+' },
  { id: 'education', label: 'Education Opportunities', value: 18, suffix: '+' },
  { id: 'communities', label: 'Communities Reached', value: 6, suffix: '' },
]

export const howItWorks = [
  {
    id: 1,
    title: 'Identify the Need',
    description: 'People and communities can submit verified needs directly through HopeCloud.',
    icon: 'ClipboardList',
  },
  {
    id: 2,
    title: 'Connect Support',
    description: 'Donors, volunteers, organizations, and resources are matched with people who need them.',
    icon: 'Users',
  },
  {
    id: 3,
    title: 'Create Impact',
    description: 'Support reaches the right people, and the impact can be tracked transparently.',
    icon: 'Sparkles',
  },
]

export const causes = [
  {
    id: 1,
    title: 'Books & Educational Materials',
    description: 'Donate books and learning materials to children and students who need them.',
    icon: 'BookOpen',
    accent: 'sky',
    raised: 1240,
    goal: 2000,
  },
  {
    id: 2,
    title: 'Clothes & Winter Wear',
    description: 'Give clean, usable clothes and winter essentials a second life with someone in need.',
    icon: 'Shirt',
    accent: 'meadow',
    raised: 1680,
    goal: 2500,
  },
  {
    id: 3,
    title: 'Toys & Gifts',
    description: 'Share toys, games and thoughtful gifts with children who deserve a little happiness.',
    icon: 'Gift',
    accent: 'deepsea',
    raised: 980,
    goal: 1500,
  },
  {
    id: 4,
    title: 'School Supplies',
    description: 'Help students with notebooks, stationery, bags and other useful school supplies.',
    icon: 'Pencil',
    accent: 'sky',
    raised: 1120,
    goal: 1800,
  },
  {
    id: 5,
    title: 'Essential Items',
    description: 'Donate useful everyday items that can make life easier for families in need.',
    icon: 'Package',
    accent: 'meadow',
    raised: 890,
    goal: 1400,
  },
  {
    id: 6,
    title: 'Community Giving',
    description: 'Support verified donation needs and help connect useful items with the right people.',
    icon: 'HeartHandshake',
    accent: 'deepsea',
    raised: 1450,
    goal: 2200,
  },
]

export const featuredCampaign = {
  title: 'Every Child Deserves a Chance to Learn.',
  story:
    'In communities without nearby schools, children walk hours just for a chance to learn. HopeCloud is funding mobile classrooms, learning materials, and trained teachers so that distance is never the reason a child stops learning.',
  image: 'GraduationCap',
  raised: 84200,
  goal: 120000,
  supporters: 2140,
}

export const aiExamples = [
  { icon: 'Handshake', text: 'Matching donors with suitable causes' },
  { icon: 'AlertCircle', text: 'Prioritizing urgent needs' },
  { icon: 'Users', text: 'Connecting volunteers with opportunities' },
  { icon: 'SearchCheck', text: 'Identifying resource gaps' },
  { icon: 'LineChart', text: 'Generating impact insights' },
]

export const aiFlow = ['Need', 'AI Analysis', 'Smart Matching', 'Impact']

export const transparencyMetrics = [
  { id: 'received', label: 'Donations Received', value: '$1.84M', icon: 'Wallet' },
  { id: 'distributed', label: 'Funds Distributed', value: '$1.61M', icon: 'ArrowRightLeft' },
  { id: 'people', label: 'People Helped', value: '48,213', icon: 'Users' },
  { id: 'active', label: 'Active Campaigns', value: '32', icon: 'Activity' },
  { id: 'successful', label: 'Successful Campaigns', value: '164', icon: 'BadgeCheck' },
]

export const stories = [
  {
    id: 1,
    title: 'A New Opportunity to Learn',
    quote:
      'With school supplies and a mobile classroom nearby, Amara started her first year of school at nine years old — and hasn\u2019t missed a day since.',
    name: 'Amara, 9',
    tag: 'Education',
  },
  {
    id: 2,
    title: 'From Support to Self-Reliance',
    quote:
      'A small business grant and mentorship helped Farhan turn his repair skills into a shop of his own, now employing two neighbors.',
    name: 'Farhan, 34',
    tag: 'Skills & Employment',
  },
  {
    id: 3,
    title: 'A Community Coming Together',
    quote:
      'When the well ran dry, HopeCloud volunteers and local families rebuilt it together — now the whole village shares clean water again.',
    name: 'Village of Rasheed Nagar',
    tag: 'Clean Water',
  },
]

export const volunteerOptions = [
  { id: 'volunteer', icon: 'HeartHandshake', title: 'Volunteer', description: 'Give your time on the ground or remotely.' },
  { id: 'donate', icon: 'Gift', title: 'Donate', description: 'Fund a cause or campaign you believe in.' },
  { id: 'mentor', icon: 'Lightbulb', title: 'Mentor', description: 'Share your skills and guide someone forward.' },
  { id: 'resources', icon: 'PackagePlus', title: 'Provide Resources', description: 'Contribute goods, tools, or services.' },
  { id: 'drive', icon: 'Megaphone', title: 'Organize a Community Drive', description: 'Rally your community around a cause.' },
]

export const urgentCampaigns = [
  {
    id: 1,
    title: 'Flood Relief — Northern Villages',
    cause: 'Shelter',
    raised: 18400,
    goal: 30000,
  },
  {
    id: 2,
    title: 'Emergency Medical Fund',
    cause: 'Healthcare',
    raised: 9200,
    goal: 25000,
  },
  {
    id: 3,
    title: 'Winter Food Reserves',
    cause: 'Food & Nutrition',
    raised: 14750,
    goal: 20000,
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Causes', href: '#causes' },
  { label: 'Our Impact', href: '#impact' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Causes', href: '#causes' },
  { label: 'Impact', href: '#impact' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
]
