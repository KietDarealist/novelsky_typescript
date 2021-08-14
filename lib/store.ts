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
}

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
      },
      {
        Id: 2,
        Text: "Fanstatic",
      },
      {
        Id: 3,
        Text: "Romance",
      },
    ],
  },
  {
    Id: 1,
    Name: "Rebirth Of The Strongest Celestial ",
    Description:
      "Layns life was relative simple. Married to a princess, working as the top of the country...Everything would be greate if he never learned that his wife was actually cheating on him!\n Instead of gettings his revenge, he put up with the humilination. For three long years. Three long years... ",
    Thumbnail: Thumbnail2,
    Views: 1000,
    Chapter: 12,
    Author: "Elyon",
    Status: false,
    Genres: [
      {
        Id: 1,
        Text: "Drama",
      },
      {
        Id: 2,
        Text: "Fanstatic",
      },
      {
        Id: 3,
        Text: "Romance",
      },
    ],
  },
  {
    Id: 2,
    Name: "Unlimited Power - The Arcane Path",
    Description:
      "Layns life was relative simple. Married to a princess, working as the top of the country...Everything would be greate if he never learned that his wife was actually cheating on him!\n Instead of gettings his revenge, he put up with the humilination. For three long years. Three long years... ",
    Thumbnail: Thumbnail3,
    Views: 1000,
    Chapter: 12,
    Author: "Elyon",
    Status: false,
    Genres: [
      {
        Id: 1,
        Text: "Drama",
      },
      {
        Id: 2,
        Text: "Fanstatic",
      },
      {
        Id: 3,
        Text: "Romance",
      },
    ],
  },
  {
    Id: 3,
    Name: "Unlimited Power 02 - The Ranger's Domain",
    Description:
      "Layns life was relative simple. Married to a princess, working as the top of the country...Everything would be greate if he never learned that his wife was actually cheating on him!\n Instead of gettings his revenge, he put up with the humilination. For three long years. Three long years... ",
    Thumbnail: Thumbnail4,
    Views: 1000,
    Chapter: 12,
    Author: "Elyon",
    Status: false,
    Genres: [
      {
        Id: 1,
        Text: "Drama",
      },
      {
        Id: 2,
        Text: "Fanstatic",
      },
      {
        Id: 3,
        Text: "Romance",
      },
    ],
  },
  {
    Id: 4,
    Name: "Second World",
    Description:
      "Layns life was relative simple. Married to a princess, working as the top of the country...Everything would be greate if he never learned that his wife was actually cheating on him!\n Instead of gettings his revenge, he put up with the humilination. For three long years. Three long years... ",
    Thumbnail: Thumbnail5,
    Views: 1000,
    Chapter: 12,
    Author: "Elyon",
    Status: false,
    Genres: [
      {
        Id: 1,
        Text: "Drama",
      },
      {
        Id: 2,
        Text: "Fanstatic",
      },
      {
        Id: 3,
        Text: "Romance",
      },
    ],
  },
  {
    Id: 5,
    Name: "Genius Mage in a Cultivation World",
    Description:
      "Layns life was relative simple. Married to a princess, working as the top of the country...Everything would be greate if he never learned that his wife was actually cheating on him!\n Instead of gettings his revenge, he put up with the humilination. For three long years. Three long years... ",
    Thumbnail: Thumbnail1,
    Views: 1000,
    Chapter: 12,
    Author: "Elyon",
    Status: false,
    Genres: [
      {
        Id: 1,
        Text: "Drama",
      },
      {
        Id: 2,
        Text: "Fanstatic",
      },
      {
        Id: 3,
        Text: "Romance",
      },
    ],
  },
];
