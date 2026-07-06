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
    role: 'Content Creator Intern (TASE Batch 8)',
    company: 'Teman Ambiss',
    date: 'May 2026 - Present',
    description: "Selected as a Content Creator Intern for TASE Batch 8, focusing on driving impactful educational campaigns. I am responsible for conceptualizing and producing high-quality digital content that resonates with ambitious students and active learners. By leveraging my expertise in cinematography and digital strategy, I collaborate with the team to ensure every visual asset aligns perfectly with the brand's educational goals.",
    type: 'Work',
    location: 'Remote',
    images: [],
  },
  {
    id: 2,
    role: 'Campus Ambassador',
    company: 'HR GenZ Academy',
    date: 'Mar 2026 - Present',
    description: "Serving as a Campus Ambassador representing Universitas Bengkulu. I act as a key liaison to promote academy events, workshops, and career opportunities to students. My responsibility is to engage the campus community, build strategic relationships, and drive interest in the academy's offerings, thereby fostering a vibrant learning culture focused on professional development.",
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
    id: 3,
    role: 'Mentee (Professional Path)',
    company: 'SxCelerate Batch 14',
    date: 'Apr 2026 - Jun 2026',
    description: "Selected for an intensive leadership and professional development program by StudentsxCEOs Jakarta. This prestigious initiative bridges ambitious students with top-tier executives to cultivate critical business acumen. Throughout this mentorship, I actively engage in advanced problem-solving case studies and corporate strategy discussions, significantly expanding my professional network.",
    type: 'Work',
    location: 'Remote',
    images: [],
  },
  {
    id: 4,
    role: 'Kinfluencer (Student Ambassador)',
    company: 'Kinsure',
    date: 'Feb 2026 - Apr 2026',
    description: "Actively engaged as a Kinfluencer, leveraging my background in content creation to scale brand impact. I focused on translating brand objectives into compelling visual narratives by executing targeted digital campaigns and producing high-quality visual assets. Utilizing creative video editing and cinematography techniques, I successfully elevated Kinsure's digital presence and expanded its audience reach.",
    type: 'Work',
    location: 'Remote',
    images: [
      '/Experience/Kinsure_1.jpeg',
      '/Experience/Kinsure_2.jpeg',
      '/Experience/Kinsure_3.jpeg',
    ],
  },
  {
    id: 5,
    role: 'Campus Ambassador',
    company: 'Google Student Ambassador',
    date: 'Sep 2025 - Present',
    description: "Selected from a competitive pool of 12,000 students nationwide to represent Google at Universitas Bengkulu. I served as a vital bridge between the campus community and Google's technology ecosystem. Highlights included leading impactful initiatives like coordinating the offline 'Gemini Rising Star' event in Bengkulu, empowering my peers by maximizing productivity through advanced AI tools like Gemini.",
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
    id: 6,
    role: 'Campus Ambassador',
    company: 'PopSurvey',
    date: 'Oct 2025 - Jan 2026',
    description: "Served as a PopBuddy, focusing on driving brand awareness and proactively educating university students about the value of the PopSurvey platform. I leveraged my expertise in content creation to execute targeted campaigns, producing compelling digital assets that maximized audience engagement and expanded the platform's reach within the student community.",
    type: 'Work',
    location: 'Remote',
    images: [
      '/Experience/popsurvey_1.png',
      '/Experience/popsurvey_2.jpg',
      '/Experience/popsurvey_3.jpeg',
    ],
  },
  {
    id: 7,
    role: 'Teaching Assistant — Data Structures & Algorithms',
    company: 'Universitas Bengkulu',
    date: '2025 - 2026',
    description: "Responsible for mentoring junior informatics students in the PSDA laboratory course. I take charge of designing practical assignments, evaluating student performance, and facilitating laboratory sessions. By helping students navigate complex algorithmic problem-solving and code troubleshooting, I refined my technical communication skills while solidifying my foundational expertise in computer science.",
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
    id: 8,
    role: 'Digital Seller / Game Merchant',
    company: 'Itemku (PT Five Jack)',
    date: 'Sep 2023 - Aug 2025',
    description: "Managed an independent digital store, taking full responsibility for overseeing end-to-end sales and transactions of digital gaming assets. My primary focus was on delivering a seamless customer experience by providing highly responsive support, swiftly resolving buyer inquiries, and guaranteeing the accurate, on-time delivery of all digital items.",
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
    field: 'Informatics Engineering',
    date: 'Jul 2024 - Present',
    location: 'Bengkulu, Indonesia',
    description: "Pursuing a Bachelor's degree with a focus on software development, algorithm design, and database architecture. I actively apply these concepts through hands-on coding projects and laboratory assistantships. Active in BEM FT, HIMATIF, ERCOM, MOSTANEER, UKM Karate, and GenBI.",
  },
  {
    id: 2,
    institution: 'freeCodeCamp',
    degree: 'Certification',
    field: 'Web Development',
    date: 'Nov 2023 - Feb 2024',
    location: 'Online',
    description: 'Completed the intensive 300-hour Responsive Web Design certification, mastering the fundamentals of web architecture and design. Gained hands-on experience in building accessible web applications utilizing HTML5, CSS3, CSS Flexbox, and CSS Grid.',
  },
  {
    id: 3,
    institution: 'SMAN 10 KAUR (PENTAGON)',
    degree: 'High School Diploma',
    field: 'Mathematics and Natural Sciences (MIPA)',
    date: '2021 - 2024',
    location: 'Kaur, Bengkulu, Indonesia',
    description: 'Graduated with a strong academic record, specializing in Mathematics and Natural Sciences. Actively engaged in organizational leadership and technical extracurriculars, particularly in robotics and scientific events.',
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
