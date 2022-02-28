import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eduard von Briesen', // e.g: 'Name | Developer'
  lang: 'em, de', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'e.v.briesen@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/eduard-von-briesen-5b750b1b5/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/EduardvonBriesen',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/eduardvonbriesen/',
    },
  ],
};
