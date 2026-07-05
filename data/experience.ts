export interface ExperienceItem {
  id: number
  role: string
  company: string
  date: string
  description: string
  type: 'Work' | 'Organization'
  location: string
  images: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: 'Content Creator Intern',
    company: 'Teman Ambiss',
    date: 'Jun 2026 - Present',
    description: 'Creating engaging digital content and managing social media presence for a growing startup brand.',
    type: 'Work',
    location: 'Remote',
    images: [],
  },
  {
    id: 2,
    role: 'Teaching Assistant — Data Structures & Algorithms',
    company: 'Universitas Bengkulu',
    date: 'Jan 2026 - Present',
    description: 'Guiding students through practical data structures and algorithms, ensuring a strong foundation in core computer science concepts.',
    type: 'Work',
    location: 'Universitas Bengkulu',
    images: [
      '/Experience/PSDA_1.jpeg',
      '/Experience/PSDA_2.jpeg',
      '/Experience/PSDA_3.jpeg',
      '/Experience/PSDA_4.jpeg',
    ],
  },
  {
    id: 3,
    role: 'Campus Ambassador',
    company: 'HR GenZ Academy',
    date: 'Apr 2026 - Present',
    description: 'Serving as the primary liaison for HR GenZ Academy, fostering student development and networking opportunities.',
    type: 'Work',
    location: 'Remote',
    images: [
      '/Experience/genz_1.png',
      '/Experience/genz_2.jpeg',
      '/Experience/genz_3.jpeg',
      '/Experience/genz_4.jpeg',
    ],
  },
  {
    id: 4,
    role: 'SxCelerate Mentee',
    company: 'SxCelerate',
    date: '2026',
    description: 'Selected as a mentee in an accelerator program focused on developing entrepreneurial and technical leadership skills.',
    type: 'Work',
    location: 'Remote',
    images: [],
  },
  {
    id: 5,
    role: 'Kinfluencer',
    company: 'Kinfluencer',
    date: 'Jan 2026 - Present',
    description: 'Promoting digital products and engaging with a wide audience to drive brand awareness and digital growth.',
    type: 'Work',
    location: 'Remote',
    images: [
      '/Experience/Kinsure_1.jpeg',
      '/Experience/Kinsure_2.jpeg',
      '/Experience/Kinsure_3.jpeg',
    ],
  },
  {
    id: 6,
    role: 'Campus Ambassador',
    company: 'Google Student Ambassador',
    date: 'Aug 2025 - Jan 2026',
    description: 'Represented Google on campus, organizing technology workshops and bridging the gap between students and Google\'s developer ecosystem.',
    type: 'Work',
    location: 'Universitas Bengkulu',
    images: [
      '/Experience/GSA_1.jpeg',
      '/Experience/GSA_2.jpeg',
      '/Experience/GSA_3.jpeg',
      '/Experience/GSA_4.jpeg',
    ],
  },
  {
    id: 7,
    role: 'Campus Ambassador Batch 8',
    company: 'PopSurvey',
    date: 'Sep 2025 - Jan 2026',
    description: 'Conducted market research outreach and data collection initiatives among the university student demographic.',
    type: 'Work',
    location: 'Remote',
    images: [
      '/Experience/popsurvey_1.png',
      '/Experience/popsurvey_2.jpg',
      '/Experience/popsurvey_3.jpeg',
    ],
  },
  {
    id: 8,
    role: 'Game Merchant / Digital Seller',
    company: 'Itemku (PT Five Jack)',
    date: 'Sep 2023 - Aug 2024',
    description: 'Managed a successful digital merchant store, handling transactions and customer relationships within the digital goods marketplace.',
    type: 'Work',
    location: 'Remote',
    images: [
      '/Experience/itemku_1.png',
      '/Experience/itemku_2.jpeg',
      '/Experience/itemku_3.jpg',
    ],
  },
  // Organizations
  {
    id: 9,
    role: 'Publikasi dan Dokumentasi',
    company: 'GENBI (Generasi Baru Indonesia) Wilayah',
    date: 'Nov 2025 - Present',
    description: 'Managing publication and documentation activities for the GenBI community, highlighting impactful events and programs.',
    type: 'Organization',
    location: 'Bengkulu',
    images: [
      '/Experience/Genbi_1.jpeg',
      '/Experience/Genbi_2.jpeg',
      '/Experience/Genbi_3.jpeg',
      '/Experience/Genbi_4.jpeg',
    ],
  },
  {
    id: 10,
    role: 'Sekretaris PSDM',
    company: 'UKM ERCOM (Engineering Research Community)',
    date: 'Jan 2026 - Present',
    description: 'Managing human resource development and administrative tasks to support engineering research initiatives.',
    type: 'Organization',
    location: 'Universitas Bengkulu',
    images: [
      '/Experience/psdm_1.jpeg',
      '/Experience/psdm_2.jpeg',
      '/Experience/psdm_3.jpeg',
      '/Experience/psdm_4.jpeg',
    ],
  },
  {
    id: 11,
    role: 'Koordinator Divisi Publikasi & Dokumentasi',
    company: 'UKM Karate Universitas Bengkulu',
    date: 'Apr 2025 - Aug 2025',
    description: 'Led the publication team, ensuring high-quality media coverage and documentation of all martial arts events and tournaments.',
    type: 'Organization',
    location: 'Universitas Bengkulu',
    images: [
      '/Experience/Karate_1.jpeg',
      '/Experience/Karate_2.jpeg',
    ],
  },
  {
    id: 12,
    role: 'Chairman',
    company: 'Robotic Pentagon',
    date: 'Nov 2022 - Oct 2023',
    description: 'Headed the robotics division, organizing technical workshops, managing team projects, and competing in regional robotics competitions.',
    type: 'Organization',
    location: 'Bengkulu',
    images: [
      '/Experience/robo_1.jpeg',
      '/Experience/robo_2.jpeg',
      '/Experience/robo_3.jpeg',
      '/Experience/robo_4.jpeg',
    ],
  },
]

export interface Education {
  id: number
  institution: string
  degree: string
  field: string
  date: string
  location: string
  description?: string
}

export const educationData: Education[] = [
  {
    id: 1,
    institution: 'Universitas Bengkulu',
    degree: 'Bachelor of Computer Science',
    field: 'Informatics Engineering (Teknik Informatika)',
    date: '2024 - Present',
    location: 'Bengkulu, Indonesia',
    description: 'Pursuing a degree in Informatics Engineering with focus on software development, data structures, algorithms, and AI.',
  },
  {
    id: 2,
    institution: 'freeCodeCamp',
    degree: 'Certification',
    field: 'Web Development',
    date: '2023',
    location: 'Online',
    description: 'Completed comprehensive web development curriculum covering HTML, CSS, JavaScript, and responsive design.',
  },
  {
    id: 3,
    institution: 'SMAN 10 KAUR (PENTAGON)',
    degree: 'High School Diploma',
    field: 'Science (IPA)',
    date: '2021 - 2024',
    location: 'Kaur, Bengkulu, Indonesia',
    description: 'Graduated from science track. Led Robotic Pentagon club and participated in regional technology competitions.',
  },
]

export const servicesData = [
  {
    id: '01',
    title: 'Full-Stack Development',
    description: 'Building robust web applications from frontend to backend using Next.js, FastAPI, Go, and modern databases.',
    deliverables: ['Custom Web Apps', 'API Development', 'Database Design', 'Performance Optimization'],
  },
  {
    id: '02',
    title: 'Frontend Engineering',
    description: 'Crafting responsive, interactive user interfaces with React, TypeScript, and motion-driven design.',
    deliverables: ['Responsive UI Development', 'Component Architecture', 'Animation & Interactions', 'Design System Implementation'],
  },
  {
    id: '03',
    title: 'Creative Content Production',
    description: 'Producing cinematic videos, brand content, and visual storytelling using professional editing tools.',
    deliverables: ['Video Editing (Premiere Pro)', 'Motion Graphics', 'Brand Content Strategy', 'Social Media Assets'],
  },
]
