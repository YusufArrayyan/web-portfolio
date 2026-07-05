export interface Certificate {
  id: number
  title: string
  issuer: string
  category: 'Technical' | 'Cloud & DevOps' | 'AI & Data' | 'Cybersecurity' | 'Web Development'
  year: string
  image: string
  color: string
  credentialUrl?: string
}

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: 'AWS Containers',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Cloud & DevOps',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#FF9900',
  },
  {
    id: 2,
    title: 'Prompt Engineering',
    issuer: 'ZilLearn',
    category: 'AI & Data',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#8B5CF6',
  },
  {
    id: 3,
    title: 'Gemini for Google Workspace',
    issuer: 'Google',
    category: 'AI & Data',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#4285F4',
  },
  {
    id: 4,
    title: 'Google AI Essentials',
    issuer: 'Google',
    category: 'AI & Data',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#EA4335',
  },
  {
    id: 5,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    category: 'Cybersecurity',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#049FD9',
  },
  {
    id: 6,
    title: 'Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud',
    issuer: 'Dicoding Indonesia',
    category: 'Cloud & DevOps',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#1DB954',
  },
  {
    id: 7,
    title: 'Belajar Back-End Pemula dengan JavaScript',
    issuer: 'Dicoding Indonesia',
    category: 'Web Development',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#F7DF1E',
  },
  {
    id: 8,
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    category: 'Web Development',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#F7DF1E',
  },
  {
    id: 9,
    title: 'Cybersecurity Awareness',
    issuer: 'ZilLearn',
    category: 'Cybersecurity',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#054ADA',
  },
  {
    id: 10,
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    category: 'AI & Data',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#FF6F00',
  },
  {
    id: 11,
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    category: 'Web Development',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#1DB954',
  },
  {
    id: 12,
    title: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
    issuer: 'Dicoding Indonesia / AWS',
    category: 'Cloud & DevOps',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#FF9900',
  },
  {
    id: 13,
    title: 'ChatGPT Essentials',
    issuer: 'ZilLearn',
    category: 'AI & Data',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#10A37F',
  },
  {
    id: 14,
    title: 'Pengenalan ke Logika Pemrograman (Programming Logic)',
    issuer: 'Dicoding Indonesia',
    category: 'Technical',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#1DB954',
  },
  {
    id: 15,
    title: 'HTML Fundamentals',
    issuer: 'ZilLearn',
    category: 'Web Development',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#E34F26',
  },
  {
    id: 16,
    title: 'DevOps Essentials',
    issuer: 'ZilLearn',
    category: 'Cloud & DevOps',
    year: '2024',
    image: '/certificates/placeholder.png',
    color: '#326CE5',
  },
]

/** Unique categories for filter UI */
export const certificateCategories = [
  'All',
  'Web Development',
  'Cloud & DevOps',
  'AI & Data',
  'Cybersecurity',
  'Technical',
] as const
