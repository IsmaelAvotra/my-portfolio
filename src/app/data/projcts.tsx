import { StaticImageData } from 'next/image'

import project1 from '@/../public/project11.png'
import project2 from '@/../public/project22.png'
import project3 from '@/../public/project33.png'
import project4 from '@/../public/project44.png'
import project5 from '@/../public/project55.png'

interface Project {
  imageUrl: StaticImageData
  title: string
  description: string
  projectLink: string
  githubLink: string
}

export const projects: Project[] = [
  {
    imageUrl: project1,
    title: 'Space Tourism',
    description:
      'I undertook this website as a challenge from Frontend Mentor, utilizing React to enhance my integration skills. Working on Frontend Mentor challenges has been a rewarding experience, as it has enabled me to sharpen my abilities and stay abreast of the latest web development trends. It serves as an excellent platform for practice, allowing me to refine my skills while staying updated with industry advancements.',
    projectLink: 'https://space-tourism-ismaelavotra.vercel.app/',
    githubLink: 'https://github.com/IsmaelAvotra/space-tourism',
  },
  {
    imageUrl: project2,
    title: 'New Home',
    description:
      'This website caters to users seeking to buy or rent properties, offering a comprehensive platform for browsing property listings. It showcases detailed information, including descriptions, photographs, and pricing, enabling users to make informed decisions. With intuitive search functionality, users can effortlessly explore properties based on their specific preferences, ensuring they find their ideal home.',
    projectLink: 'https://real-estate-app-six-gold.vercel.app/',
    githubLink: 'https://github.com/IsmaelAvotra/real-estate-app',
  },
  {
    imageUrl: project3,
    title: 'Find Anime',
    description:
      "This website is constructed with React and leverages the Jikan API to offer users access to top anime listings and daily recommendations. Additionally, it includes an 'about' page, and users have the ability to search for any anime and view its comprehensive details. I personally designed the website, ensuring its responsiveness across various devices for an optimal user experience.",
    projectLink: 'https://animesearch-app.vercel.app/',
    githubLink: 'https://github.com/IsmaelAvotra/animesearch-app',
  },
  {
    imageUrl: project4,
    title: 'Gymm Me',
    description:
      'This website is an integration of a design I came across on Dribbble. To bring the design to life, I employed React JS and utilized Swiper JS, a library for implementing the slider functionality. The main objective of creating this landing page was to hone my integration skills by utilizing pure CSS and leveraging the syntax of React.',
    projectLink: 'https://gymm-me.netlify.app/',
    githubLink: 'https://github.com/IsmaelAvotra/gym-me',
  },
  {
    imageUrl: project5,
    title: 'Grandioses App Mobile',
    description:
      'This is a mobile project developed with Flutter during my internship. It is the mobile version of a web application called "Grandioses", which allows users to discover and book tickets for themed events. There were three of us working on this project, and I learned a lot about Flutter and mobile development through this experience.',
    projectLink:
      'https://play.google.com/store/apps/details?id=com.grandioses.app&hl=fr&gl=US',
    githubLink: 'https://github.com/IsmaelAvotra',
  },
]
