type Travel = {
  img: string | null;
  date: string;
  title: string;
  desc: string | null;
  location: string;
  coments: string;
}[];

export const travelGuide: Travel = [
  {
    img: "/icons/bus.svg",
    date: "July, 15, 2021 - Tips and Tricks ",
    title:
      "A traveler’s guide to Penang, Malaysia - Where toEat, Drink, Sleep and Explore ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.",
    location: "Penang, Malaysia ",
    coments: "(52)",
  },

  {
    img: "/icons/danfo.svg",
    date: "July, 15, 2021 - Tips and Tricks ",
    title: "Have you read The Beach by Alex?",
    desc: null,
    location: "Georgia",
    coments: "(52)",
  },

  {
    img: "/icons/sea.svg",
    date: "July, 15, 2021 - Tips and Tricks ",
    title: "The writer actually live in Philippines",
    desc: null,
    location: "Georgia",
    coments: "(52)",
  },

  {
    img: null,
    date: "July, 15, 2021 - Tips and Tricks ",
    title: "Finding Love & home in Tbilisi, Georgia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.",
    location: "Penang, Malaysia ",
    coments: "(52)",
  },
];
