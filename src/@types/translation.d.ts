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
    contactSection: {
      name: string;
      phone: string;
      mail: string;
      msg: string;
    };
    sectionsTitle: {
      aboutMe: string;
      skills: string;
      projects: string;
      challenges: string;
      contact: string;
    };
    navigation: {
      home: string;
      about: string;
      skills: string;
      projects: string;
      contact: string;
    };
    components: {
      viewMore: string;
      submitButton: string;
    };
    footer: {
      madeWith: string;
      byMe: string;
    }
  }
}