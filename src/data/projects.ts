export interface ProjectScreenshot {
  caption: string
  device: 'mobile' | 'desktop'
  // Leave empty to render a labelled placeholder until the real image is added
  src?: string
}

export interface ProjectData {
  id: string
  title: string
  description: string
  tags: string[]
  role: string
  teamSize: string
  teamOrg: string
  details: string
  overview?: string[]
  whatIDid?: string[]
  githubUrl?: string
  demoImages: string[]
  demoVideos?: string[]
  screenshots?: ProjectScreenshot[]
}

export const projects: ProjectData[] = [
  {
    id: 'connnext',
    title: 'ConnNext — Professional Networking Mobile App',
    description:
      'An AI-powered networking app I took from first commit to the App Store in four months.',
    tags: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Clerk', 'AWS', 'NativeWind', 'Gluestack UI'],
    role: 'Founding Full-Stack Engineer',
    teamSize: '3 Engineers + 1 Designer',
    teamOrg: 'ConnNext (Startup)',
    details:
      'Joined as a founding engineer building both the Expo/React Native client and the NestJS + Prisma/PostgreSQL backend. Built email/phone/Apple sign-up and OTP verification flows, multi-path onboarding for seekers, providers, and founders, resume upload, and an embeddings-backed discovery feed with semantic matching. Implemented the social feed with post and event cards, a gamification system (points, achievements, star ledger), invite links, push notifications, and dark mode support across the app.',
    overview: [
      'Professional networking apps are usually built around one kind of person. ConnNext serves three: job seekers, the people providing opportunities, and founders building teams. Instead of making them search, it uses AI to suggest the people worth meeting, and a social feed of posts and events gives them a reason to stay.',
    ],
    whatIDid: [
      'I joined as a founding engineer, the only frontend engineer on a four-person startup team, and owned the Expo / React Native app from the first commit. Four months later, we launched on the Apple App Store.',
      'Onboarding had to work for job seekers and opportunity providers alike, and on a phone, people get interrupted. I built it as a resumable multi-step flow: progress autosaves through TanStack Query and comes back when the app relaunches, so nobody loses their place. Sign-up works by email, phone, or Apple ID with OTP verification, and resume upload means a profile has substance from the start.',
      'The discovery feed matches people with AI, which makes its endpoint slower than the rest of the app. I tuned the infinite-scroll timeouts to fit it, and designed fallback screens for when a profile was still being indexed or had too little data, so the feed always showed something useful instead of an empty screen.',
      'To turn first visits into habits, I designed and built a gamification system across the app and the NestJS backend. Posts, messages, and new connections earn points, recorded in an append-only ledger. Each event is recorded exactly once, and a failure in the points system can never break the action that triggered it. Alongside it, I built the social feed, invite links, push notifications, and dark mode.',
    ],
    demoImages: [],
    screenshots: [
      { device: 'mobile', caption: 'Sign-up: email, phone, and Apple sign-in options', src: '' },
      { device: 'mobile', caption: 'OTP verification screen', src: '' },
      { device: 'mobile', caption: 'Onboarding: choosing a path (seeker / provider / founder)', src: '' },
      { device: 'mobile', caption: 'Onboarding: resume upload step', src: '' },
      { device: 'mobile', caption: 'Discovery feed with AI-matched profiles', src: '' },
      { device: 'mobile', caption: 'Social feed with post and event cards', src: '' },
      { device: 'mobile', caption: 'Gamification: points, achievements, and star ledger', src: '' },
      { device: 'mobile', caption: 'Dark mode (same screen as a light-mode shot above)', src: '' },
    ],
  },
  {
    id: 'osce-dental-training',
    title: 'DentalAI — OSCE Virtual Patient Training Platform',
    description:
      'An AI virtual patient that dental students practice clinical exams with, used at Kaohsiung Medical University and Chung Shan Medical University.',
    tags: ['React', 'TypeScript', 'NestJS', 'FastAPI', 'PostgreSQL', 'Auth0', 'LLM/AI', 'Tailwind CSS'],
    role: 'UI/UX Designer / Full-Stack Engineer',
    teamSize: '2',
    teamOrg: 'Kaohsiung Medical University (Client Project)',
    details:
      'DentalAI is a virtual standardized-patient platform built with Kaohsiung Medical University for OSCE training. I designed the product and built it across the stack.',
    overview: [
      'Dental students prepare for OSCE clinical exams by practicing with trained actors playing patients while examiners grade them by hand. That is expensive and hard to schedule, so students get only a few chances to practice. DentalAI, built with Kaohsiung Medical University, gives them a virtual patient they can practice with anytime.',
      'A student reads the case, interviews an LLM-driven patient through chat, and answers a few follow-up questions. They then get a report that scores them on EPA levels and ACGME core competencies, points to the moments in the conversation behind each score, and suggests what to work on next. Teachers write cases, assign them to classes as exams or practice, and follow how everyone is doing.',
    ],
    whatIDid: [
      'I designed the product and built it across the stack. Admins, teachers, and students each come to the platform for something different, so I designed a separate workspace for each, all built on one shared sidebar layout. Task cards show a task\'s mode, class, dates, and progress at a glance, and clear status labels (not yet open, overdue, continue, retry) keep students from getting lost.',
      'As one of two engineers, working alongside an AI engineer, I owned the full stack: the React + TypeScript app and the NestJS backend. On the frontend, role-based routing and Auth0 send each person to their own workspace. Teachers get case management, task assignment with time windows and attempt limits, and progress tracking. Students get the full training flow: intro, patient chat, multiple-choice questions, then the scoring report.',
      'The heart of it is the real-time chat with the virtual patient. I built the chat experience and the NestJS layer behind it, which saves the conversation as it happens and passes the checkpoints and common mistakes a student triggered to the Azure OpenAI scoring workflow.',
      'An exam can\'t be allowed to fail halfway, so much of my backend work went into making it dependable. Each training session runs on a server-side state machine that blocks duplicate attempts, checks that a session belongs to the student opening it, lets students resume, and retries scoring when it fails. When a teacher edits a case, the change doesn\'t reach tasks that were already assigned, because each task keeps its own snapshot of the case.',
      'Scores only help if people can act on them, so I built the charts that show them. Teachers get class statistics: the spread of EPA levels, a score histogram, an ACGME radar chart, and a ranking of common mistakes, with CSV and PDF export. Students get a scoring report with a weighted breakdown of their multiple-choice answers and growth-trend charts across attempts.',
      'The platform is used by dental students at Kaohsiung Medical University and Chung Shan Medical University.',
    ],
    demoImages: [],
    // demoImages: ['/images/projects/osce-dental-training-1.png', '/images/projects/osce-dental-training-2.png', '/images/projects/osce-dental-training-3.png'],
    screenshots: [
      { device: 'desktop', caption: 'Student: task list with exam / practice filters and open or overdue states', src: '' },
      { device: 'desktop', caption: 'Student: case intro with patient summary, training steps, and scoring rubric', src: '' },
      { device: 'desktop', caption: 'Student: live chat with the AI virtual patient', src: '' },
      { device: 'desktop', caption: 'Scoring report: score, AI feedback, and per-item evidence', src: '' },
      { device: 'desktop', caption: 'Scoring report: EPA expected vs. actual levels and ACGME radar chart', src: '' },
      { device: 'desktop', caption: 'Student: growth trend across attempts', src: '' },
      { device: 'desktop', caption: 'Teacher: case management list', src: '' },
      { device: 'desktop', caption: 'Teacher: assigning a task (case, class, mode, time limit, schedule)', src: '' },
      { device: 'desktop', caption: 'Teacher: task detail with completion, class average, and student status', src: '' },
      { device: 'desktop', caption: 'Teacher: class statistics (EPA distribution, score histogram, ACGME radar)', src: '' },
    ],
  },
  {
    id: 'ar-productivity',
    title: 'Unity-Based AR Productivity Mobile App',
    description:
      'A to-do list brought into augmented reality, with 3D characters that live in your space.',
    tags: ['Unity', 'C#', 'TextMeshPro', 'Spline', 'Augmented Reality'],
    role: 'Developer',
    teamSize: '2',
    teamOrg: 'Academic Team',
    details:
      'Designed interactive 3D character behaviors and integrated AR overlays for real-world task management.',
    overview: [
      'A productivity app built in Unity that brings task management into augmented reality. Instead of a flat to-do list, interactive 3D characters appear in the user\'s real surroundings and react as they work through their tasks.',
    ],
    whatIDid: [
      'I designed the 3D characters\' interactive behaviors and built the AR overlays that tie tasks to the real world.',
    ],
    demoImages: [],
    demoVideos: [
      'https://youtube.com/shorts/mz9vBb8zeJ8?feature=share',
    ],
    screenshots: [
      { device: 'mobile', caption: 'AR view: 3D character placed in a real environment', src: '' },
      { device: 'mobile', caption: 'Creating and managing tasks', src: '' },
      { device: 'mobile', caption: 'Character reacting when a task is completed', src: '' },
    ],
  },
  // {
  //   id: 'dog-adoption',
  //   title: 'Dog Adoption Web App',
  //   description:
  //     'A responsive dog adoption website that allows users to browse dogs, filter by breed and location, and save favorites.',
  //   tags: ['React', 'JavaScript', 'Next.js', 'HTML', 'CSS'],
  //   role: 'Frontend Developer',
  //   teamSize: '1',
  //   teamOrg: 'Personal / Academic',
  //   details:
  //     'Implemented pagination, search, and location APIs. Built responsive UI components with Next.js and deployed on Vercel.',
  //   githubUrl: 'https://github.com/iamy8000/Fetch_dog_adoption_Yating_Yang',
  //   demoImages: ['/images/projects/dog-adoption-1.png', '/images/projects/dog-adoption-2.png', '/images/projects/dog-adoption-3.png'],
  // },
  // {
  //   id: 'career-services-db',
  //   title: 'Career Services BI Database',
  //   description:
  //     'Designed and built a relational database from the ground up for the Office of Career Services, transitioning from Excel to MySQL.',
  //   tags: ['MySQL', 'ER Modeling', 'Normalization', 'Database Design'],
  //   role: 'Database Designer',
  //   teamSize: '3',
  //   teamOrg: 'University of Maryland',
  //   details:
  //     'Created ER diagrams, normalized schemas to 3NF, wrote complex queries for reporting, and migrated legacy Excel data.',
  //   demoImages: [],
  //   // demoImages: ['/images/projects/career-services-db-1.jpg', '/images/projects/career-services-db-2.jpg', '/images/projects/career-services-db-3.jpg'],
  // },
  // {
  //   id: 'umd-marketplace',
  //   title: 'UMD Virtual Marketplace Web App',
  //   description:
  //     'A responsive web application for UMD students to buy and sell furniture, improving student life through peer-to-peer commerce.',
  //   tags: ['React', 'Flask', 'MySQL', 'JavaScript', 'Figma', 'RESTful APIs'],
  //   role: 'Full-Stack Developer',
  //   teamSize: '4',
  //   teamOrg: 'Academic Team',
  //   details:
  //     'Built the React frontend and Flask API backend. Designed the MySQL schema and implemented RESTful endpoints for CRUD operations.',
  //   // githubUrl: 'https://github.com/yourname/umd-marketplace',
  //   demoImages: [],
  //   // demoImages: ['/images/projects/umd-marketplace-1.jpg', '/images/projects/umd-marketplace-2.jpg'],
  // },
  // {
  //   id: 'aws-healthcare',
  //   title: 'AWS Healthcare Infrastructure Design',
  //   description:
  //     'Designed a secure, HIPAA-compliant infrastructure for healthcare systems using AWS, with a focus on zero-trust principles.',
  //   tags: ['AWS', 'IAM', 'VPC Peering', 'AWS WAF', 'Amazon RDS'],
  //   role: 'Cloud Architect',
  //   teamSize: '3',
  //   teamOrg: 'Academic Team',
  //   details:
  //     'Architected VPC peering, IAM policies, WAF rules, and RDS configurations following HIPAA security guidelines.',

  //   demoImages: [],
  //   // demoImages: ['/images/projects/aws-healthcare-1.jpg', '/images/projects/aws-healthcare-2.jpg', '/images/projects/aws-healthcare-3.jpg'],
  // },
  // {
  //   id: 'nutrition-tracker',
  //   title: 'AI-Powered Nutrition Tracker',
  //   description:
  //     'An Android app to track dietary intake with ML capabilities, enabling users to identify food and calculate nutrition.',
  //   tags: ['Kotlin', 'Firebase ML Kit', 'Android Studio', 'Google Cloud'],
  //   role: 'Android Developer',
  //   teamSize: '3',
  //   teamOrg: 'Academic Team',
  //   details:
  //     'Integrated Firebase ML Kit for food recognition, built the tracking UI in Kotlin, and connected Google Cloud for data storage.',
  //   // githubUrl: 'https://github.com/yourname/nutrition-tracker',
  //   demoImages: [],
  //   // demoImages: ['/images/projects/nutrition-tracker-1.jpg', '/images/projects/nutrition-tracker-2.jpg'],
  // },
]
