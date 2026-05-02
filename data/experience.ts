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
    role: 'Asisten Praktikum',
    company: 'PSDA (Proyek Struktur Data dan Algoritma) Teknik Informatika',
    date: 'Jan 2026 - Present',
    description: 'Guiding students through practical data structures and algorithms, ensuring a strong foundation in core computer science concepts.',
    type: 'Work',
    location: 'Universitas Bengkulu',
    images: [
      '/web-portfolio/Experience/PSDA_1.jpeg',
      '/web-portfolio/Experience/PSDA_2.jpeg',
      '/web-portfolio/Experience/PSDA_3.jpeg',
      '/web-portfolio/Experience/PSDA_4.jpeg',
    ],
  },
  {
    id: 2,
    role: 'Publikasi dan Dokumentasi',
    company: 'GENBI (Generasi Baru Indonesia) Wilayah',
    date: 'Nov 2025 - Present',
    description: 'Managing publication and documentation activities for the GenBI community, highlighting impactful events and programs.',
    type: 'Organization',
    location: 'Bengkulu',
    images: [
      '/web-portfolio/Experience/Genbi_1.jpeg',
      '/web-portfolio/Experience/Genbi_2.jpeg',
      '/web-portfolio/Experience/Genbi_3.jpeg',
      '/web-portfolio/Experience/Genbi_4.jpeg',
    ],
  },
  {
    id: 3,
    role: 'Game Merchant / Digital Seller',
    company: 'Itemku (PT Five Jack)',
    date: 'Sep 2023 - Aug 2024',
    description: 'Managed a successful digital merchant store, handling transactions and customer relationships within the digital goods marketplace.',
    type: 'Work',
    location: 'Remote',
    images: [
      '/web-portfolio/Experience/itemku_1.png',
      '/web-portfolio/Experience/itemku_2.jpeg',
      '/web-portfolio/Experience/itemku_3.jpg',
    ],
  },
  {
    id: 4,
    role: 'Campus Ambassador',
    company: 'Google Student Ambassador',
    date: 'Aug 2025 - Jan 2026',
    description: 'Represented Google on campus, organizing technology workshops and bridging the gap between students and Google\'s developer ecosystem.',
    type: 'Work',
    location: 'Universitas Bengkulu',
    images: [
      '/web-portfolio/Experience/GSA_1.jpeg',
      '/web-portfolio/Experience/GSA_2.jpeg',
      '/web-portfolio/Experience/GSA_3.jpeg',
      '/web-portfolio/Experience/GSA_4.jpeg',
    ],
  },
  {
    id: 5,
    role: 'Influencer',
    company: 'Kinsure',
    date: 'Jan 2026 - Present',
    description: 'Promoting digital products and engaging with a wide audience to drive brand awareness and digital growth.',
    type: 'Work',
    location: 'Remote',
    images: [
      '/web-portfolio/Experience/Kinsure_1.jpeg',
      '/web-portfolio/Experience/Kinsure_2.jpeg',
      '/web-portfolio/Experience/Kinsure_3.jpeg',
    ],
  },
  {
    id: 6,
    role: 'Campus Ambassador',
    company: 'HR GenZ Academy',
    date: 'Apr 2026 - Present',
    description: 'Serving as the primary liaison for HR GenZ Academy, fostering student development and networking opportunities.',
    type: 'Work',
    location: 'Remote',
    images: [
      '/web-portfolio/Experience/genz_1.png',
      '/web-portfolio/Experience/genz_2.jpeg',
      '/web-portfolio/Experience/genz_3.jpeg',
      '/web-portfolio/Experience/genz_4.jpeg',
    ],
  },
  {
    id: 7,
    role: 'Sekretaris PSDM',
    company: 'UKM ERCOM (Engineering Research Community)',
    date: 'Jan 2026 - Present',
    description: 'Managing human resource development and administrative tasks to support engineering research initiatives.',
    type: 'Organization',
    location: 'Universitas Bengkulu',
    images: [
      '/web-portfolio/Experience/psdm_1.jpeg',
      '/web-portfolio/Experience/psdm_2.jpeg',
      '/web-portfolio/Experience/psdm_3.jpeg',
      '/web-portfolio/Experience/psdm_4.jpeg',
    ],
  },
  {
    id: 8,
    role: 'Campus Ambassador Batch 8',
    company: 'PopSurvey',
    date: 'Sep 2025 - Jan 2026',
    description: 'Conducted market research outreach and data collection initiatives among the university student demographic.',
    type: 'Work',
    location: 'Remote',
    images: [
      '/web-portfolio/Experience/popsurvey_1.png',
      '/web-portfolio/Experience/popsurvey_2.jpg',
      '/web-portfolio/Experience/popsurvey_3.jpeg',
    ],
  },
  {
    id: 9,
    role: 'Koordinator Divisi Publikasi & Dokumentasi',
    company: 'UKM Karate Universitas Bengkulu',
    date: 'Apr 2025 - Aug 2025',
    description: 'Led the publication team, ensuring high-quality media coverage and documentation of all martial arts events and tournaments.',
    type: 'Organization',
    location: 'Universitas Bengkulu',
    images: [
      '/web-portfolio/Experience/Karate_1.jpeg',
      '/web-portfolio/Experience/Karate_2.jpeg',
    ],
  },
  {
    id: 10,
    role: 'Chairman',
    company: 'Robotic Pentagon',
    date: 'Nov 2022 - Oct 2023',
    description: 'Headed the robotics division, organizing technical workshops, managing team projects, and competing in regional robotics competitions.',
    type: 'Organization',
    location: 'Bengkulu',
    images: [
      '/web-portfolio/Experience/robo_1.jpeg',
      '/web-portfolio/Experience/robo_2.jpeg',
      '/web-portfolio/Experience/robo_3.jpeg',
      '/web-portfolio/Experience/robo_4.jpeg',
    ],
  },
]

export const servicesData = [
  {
    id: '01',
    title: 'Full-Stack Development',
    description: 'Architecting and building robust web applications from the ground up using React, Next.js, Node, and Go.',
    deliverables: ['Custom Web Apps', 'API Development', 'Database Design', 'Performance Optimization'],
  },
  {
    id: '02',
    title: 'Creative Frontend Engineering',
    description: 'Transforming static designs into living, breathing digital experiences using Framer Motion and WebGL.',
    deliverables: ['Awwwards-tier Animations', '3D Web Experiences', 'Interactive UI', 'Smooth Scrolling'],
  },
  {
    id: '03',
    title: 'UI/UX Design',
    description: 'Designing intuitive, high-fidelity interfaces that prioritize user experience and aesthetic excellence.',
    deliverables: ['Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
  },
]
