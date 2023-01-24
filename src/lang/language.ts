interface ITranslation {
  [key: string]: {
    [key: string]: string;
  }
}

export const translation: ITranslation = {
  "pt_br": {
    helloWorld: "Olá Mundo, me chamo Matheus Andrade!",
    frontEnd: "Desenvolvedor Front-End focado em JavaScript",
  },
  "en": {
    helloWorld: "Hello World, I am Matheus Andrade!",
    frontEnd: "Front-End Developer focused on JavaScript",
  },
};
