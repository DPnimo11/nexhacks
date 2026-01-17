import { Candidate } from '@/types'

export const mockCandidates: Omit<Candidate, 'jobId'>[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    rawResume: `Sarah Chen
Senior Full-Stack Developer

EXPERIENCE
TechStartup Inc. (Series A) | Senior Engineer | 2021-Present
- Led migration from monolith to microservices, reducing deployment time by 70%
- Built real-time collaboration features serving 50K+ daily active users
- Mentored team of 4 junior developers

WebAgency Co. | Full-Stack Developer | 2019-2021
- Delivered 15+ client projects using React, Node.js, and PostgreSQL
- Implemented CI/CD pipelines reducing release cycles from weekly to daily

EDUCATION
BS Computer Science, UC Berkeley, 2019

SKILLS
TypeScript, React, Node.js, PostgreSQL, AWS, Docker, Kubernetes`,
    skills: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
    yearsOfExperience: 5,
    projects: [
      {
        name: 'Real-time Collaboration Platform',
        description: 'Built real-time collaboration features serving 50K+ DAU',
        technologies: ['React', 'WebSockets', 'Redis']
      }
    ],
    education: [
      {
        institution: 'UC Berkeley',
        degree: 'BS',
        field: 'Computer Science',
        year: 2019
      }
    ],
    workHistory: [
      {
        company: 'TechStartup Inc.',
        role: 'Senior Engineer',
        duration: '2021-Present',
        highlights: ['Led microservices migration', 'Mentored 4 junior devs'],
        isStartup: true
      },
      {
        company: 'WebAgency Co.',
        role: 'Full-Stack Developer',
        duration: '2019-2021',
        highlights: ['Delivered 15+ client projects', 'Implemented CI/CD'],
        isStartup: false
      }
    ],
    topStrengths: [
      'Strong startup experience with hands-on microservices migration',
      'Proven track record scaling systems to 50K+ users',
      'Leadership experience mentoring junior developers'
    ],
    standoutProject: 'Led microservices migration at TechStartup Inc., reducing deployment time by 70% while maintaining 99.9% uptime',
    aiSummary: 'Strong fit for senior full-stack roles due to startup experience and proven ability to scale systems. Has both technical depth and leadership skills.',
    status: 'pending'
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    email: 'marcus.j@email.com',
    rawResume: `Marcus Johnson
Frontend Engineer

EXPERIENCE
BigCorp Technologies | Frontend Developer | 2022-Present
- Developed responsive web applications using React and TypeScript
- Improved Core Web Vitals scores by 40% across main product
- Collaborated with design team on component library

EDUCATION
Bootcamp Graduate, App Academy, 2022
BA Economics, State University, 2020

SKILLS
JavaScript, TypeScript, React, CSS, Tailwind, Figma`,
    skills: ['JavaScript', 'TypeScript', 'React', 'CSS', 'Tailwind', 'Figma'],
    yearsOfExperience: 2,
    projects: [
      {
        name: 'Component Library',
        description: 'Built shared component library used across 3 product teams',
        technologies: ['React', 'TypeScript', 'Storybook']
      }
    ],
    education: [
      {
        institution: 'App Academy',
        degree: 'Certificate',
        field: 'Full-Stack Development',
        year: 2022
      },
      {
        institution: 'State University',
        degree: 'BA',
        field: 'Economics',
        year: 2020
      }
    ],
    workHistory: [
      {
        company: 'BigCorp Technologies',
        role: 'Frontend Developer',
        duration: '2022-Present',
        highlights: ['Improved Core Web Vitals by 40%', 'Built component library'],
        isStartup: false
      }
    ],
    topStrengths: [
      'Strong frontend fundamentals with performance optimization focus',
      'Design collaboration experience',
      'Quick learner - career changer with rapid progression'
    ],
    standoutProject: 'Improved Core Web Vitals scores by 40% across main product, directly impacting SEO rankings',
    aiSummary: 'Promising junior-mid level frontend candidate with strong performance optimization skills. Limited startup experience but shows quick learning ability.',
    status: 'pending'
  },
  {
    id: '3',
    name: 'Priya Patel',
    email: 'priya.patel@email.com',
    rawResume: `Priya Patel
Backend Engineer

EXPERIENCE
ScaleUp Ventures (Seed Stage) | Founding Engineer | 2023-Present
- Built entire backend infrastructure from scratch using Go and PostgreSQL
- Designed event-driven architecture handling 1M+ events/day
- Implemented authentication, payments, and analytics systems

DataFlow Systems | Software Engineer | 2020-2023
- Developed high-throughput data pipelines processing 10TB+ daily
- Optimized query performance reducing P99 latency by 60%

EDUCATION
MS Computer Science, Stanford University, 2020
BS Computer Science, IIT Delhi, 2018

SKILLS
Go, Python, PostgreSQL, Redis, Kafka, AWS, Terraform`,
    skills: ['Go', 'Python', 'PostgreSQL', 'Redis', 'Kafka', 'AWS', 'Terraform'],
    yearsOfExperience: 4,
    projects: [
      {
        name: 'Event-Driven Platform',
        description: 'Designed and built event-driven architecture handling 1M+ events/day',
        technologies: ['Go', 'Kafka', 'PostgreSQL']
      }
    ],
    education: [
      {
        institution: 'Stanford University',
        degree: 'MS',
        field: 'Computer Science',
        year: 2020
      },
      {
        institution: 'IIT Delhi',
        degree: 'BS',
        field: 'Computer Science',
        year: 2018
      }
    ],
    workHistory: [
      {
        company: 'ScaleUp Ventures',
        role: 'Founding Engineer',
        duration: '2023-Present',
        highlights: ['Built backend from scratch', 'Designed event architecture'],
        isStartup: true
      },
      {
        company: 'DataFlow Systems',
        role: 'Software Engineer',
        duration: '2020-2023',
        highlights: ['Built data pipelines for 10TB+ daily', 'Reduced P99 latency by 60%'],
        isStartup: false
      }
    ],
    topStrengths: [
      'Founding engineer experience - built systems from zero',
      'Strong systems design with event-driven architecture expertise',
      'Elite education background (Stanford + IIT)'
    ],
    standoutProject: 'As founding engineer, built entire backend infrastructure from scratch at ScaleUp Ventures, now handling 1M+ events/day',
    aiSummary: 'Exceptional backend candidate with rare founding engineer experience. Highly technical with proven ability to build scalable systems independently.',
    status: 'pending'
  },
  {
    id: '4',
    name: 'Alex Rivera',
    email: 'alex.r@email.com',
    rawResume: `Alex Rivera
Full-Stack Developer

EXPERIENCE
Freelance Developer | 2021-Present
- Built custom web applications for 20+ small business clients
- Specialized in e-commerce solutions using Shopify and custom builds

Coffee Shop | Barista | 2019-2021
- Part-time while learning to code

EDUCATION
Self-taught developer
Online courses: freeCodeCamp, Udemy, YouTube

SKILLS
JavaScript, React, Next.js, Node.js, MongoDB, Shopify`,
    skills: ['JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Shopify'],
    yearsOfExperience: 3,
    projects: [
      {
        name: 'E-commerce Platform',
        description: 'Built custom e-commerce solutions for 20+ small businesses',
        technologies: ['Next.js', 'Stripe', 'MongoDB']
      }
    ],
    education: [],
    workHistory: [
      {
        company: 'Freelance',
        role: 'Full-Stack Developer',
        duration: '2021-Present',
        highlights: ['20+ client projects', 'E-commerce specialization'],
        isStartup: false
      }
    ],
    topStrengths: [
      'Self-starter with proven freelance track record',
      'End-to-end project delivery experience',
      'E-commerce and small business domain expertise'
    ],
    standoutProject: 'Built and delivered 20+ custom web applications for small business clients, handling everything from requirements to deployment',
    aiSummary: 'Scrappy self-taught developer with strong freelance portfolio. Entrepreneurial mindset fits startup culture, but may need mentorship on engineering best practices.',
    status: 'pending'
  },
  {
    id: '5',
    name: 'Emily Watson',
    email: 'emily.watson@email.com',
    rawResume: `Emily Watson
Senior Software Engineer

EXPERIENCE
Google | Senior Software Engineer | 2018-Present
- Tech lead for 8-person team on Google Cloud Platform
- Designed distributed systems serving billions of requests
- 3 promotions in 5 years, consistently exceeds expectations

Microsoft | Software Engineer | 2015-2018
- Worked on Azure infrastructure team
- Contributed to open-source .NET projects

EDUCATION
MS Computer Science, MIT, 2015
BS Computer Science, Carnegie Mellon, 2013

SKILLS
Java, Python, C++, Kubernetes, GCP, Distributed Systems`,
    skills: ['Java', 'Python', 'C++', 'Kubernetes', 'GCP', 'Distributed Systems'],
    yearsOfExperience: 9,
    projects: [
      {
        name: 'GCP Infrastructure',
        description: 'Tech lead for distributed systems serving billions of requests',
        technologies: ['Java', 'Kubernetes', 'GCP']
      }
    ],
    education: [
      {
        institution: 'MIT',
        degree: 'MS',
        field: 'Computer Science',
        year: 2015
      },
      {
        institution: 'Carnegie Mellon',
        degree: 'BS',
        field: 'Computer Science',
        year: 2013
      }
    ],
    workHistory: [
      {
        company: 'Google',
        role: 'Senior Software Engineer',
        duration: '2018-Present',
        highlights: ['Tech lead for 8-person team', '3 promotions in 5 years'],
        isStartup: false
      },
      {
        company: 'Microsoft',
        role: 'Software Engineer',
        duration: '2015-2018',
        highlights: ['Azure infrastructure', 'Open-source contributions'],
        isStartup: false
      }
    ],
    topStrengths: [
      'World-class engineering pedigree (Google, Microsoft, MIT)',
      'Proven leadership as tech lead',
      'Deep distributed systems expertise'
    ],
    standoutProject: 'Tech lead for GCP team serving billions of requests, with 3 promotions in 5 years at Google',
    aiSummary: 'Elite engineer from top companies. Strong technical and leadership skills, but no startup experience - may need to adapt to less structured environment.',
    status: 'pending'
  },
  {
    id: '6',
    name: 'Jordan Kim',
    email: 'jordan.kim@email.com',
    rawResume: `Jordan Kim
Mobile & Full-Stack Developer

EXPERIENCE
RocketShip (YC W22) | Senior Engineer | 2022-Present
- Employee #3, built iOS and Android apps from scratch
- Grew to 100K+ downloads, 4.8 star rating
- Wear many hats: mobile, backend, devops, customer support

NativeApps Studio | Mobile Developer | 2019-2022
- Built React Native apps for Fortune 500 clients
- Led team of 3 on healthcare app project

EDUCATION
BS Computer Science, UCLA, 2019

SKILLS
React Native, Swift, Kotlin, TypeScript, Node.js, Firebase, AWS`,
    skills: ['React Native', 'Swift', 'Kotlin', 'TypeScript', 'Node.js', 'Firebase', 'AWS'],
    yearsOfExperience: 5,
    projects: [
      {
        name: 'RocketShip Mobile Apps',
        description: 'Built iOS and Android apps from scratch, grew to 100K+ downloads',
        technologies: ['React Native', 'Firebase', 'Node.js']
      }
    ],
    education: [
      {
        institution: 'UCLA',
        degree: 'BS',
        field: 'Computer Science',
        year: 2019
      }
    ],
    workHistory: [
      {
        company: 'RocketShip (YC W22)',
        role: 'Senior Engineer',
        duration: '2022-Present',
        highlights: ['Employee #3', '100K+ app downloads', 'Multi-hat role'],
        isStartup: true
      },
      {
        company: 'NativeApps Studio',
        role: 'Mobile Developer',
        duration: '2019-2022',
        highlights: ['Fortune 500 clients', 'Led team of 3'],
        isStartup: false
      }
    ],
    topStrengths: [
      'Early-stage startup experience as employee #3 at YC company',
      'Full mobile development expertise (iOS, Android, React Native)',
      'Proven ability to wear multiple hats'
    ],
    standoutProject: 'As employee #3 at YC-backed startup, built mobile apps from scratch to 100K+ downloads with 4.8 star rating',
    aiSummary: 'Ideal startup candidate with early-stage YC experience. Versatile engineer who thrives in ambiguous environments. Strong mobile expertise.',
    status: 'pending'
  },
  {
    id: '7',
    name: 'David Thompson',
    email: 'david.t@email.com',
    rawResume: `David Thompson
Junior Developer

EXPERIENCE
Intern at Local Agency | Summer 2023
- Built landing pages using WordPress
- Learned basics of HTML/CSS/JavaScript

EDUCATION
BS Computer Science, State College, 2024 (Expected)
GPA: 2.8

SKILLS
HTML, CSS, JavaScript basics, WordPress`,
    skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    yearsOfExperience: 0,
    projects: [],
    education: [
      {
        institution: 'State College',
        degree: 'BS',
        field: 'Computer Science',
        year: 2024
      }
    ],
    workHistory: [
      {
        company: 'Local Agency',
        role: 'Intern',
        duration: 'Summer 2023',
        highlights: ['Built landing pages'],
        isStartup: false
      }
    ],
    topStrengths: [
      'Fresh perspective and eagerness to learn',
      'Basic web development foundation'
    ],
    standoutProject: 'Built landing pages during internship at local agency',
    aiSummary: 'Entry-level candidate with minimal experience. May need significant mentorship and training. Better suited for structured junior programs.',
    status: 'pending'
  },
  {
    id: '8',
    name: 'Nina Kowalski',
    email: 'nina.k@email.com',
    rawResume: `Nina Kowalski
DevOps & Platform Engineer

EXPERIENCE
FastGrowth Startup | Platform Lead | 2021-Present
- Built platform team from scratch, hired 4 engineers
- Reduced cloud costs by 45% through optimization
- Achieved 99.99% uptime SLA

CloudFirst Inc. | DevOps Engineer | 2018-2021
- Managed Kubernetes clusters for 50+ microservices
- Implemented GitOps workflows with ArgoCD

EDUCATION
BS Information Systems, University of Michigan, 2018

SKILLS
Kubernetes, Terraform, AWS, GCP, Python, Go, Prometheus, GitOps`,
    skills: ['Kubernetes', 'Terraform', 'AWS', 'GCP', 'Python', 'Go', 'Prometheus', 'GitOps'],
    yearsOfExperience: 6,
    projects: [
      {
        name: 'Platform Engineering',
        description: 'Built platform team and infrastructure, achieving 99.99% uptime',
        technologies: ['Kubernetes', 'Terraform', 'AWS']
      }
    ],
    education: [
      {
        institution: 'University of Michigan',
        degree: 'BS',
        field: 'Information Systems',
        year: 2018
      }
    ],
    workHistory: [
      {
        company: 'FastGrowth Startup',
        role: 'Platform Lead',
        duration: '2021-Present',
        highlights: ['Built platform team', 'Reduced costs 45%', '99.99% uptime'],
        isStartup: true
      },
      {
        company: 'CloudFirst Inc.',
        role: 'DevOps Engineer',
        duration: '2018-2021',
        highlights: ['Managed K8s for 50+ services', 'Implemented GitOps'],
        isStartup: false
      }
    ],
    topStrengths: [
      'Startup platform leadership experience',
      'Proven cost optimization skills (45% reduction)',
      'Strong reliability track record (99.99% uptime)'
    ],
    standoutProject: 'Built platform team from scratch at FastGrowth Startup, reducing cloud costs by 45% while achieving 99.99% uptime',
    aiSummary: 'Strong platform/DevOps candidate with startup experience. Rare combination of technical depth and team leadership. Cost-conscious mindset valuable for startups.',
    status: 'pending'
  }
]

export function getCandidatesForJob(jobId: string): Candidate[] {
  return mockCandidates.map(c => ({
    ...c,
    jobId
  }))
}
