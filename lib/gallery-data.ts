export interface GalleryImage {
  id: string;
  src: string;
  category: "Makkah" | "Madinah" | "Umrah Moments";
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8Xm1nZ8k_eLm9pI3roPTnAclkzzqezhysoF1Jn319dEFZxiss4iamYAw&s=10", category: "Makkah", alt: "Kaaba at Masjid al-Haram, Makkah" },
  { id: "g2", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSj661XSMM6HwelkpAJveOIfwkA1L3kzmdDEfzbhB3Q7D3ZZ5XQqFagGQh&s=10", category: "Makkah", alt: "Masjid al-Haram, Makkah" },
  { id: "g3", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UUh3IPVDrN5pWD6S8jeAuEdYfCMltWS01Ad3IClFA9PjU8FSyhSy9s4&s=10", category: "Makkah", alt: "Pilgrims at the Grand Mosque, Makkah" },
  { id: "g4", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRYA-dAJ9tUoiTYEFtJhO2QWg-LMSEfgoKCu2Ft3H_JcNT2f7Pc74kts&s=10", category: "Madinah", alt: "Masjid Nabawi, Madinah" },
  { id: "g5", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAV5d_52HYVGnRveBWQtRo6wcJdCUOnQd7QuMNqgw9SOhbCYqa8IuHndA&s=10", category: "Madinah", alt: "Green dome of the Prophet's Mosque, Madinah" },
  { id: "g6", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4fOMDz6aqkOu5c2vldBhUg-WFoZFEL6eq9gEo0PjDAbV054sYTdtVTd4&s=10", category: "Madinah", alt: "Masjid Nabawi courtyard, Madinah" },
  { id: "g7", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeChnM0akXcPp1O4WNNxf6djadq74zKSacxAuwvELKyg&s=10", category: "Umrah Moments", alt: "Pilgrims performing Umrah" },
  { id: "g8", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmlucaSmEDpsrUzusYIekIxMi4PRKAuwZAMZMqmNCGvw&s=10", category: "Umrah Moments", alt: "Pilgrims in ihram performing Tawaf" },
  { id: "g9", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9Lynj2kT67P5R5t-rwMZaSUtzo3Uhzibb9dQfPhTkw&s=10", category: "Umrah Moments", alt: "Pilgrims performing Umrah rituals" },
  { id: "g10", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9lKk7oi6LGRlOqW2ZqmtEB6LCmFex0z5I6eLMnCxXA&s=10", category: "Umrah Moments", alt: "Pilgrims gathered near the holy sites" },
  { id: "g11", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZxwAiKRMfj3z-ITfIfqEHF34vHxP6kHVAG4S0yIRRw&s=10", category: "Umrah Moments", alt: "Pilgrims capturing an Umrah moment" },
];
