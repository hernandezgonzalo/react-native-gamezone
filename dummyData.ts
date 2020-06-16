export const dummyData = [
  {
    key: "1",
    title: "The Day of the Tentacle",
    rating: 5,
    review:
      "Day of the Tentacle, also known as Maniac Mansion II: Day of the Tentacle, is a 1993 graphic adventure game developed and published by LucasArts. It is the sequel to the 1987 game Maniac Mansion. The plot follows Bernard Bernoulli and his friends Hoagie and Laverne as they attempt to stop the evil Purple Tentacle—a sentient, disembodied tentacle—from taking over the world. The player takes control of the trio and solves puzzles while using time travel to explore different periods of history."
  },
  {
    key: "2",
    title: "Indiana Jones and the Last Crusade: The Action Game",
    rating: 3,
    review:
      "Indiana Jones and the Last Crusade: The Action Game was published in 1989 by Lucasfilm Games, based on the film of the same name. The game was released for the ZX Spectrum, Amstrad CPC, Commodore 64, Atari ST, Amiga, IBM PC, MSX, Master System, NES, Game Boy, Sega Genesis and Game Gear."
  },
  {
    key: "3",
    title: "E.T. the Extra-Terrestrial",
    rating: 1,
    review:
      "E.T. the Extra-Terrestrial is a 1982 adventure video game developed and published by Atari, Inc. for the Atari 2600 video game console. It is based on the film of the same name, and was designed by Howard Scott Warshaw. The objective of the game is to guide the eponymous character through various screens to collect three pieces of an interplanetary telephone that will allow him to contact his home planet."
  }
];

export type reviewType = {
  key: string;
  title: string;
  review: string;
  rating: number;
};
