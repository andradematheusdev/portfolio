import { AboutMe } from './../pages/Home/sections/AboutMe/index';
interface ITranslation {
  [key: string]: {
    wellcomeSection: {
      helloWorld: string;
      frontEnd: string;
      about: string;
    };
    aboutMeSection: {
      hello: string;
      developerWith: string;
    };
    skillsSection: {
      one: string;
      two: string;
      three: string;
      four: string;
      five: string;
    };
    sectionsTitle: {
      aboutMe: string;
      knowledge: string;
      projects: string;
      challenges: string;
      contact: string;
    };
    navigation: {
      home: string;
      about: string;
      knowledge: string;
      projects: string;
      contact: string;
    };
  }
}

export const translation: ITranslation = {
  "pt_br": {
    wellcomeSection: {
      helloWorld: "Olá Mundo, me chamo Matheus Andrade!",
      frontEnd: "Desenvolvedor Front-End focado em JavaScript",
      about: "Tenho 27 anos, sou apaixonado por tecnologia, estudo programação por conta própria a mais de 1 ano e tenho muita facilidade para aprender coisas novas!",
    },
    aboutMeSection: {
      hello: "Olá, eu sou o",
      developerWith: "Desenvolvedor front-end com"
    },
    skillsSection: {
      one: "Iniciante",
      two: "Básico",
      three: "Intermediário",
      four: "Bom",
      five: "Proficiente"
    },
    sectionsTitle: {
      aboutMe: "SOBRE MIM",
      knowledge: "CONHECIMENTOS",
      projects: "PROJETOS DE ESTUDO",
      challenges: "DESAFIOS DAS COMUNIDADES",
      contact: "CONTATO"
    },
    navigation: {
      home: "Início",
      about: "Sobre",
      knowledge: "Conhecimentos",
      projects: "Projetos",
      contact: "Contato"
    }
  },
  "en": {
    wellcomeSection: {
      helloWorld: "Hello World, I am Matheus Andrade!",
      frontEnd: "Front-End Developer focused on JavaScript",
      about: "I'm 27 years old, passionate about technology, I've been studying programming on my own for over a year and it is very easy for me to learn new things!",
    },
    aboutMeSection: {
      hello: "Hello, I am",
      developerWith: "Front-end developer with"
    },
    skillsSection: {
      one: "Beginner",
      two: "Basic",
      three: "Intermediary",
      four: "Good",
      five: "Proficient"
    },
    sectionsTitle: {
      aboutMe: "ABOUT ME",
      knowledge: "MY SKILLS",
      projects: "STUDY PROJECTS",
      challenges: "COMMUNITIES CHALLENGES",
      contact: "CONTACT"
    },
    navigation: {
      home: "Home",
      about: "About",
      knowledge: "Skills",
      projects: "Projects",
      contact: "Contact"
    }
  },
};
