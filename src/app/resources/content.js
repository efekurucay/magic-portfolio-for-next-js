import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Yahya Efe",
  lastName: "Kuruçay",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Powered Software Developer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/efekurucay",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/efekurucay24",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contact@efekurucay.com",
  },

];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Yahya Efe Kuruçay</>,
  subline: (
    <>
     <br />
    
      I am a fourth-year Computer Engineering student at Akdeniz 
University, with a comprehensive knowledge base and a 
    continual focus on enhancing my skills in <InlineCode>software 
    development</InlineCode>. I have a deep understanding of <InlineCode>object
    oriented programming principles </InlineCode>and have been actively 
    developing projects in this field since my freshman year.
      
      
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a fourth-year Computer Engineering student at Akdeniz University, with a comprehensive knowledge base and a 
        continual focus on enhancing my skills in software development. I have a deep understanding of object-oriented 
        programming principles and have been actively developing projects in this field since my freshman year.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "CSART R&D",
        timeframe: "04/2024 - 11/2024",
        role: "Software Developer",
        achievements: [
          <>
            Working part-time as a software developer, combining studies with practical experience.
          </>,
          <>
            Applying and enhancing software development skills on real projects, collaborating with the team to achieve successful outcomes.
          </>,
        ],
        images: [],
      },
      {
        company: "Mavi İleri Bilişim",
        timeframe: "07/2023 - 08/2023",
        role: "Mobile Application Development Intern",
        achievements: [
          <>
            Completed internship in mobile application development at Mavi İleri Bilişim within Akdeniz University Teknokent.
          </>,
          <>
            Enhanced teamwork, problem-solving, and other key skills during this first internship.
          </>,
        ],
        images: [],
      },
    ],

    
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Akdeniz University",
        description: <>Computer Science & Engineering (English) | 09/2020 - present | 4th Grade - 3.54 GPA</>,
      },
      {
        name: "T.E.B Ataşehir Anatolian High School",
        description: <>09/2015 - 07/2019 | Istanbul, Türkiye</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages & Frameworks",
        description: <>C#, .NET, Java, Swift, Flutter, Kotlin</>,
        images: [],
      },
      {
        title: "Database & Backend",
        description: <>MySQL, Firebase</>,
        images: [],
      },
      {
        title: "Soft Skills",
        description: <>Taking Initiative And Responsibility, Good Communication Skills, Good command of English in both spoken and writing</>,
        images: [],
      },
    ],
  },

  organizations: {
    display: true, // set to false to hide this section
    title: "Organizations",
    experiences: [
      {
        company: "BİLMÖK",
        timeframe: "04/2024 - 11/2024",
        role: "Software Developer",
        achievements: [
          <>
            Working part-time as a software developer, combining studies with practical experience.
          </>,
          <>
            Applying and enhancing software development skills on real projects, collaborating with the team to achieve successful outcomes.
          </>,
        ],
        images: [],
      },
      {
        company: "Mavi İleri Bilişim",
        timeframe: "07/2023 - 08/2023",
        role: "Mobile Application Development Intern",
        achievements: [
          <>
            Completed internship in mobile application development at Mavi İleri Bilişim within Akdeniz University Teknokent.
          </>,
          <>
            Enhanced teamwork, problem-solving, and other key skills during this first internship.
          </>,
        ],
        images: [],
      },
    ],

    
  },
  certifications: { 
    display: true, // set to false to hide this section
    title: "Certifications",
    items: [
      {
        name: "AWS Cloud Essentials",
        role: "Certified",
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
 
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

const chat = {
  label: "AI Chat",
};

const contact = {
  label: "Contact",
  title: "Get in touch",
  description: "Have a question or a project in mind? Let's talk.",
};

export { person, social, newsletter, home, about, blog, work, gallery, chat, contact };
