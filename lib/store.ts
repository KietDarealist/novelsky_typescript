//Import Image
import Thumbnail1 from "../images/Thumbnail1.png";
import Thumbnail2 from "../images/Thumbnail2.png";
import Thumbnail3 from "../images/Thumbnail3.png";
import Thumbnail4 from "../images/Thumbnail4.png";
import Thumbnail5 from "../images/Thumbnail5.png";
import Thumbnail from "../images/Thumbnail.png";

export interface Genre {
  Id: number;
  Text: string;
  Type: string;
}

export interface ChapterType {
  Id: number;
  Title: string;
}

export interface NovelType {
  Id: number;
  Name: string;
  Description: string;
  Thumbnail: StaticImageData;
  Views: number;
  Chapter: number;
  Author: string;
  Status: boolean;
  Genres: Genre[];
  Chapters: ChapterType[];
  Rate: number;
}

export const Categories: Genre[] = [
  {
    Id: 1,
    Text: "Action",
    Type: "Men",
  },
  {
    Id: 2,
    Text: "Fantasy",
    Type: "Men",
  },
  {
    Id: 3,
    Text: "Realistic",
    Type: "Men",
  },
  {
    Id: 4,
    Text: "Game",
    Type: "Men",
  },
  {
    Id: 5,
    Text: "History",
    Type: "Men",
  },
  {
    Id: 6,
    Text: "Romance",
    Type: "Men",
  },
  {
    Id: 7,
    Text: "Hornor",
    Type: "Men",
  },
  {
    Id: 8,
    Text: "Virtual",
    Type: "Men",
  },
  {
    Id: 9,
    Text: "Sport",
    Type: "Men",
  },
  {
    Id: 11,
    Text: "Romance",
    Type: "Women",
  },
];

export const Novels: NovelType[] = [
  {
    Id: 0,
    Name: "Genius Mage in a Cultivation World",
    Description:
      "Layns life was relative simple. Married to a princess, working as the top of the country...Everything would be greate if he never learned that his wife was actually cheating on him!\n Instead of gettings his revenge, he put up with the humilination. For three long years. Three long years... ",
    Thumbnail: Thumbnail,
    Views: 1000,
    Chapter: 12,
    Author: "Elyon",
    Status: false,
    Genres: [
      {
        Id: 1,
        Text: "Drama",
        Type: "Women",
      },
      {
        Id: 2,
        Text: "Fanstatic",
        Type: "Men",
      },
      {
        Id: 3,
        Text: "Romance",
        Type: "Women",
      },
    ],
    Chapters: [
      {
        Id: 1,
        Title: "System Activated, Fusion Initiated",
      },
      {
        Id: 2,
        Title: "There Are Another 90 Eggs Just Like This",
      },
      {
        Id: 3,
        Title: "A Bright Future",
      },
      {
        Id: 4,
        Title: "Learning Magic",
      },
      {
        Id: 5,
        Title: "Bronze-Tier Magic",
      },
      {
        Id: 6,
        Title: "The Eldest Son Return",
      },
      {
        Id: 7,
        Title: "Inviting a Wolf Into the House",
      },
      {
        Id: 8,
        Title: "Fusing A Hundred Eggs",
      },
      {
        Id: 9,
        Title: "Infernal Phoenix Egg",
      },
      {
        Id: 10,
        Title: "The Powerful Eight Child",
      },
      {
        Id: 11,
        Title: "System Activated, Fusion Initiated",
      },
      {
        Id: 12,
        Title: "System Activated, Fusion Initiated",
      },
      {
        Id: 13,
        Title: "System Activated, Fusion Initiated",
      },
      {
        Id: 14,
        Title: "System Activated, Fusion Initiated",
      },
      {
        Id: 15,
        Title: "System Activated, Fusion Initiated",
      },
      {
        Id: 16,
        Title: "System Activated, Fusion Initiated",
      },
    ],
    Rate: 4,
  },
  {
    Id: 1,
    Name: "Rebirth Of The Strongest Celestial ",
    Description: `Sihle is a poor villager who has nothing to their name. In order to save his home and sister. He and five of his friends must venture into the worlds most expansive VRMMORPG to strike a fortune in the game.  One week before launch...Sihle becomes a reincarnotor. Now how will he change his future...`,
    Thumbnail: Thumbnail2,
    Views: 1000,
    Chapter: 12,
    Author: "David KupoFild",
    Status: false,
    Genres: [
      {
        Id: 1,
        Text: "System",
        Type: "Men",
      },
      {
        Id: 2,
        Text: "Video Game",
        Type: "Men",
      },
      {
        Id: 3,
        Text: "Game",
        Type: "Men",
      },
      {
        Id: 4,
        Text: "Fantasy",
        Type: "Men",
      },
    ],
    Chapters: [
      {
        Id: 1,
        Title: "Prologue",
      },
      {
        Id: 2,
        Title: "Starting Again!",
      },
      {
        Id: 3,
        Title: "You're A WHAT",
      },
      {
        Id: 4,
        Title: "The whos, who",
      },
      {
        Id: 5,
        Title: "Thousand Styles Miles",
      },
      {
        Id: 6,
        Title: "Trial Tower Part One",
      },
      {
        Id: 7,
        Title: "Seven Luminaries",
      },
      {
        Id: 8,
        Title: "End of Prologue",
      },
      {
        Id: 9,
        Title: "Limits of Limited mode",
      },
      {
        Id: 10,
        Title: "Seperated",
      },
      {
        Id: 11,
        Title: "Shimmers of the past",
      },
      {
        Id: 12,
        Title: "An Aspects",
      },
      {
        Id: 13,
        Title: "Succesors are Op!",
      },
      {
        Id: 14,
        Title: "Levelling Up",
      },
      {
        Id: 15,
        Title: "The Real Monster",
      },
      {
        Id: 16,
        Title: "Nineth Immortal returns",
      },
      {
        Id: 17,
        Title: "An epic monster",
      },
      {
        Id: 18,
        Title: "Rainbow Serpent",
      },
      {
        Id: 19,
        Title: "Unparelled Genius",
      },
      {
        Id: 20,
        Title: "Unexpected Development",
      },
      {
        Id: 21,
        Title: "Pushing the evelop",
      },
      {
        Id: 22,
        Title: "A hardcore dungeon",
      },
      {
        Id: 23,
        Title: "Dugeons and their Secrets",
      },
      {
        Id: 24,
        Title: "Sovereign",
      },
      {
        Id: 25,
        Title: "Is the sky blue",
      },
      {
        Id: 26,
        Title: "Opposite Reaction",
      },
      {
        Id: 27,
        Title: "A rock",
      },
      {
        Id: 28,
        Title: "The first Style",
      },
      {
        Id: 29,
        Title: "Reunited",
      },
    ],
    Rate: 5,
  },
  {
    Id: 2,
    Name: "Unlimited Power - The Arcane Path",
    Description:
      "A college student was returning home after studying abroad for several years when the end of the world happened. A dragon appeared out of nowhere and attacked the plane he was in, thanks to an incredible amount of luck and his quick-thinking, he managed to survive the plane crash only to get stuck on a tropical island. A weird system took over the world and brought monsters to Earth. While nations collapsed and the world as a whole was being destroyed by ridiculous monsters, Leon was stuck in a godforsaken island with no chances of being rescued. What will happen to him? How will the world change while he is away? Will he even manage to return",
    Thumbnail: Thumbnail3,
    Views: 800,
    Chapter: 758,
    Author: "ExSoliderLv999",
    Status: false,
    Genres: [
      {
        Id: 1,
        Text: "Fantasy",
        Type: "Men",
      },
      {
        Id: 2,
        Text: "Space",
        Type: "Men",
      },
      {
        Id: 3,
        Text: "Action",
        Type: "Men",
      },
      {
        Id: 4,
        Text: "Adventure",
        Type: "Men",
      },
    ],
    Chapters: [
      {
        Id: 1,
        Title: "Prologue",
      },
      {
        Id: 2,
        Title: "Chapter 1",
      },
      {
        Id: 3,
        Title: "Chapter 2",
      },
      {
        Id: 4,
        Title: "Chapter 3",
      },
      {
        Id: 5,
        Title: "Chapter 4",
      },
      {
        Id: 6,
        Title: "Chapter 5",
      },
      {
        Id: 7,
        Title: "Chapter 6",
      },
      {
        Id: 8,
        Title: "Chapter 7",
      },
      {
        Id: 9,
        Title: "Chapter 8",
      },
      {
        Id: 10,
        Title: "Chapter 9",
      },
      {
        Id: 11,
        Title: "Chapter 10",
      },
      {
        Id: 12,
        Title: "Chapter 11",
      },
      {
        Id: 13,
        Title: "Chapter 12",
      },
      {
        Id: 14,
        Title: "Chapter 13",
      },
      {
        Id: 15,
        Title: "Chapter 14",
      },
      {
        Id: 16,
        Title: "Chapter 15",
      },
      {
        Id: 17,
        Title: "Chapter 16",
      },
      {
        Id: 18,
        Title: "Chapter 17",
      },
      {
        Id: 19,
        Title: "Chapter 18",
      },
      {
        Id: 20,
        Title: "Chapter 19",
      },
      {
        Id: 21,
        Title: "Chapter 20",
      },
      {
        Id: 22,
        Title: "Chapter 21",
      },
      {
        Id: 23,
        Title: "Chapter 22",
      },
      {
        Id: 24,
        Title: "Chapter 23",
      },
      {
        Id: 25,
        Title: "Chapter 24",
      },
      {
        Id: 26,
        Title: "Chapter 25",
      },
      {
        Id: 27,
        Title: "Chapter 26",
      },
      {
        Id: 28,
        Title: "Chapter 27",
      },
    ],
    Rate: 3,
  },
  {
    Id: 3,
    Name: "Unlimited Power 02 - The Ranger's Domain",
    Description:
      "After losing his parents in a car accident, Ryan immediately caught his fiancee cheating on him with his best friend. In just a few days, he lost everything he loved, so Ryan decided to buy a house in the mountains to process all those events. However, something happened before he could even enter his new home: the end of the world.Monsters began to appear out of nowhere, and dragons began to dominate the skies. ",
    Thumbnail: Thumbnail4,
    Views: 4239,
    Chapter: 20,
    Author: "ExSoliderLv99",
    Status: false,
    Genres: [
      {
        Id: 1,
        Text: "Fanstatic",
        Type: "Men",
      },
      {
        Id: 2,
        Text: "Adventure",
        Type: "Men",
      },
      {
        Id: 4,
        Text: "Action",
        Type: "Men",
      },
    ],
    Chapters: [
      {
        Id: 1,
        Title: "Prologue",
      },
      {
        Id: 2,
        Title: "A New Start",
      },
      {
        Id: 3,
        Title: "Slime's Power",
      },
      {
        Id: 4,
        Title: "Calm",
      },
      {
        Id: 5,
        Title: "Damage",
      },
      {
        Id: 6,
        Title: "Offensive Skill",
      },
      {
        Id: 7,
        Title: "Healing Factor",
      },
      {
        Id: 8,
        Title: "Dungeon Shop",
      },
      {
        Id: 9,
        Title: "Improve, Adapt, Overcome",
      },
      {
        Id: 10,
        Title: "Level up skills",
      },
      {
        Id: 11,
        Title: "Crash",
      },
      {
        Id: 12,
        Title: "Many tricks",
      },
      {
        Id: 13,
        Title: "Dugeon Boss",
      },
      {
        Id: 14,
        Title: "Price",
      },
      {
        Id: 15,
        Title: "Mediation",
      },
      {
        Id: 16,
        Title: "Dinosaurs",
      },
      {
        Id: 17,
        Title: "Dinosaurs",
      },
      {
        Id: 18,
        Title: "Progress",
      },
      {
        Id: 19,
        Title: "Almost",
      },
      {
        Id: 20,
        Title: "Boss Fight",
      },
    ],
    Rate: 4,
  },
  {
    Id: 4,
    Name: "Second World",
    Description:
      "He was about to join the beta test on the newest VR games, Second World. But an anomaly threw him into a world with familiar rules, a rule he usually only experienced in a game. Now he must use his past gaming experience in this new world.",
    Thumbnail: Thumbnail5,
    Views: 1639,
    Chapter: 24,
    Author: "UnrivalArcaner",
    Status: true,
    Genres: [
      {
        Id: 1,
        Text: "Video Game",
        Type: "Men",
      },
      {
        Id: 2,
        Text: "Sword",
        Type: "Men",
      },
      {
        Id: 3,
        Text: "Adventure",
        Type: "Men",
      },
    ],
    Chapters: [
      {
        Id: 1,
        Title: "Second World Beta Test",
      },
      {
        Id: 2,
        Title: "First combat",
      },
      {
        Id: 3,
        Title: "Second soul Remnant",
      },
      {
        Id: 4,
        Title: "Second class",
      },
      {
        Id: 5,
        Title: "Skill practice",
      },
      {
        Id: 6,
        Title: "Skeleton Thug",
      },
      {
        Id: 7,
        Title: "Second day",
      },
      {
        Id: 8,
        Title: "Another Player",
      },
      {
        Id: 9,
        Title: "First encouter with an Elite",
      },
      {
        Id: 10,
        Title: "King Strategy",
      },
      {
        Id: 11,
        Title: "Cat and Mouse throug the house",
      },
      {
        Id: 12,
        Title: "Simulateneous Level up!",
      },
      {
        Id: 13,
        Title: "Blade of Haste",
      },
      {
        Id: 14,
        Title: "Invisible Wall",
      },
      {
        Id: 15,
        Title: "Come to our Place",
      },
      {
        Id: 16,
        Title: "Ambush in the Night",
      },
      {
        Id: 17,
        Title: "Equiment Upgrade",
      },
      {
        Id: 18,
        Title: "Mad Grinding",
      },
      {
        Id: 19,
        Title: "Gonlin Packs",
      },
      {
        Id: 20,
        Title: "Return to Trigitech Building",
      },
      {
        Id: 21,
        Title: "Lizardman Boss Fight",
      },
      {
        Id: 22,
        Title: "Competing in Speed",
      },
      {
        Id: 23,
        Title: "The Block Puzzle",
      },
      {
        Id: 24,
        Title: "The Lady in White",
      },
    ],
    Rate: 5,
  },
  {
    Id: 5,
    Name: "Divine Emperor of Death",
    Description:
      "Tian Long, an orphan without much of a life in both his thirty year long life and lifespan!" +
      "\n" +
      "To him, a single opportunity was displayed to transmigrate into another world with his Death Book!What's this? Is this the body of a three year old? Davis? Is this my name from now on?Finding himself possessing a small child, he becomes inwardly conflicted before he faces the truth and his reality!Young Davis finds himself as the legal heir, the Crown Prince of the Loret Empire in the Grand Sea Continent, becoming a powerful cultivator in a short time...",
    Thumbnail: Thumbnail1,
    Views: 1574,
    Chapter: 14,
    Author: "Stardust_Breaker",
    Status: false,
    Genres: [
      {
        Id: 1,
        Text: "Harem",
        Type: "Women",
      },
      {
        Id: 2,
        Text: "Action",
        Type: "Men",
      },
      {
        Id: 3,
        Text: "R18",
        Type: "Both",
      },
    ],
    Chapters: [
      {
        Id: 1,
        Title: "Prologue",
      },
      {
        Id: 2,
        Title: "New World",
      },
      {
        Id: 3,
        Title: "A wakening",
      },
      {
        Id: 4,
        Title: "Return to the Imperia",
      },
      {
        Id: 5,
        Title: "Banquet",
      },
      {
        Id: 6,
        Title: "Acceptance",
      },
      {
        Id: 7,
        Title: "A Suprise",
      },
      {
        Id: 8,
        Title: "Loging",
      },
      {
        Id: 9,
        Title: "First Pricess",
      },
      {
        Id: 10,
        Title: "Culivation Techniques",
      },
      {
        Id: 11,
        Title: "Enlightment",
      },
      {
        Id: 12,
        Title: "Addition And Determination",
      },
      {
        Id: 13,
        Title: "Redemption Tower",
      },
      {
        Id: 14,
        Title: "Hatred",
      },
    ],
    Rate: 2,
  },
];
