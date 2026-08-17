export interface HolidayDestination {
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  image: string;
}

export const holidayDestinations: HolidayDestination[] = [
  {
    slug: "hunza-skardu",
    name: "Hunza & Skardu",
    tagline: "Pakistan's northern valleys, lakes and mountain passes",
    duration: "5–7 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmS2SfYpmBub6ZQss19D5TASymuu7Z1haPR3fNfZ2Cw&s=10",
  },
  {
    slug: "swat-naran-kaghan",
    name: "Swat, Naran & Kaghan",
    tagline: "Green valleys, waterfalls and alpine lakes",
    duration: "4–6 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XJEZeIX4u4Djdwo2vmN8s20QcF3M-tQE9VVMuNmS_uPPUsOjxjy32lY&s=10",
  },
  {
    slug: "dubai",
    name: "Dubai",
    tagline: "City breaks, desert safaris and family holidays",
    duration: "4–6 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfI1SonfJutkw2BvKgqnOerrLE_V2Vv-ihnx44Y0U4yg&s=10",
  },
  {
    slug: "turkey",
    name: "Turkey",
    tagline: "Istanbul, Cappadocia and the Turkish coast",
    duration: "6–8 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9X3WvxAUL5-AJWLgs9I_ADmBDgs39CSwV4LRdFzySV5Ivx6i22AoZN62V&s=10",
  },
  {
    slug: "thailand",
    name: "Thailand",
    tagline: "Beaches, islands and tropical getaways",
    duration: "5–7 Days",
    image: "https://t4.ftcdn.net/jpg/06/87/82/37/360_F_687823713_3jLveciRbXqsA9olbDQGR4THs1D0T3VF.jpg",
  },
];
