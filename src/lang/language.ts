interface ITranslation {
  [key: string]: {
    wellcomeSection: {
      helloWorld: string;
      frontEnd: string;
      about: string;
    };
    sectionsTitle: {
      aboutMe: string;
      knowledge: string;
      projects: string;
      challenges: string;
      contact: string;
    }
  }
}

export const translation: ITranslation = {
  "pt_br": {
    wellcomeSection: {
      helloWorld: "Olá Mundo, me chamo Matheus Andrade!",
      frontEnd: "Desenvolvedor Front-End focado em JavaScript",
      about: "Tenho 27 anos, sou apaixonado por tecnologia, estudo programação por conta própria a mais de 1 ano e tenho muita facilidade para aprender coisas novas!",
    },
    sectionsTitle: {
      aboutMe: "SOBRE MIM",
      knowledge: "CONHECIMENTOS",
      projects: "PROJETOS DE ESTUDO",
      challenges: "DESAFIOS DAS COMUNIDADES",
      contact: "CONTATO"
    }
  },
  "en": {
    wellcomeSection: {
      helloWorld: "Hello World, I am Matheus Andrade!",
      frontEnd: "Front-End Developer focused on JavaScript",
      about: "I'm 27 years old, passionate about technology, I've been studying programming on my own for over a year and it is very easy for me to learn new things!",
    },
    sectionsTitle: {
      aboutMe: "ABOUT ME",
      knowledge: "KNOWLEDGE",
      projects: "STUDY PROJECTS",
      challenges: "COMMUNITIES CHALLENGES",
      contact: "CONTACT"
    }
  },
};
