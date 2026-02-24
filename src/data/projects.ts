export interface ProjectData {
  id: string
  title: string
  description: string
  tags: string[]
  role: string
  teamSize: string
  teamOrg: string
  details: string
}

export const projects: ProjectData[] = [
  {
    id: 'dog-adoption',
    title: 'Dog Adoption Web App',
    description:
      'A responsive dog adoption website that allows users to browse dogs, filter by breed and location, and save favorites.',
    tags: ['React', 'JavaScript', 'Next.js', 'HTML', 'CSS'],
    role: 'Frontend Developer',
    teamSize: '3',
    teamOrg: 'Personal / Academic',
    details:
      'Implemented pagination, search, and location APIs. Built responsive UI components with Next.js and deployed on Vercel.',
  },
  {
    id: 'ar-productivity',
    title: 'Unity-Based AR Productivity Mobile App',
    description:
      'An immersive productivity mobile application built with Unity, blending interactive 3D characters with real-world context.',
    tags: ['Unity', 'C#', 'TextMeshPro', 'Spline', 'Augmented Reality'],
    role: 'Developer',
    teamSize: '4',
    teamOrg: 'Academic Team',
    details:
      'Designed interactive 3D character behaviors and integrated AR overlays for real-world task management.',
  },
  {
    id: 'career-services-db',
    title: 'Career Services BI Database',
    description:
      'Designed and built a relational database from the ground up for the Office of Career Services, transitioning from Excel to MySQL.',
    tags: ['MySQL', 'ER Modeling', 'Normalization', 'Database Design'],
    role: 'Database Designer',
    teamSize: '2',
    teamOrg: 'University of Maryland',
    details:
      'Created ER diagrams, normalized schemas to 3NF, wrote complex queries for reporting, and migrated legacy Excel data.',
  },
  {
    id: 'umd-marketplace',
    title: 'UMD Virtual Marketplace Web App',
    description:
      'A responsive web application for UMD students to buy and sell furniture, improving student life through peer-to-peer commerce.',
    tags: ['React', 'Flask', 'MySQL', 'JavaScript', 'Figma', 'RESTful APIs'],
    role: 'Full-Stack Developer',
    teamSize: '4',
    teamOrg: 'Academic Team',
    details:
      'Built the React frontend and Flask API backend. Designed the MySQL schema and implemented RESTful endpoints for CRUD operations.',
  },
  {
    id: 'aws-healthcare',
    title: 'AWS Healthcare Infrastructure Design',
    description:
      'Designed a secure, HIPAA-compliant infrastructure for healthcare systems using AWS, with a focus on zero-trust principles.',
    tags: ['AWS', 'IAM', 'VPC Peering', 'AWS WAF', 'Amazon RDS'],
    role: 'Cloud Architect',
    teamSize: '3',
    teamOrg: 'Academic Team',
    details:
      'Architected VPC peering, IAM policies, WAF rules, and RDS configurations following HIPAA security guidelines.',
  },
  {
    id: 'nutrition-tracker',
    title: 'AI-Powered Nutrition Tracker',
    description:
      'An Android app to track dietary intake with ML capabilities, enabling users to identify food and calculate nutrition.',
    tags: ['Kotlin', 'Firebase ML Kit', 'Android Studio', 'Google Cloud'],
    role: 'Android Developer',
    teamSize: '3',
    teamOrg: 'Academic Team',
    details:
      'Integrated Firebase ML Kit for food recognition, built the tracking UI in Kotlin, and connected Google Cloud for data storage.',
  },
]
