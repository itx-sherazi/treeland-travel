export interface Package {
  slug: string;
  type: "umrah" | "hajj";
  name: string;
  duration: string;
  hotelRating: number;
  transport: string;
  price: string;
  priceValue: number;
  month: string;
  image: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  hotels: { city: string; name: string; distance: string }[];
  flights: string;
  requirements: string[];
  category?: "government" | "private" | "vip";
}

export const umrahPackages: Package[] = [
  {
    slug: "umrah-economy-10-days",
    type: "umrah",
    name: "Economy Umrah Package",
    duration: "10 Days",
    hotelRating: 3,
    transport: "Shared AC Coach",
    price: "PKR 145,000",
    priceValue: 145000,
    month: "Available Year-Round",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1200&q=80",
    highlights: ["Return Flights", "3-Star Hotels", "Visa Processing", "Ziyarat Tour"],
    included: ["Return airfare", "Umrah visa", "3-star hotel (Makkah & Madinah)", "Shared transport", "Ziyarat tour"],
    notIncluded: ["Meals (except breakfast)", "Personal expenses", "Zamzam water excess baggage"],
    hotels: [
      { city: "Makkah", name: "Al Kiswah Towers", distance: "600m from Haram" },
      { city: "Madinah", name: "Dar Al Eiman", distance: "400m from Masjid Nabawi" },
    ],
    flights: "PIA / Saudia — direct from Lahore/Karachi/Islamabad",
    requirements: ["Valid passport (6+ months)", "Passport-size photos", "CNIC copy", "Vaccination certificate"],
  },
  {
    slug: "umrah-deluxe-14-days",
    type: "umrah",
    name: "Deluxe Umrah Package",
    duration: "14 Days",
    hotelRating: 4,
    transport: "Private AC Vehicle",
    price: "PKR 245,000",
    priceValue: 245000,
    month: "Available Year-Round",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1200&q=80",
    highlights: ["Return Flights", "4-Star Hotels", "Private Transport", "Full Ziyarat"],
    included: ["Return airfare", "Umrah visa", "4-star hotel (Makkah & Madinah)", "Private transport", "Full ziyarat package"],
    notIncluded: ["Meals (except breakfast)", "Personal expenses"],
    hotels: [
      { city: "Makkah", name: "Elaf Kinda Hotel", distance: "250m from Haram" },
      { city: "Madinah", name: "Anwar Al Madinah Mövenpick", distance: "50m from Masjid Nabawi" },
    ],
    flights: "Saudia — direct from Lahore/Karachi/Islamabad",
    requirements: ["Valid passport (6+ months)", "Passport-size photos", "CNIC copy", "Vaccination certificate"],
  },
  {
    slug: "umrah-vip-family-16-days",
    type: "umrah",
    name: "VIP Family Umrah Package",
    duration: "16 Days",
    hotelRating: 5,
    transport: "Private Luxury Vehicle",
    price: "PKR 385,000",
    priceValue: 385000,
    month: "Available Year-Round",
    image:
      "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=1200&q=80",
    highlights: ["Business Class Option", "5-Star Hotels", "Private Guide", "Full Board Meals"],
    included: ["Return airfare", "Umrah visa", "5-star hotel (Makkah & Madinah)", "Private luxury transport", "Full board meals", "Personal guide"],
    notIncluded: ["Personal expenses", "Shopping"],
    hotels: [
      { city: "Makkah", name: "Swissôtel Al Maqam", distance: "0m — Haram view" },
      { city: "Madinah", name: "The Oberoi Madina", distance: "0m from Masjid Nabawi" },
    ],
    flights: "Saudia — direct, with business class upgrade option",
    requirements: ["Valid passport (6+ months)", "Passport-size photos", "CNIC copy", "Vaccination certificate", "Family registration documents"],
  },
];

export const hajjPackages: Package[] = [
  {
    slug: "hajj-government-scheme",
    type: "hajj",
    name: "Government Hajj Scheme",
    duration: "35-40 Days",
    hotelRating: 3,
    transport: "Government Coordinated",
    price: "PKR 1,150,000",
    priceValue: 1150000,
    month: "Dhul Hijjah 1447H",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200&q=80",
    highlights: ["Govt. Quota", "Subsidized Rates", "Guided Support", "Group Travel"],
    included: ["Return airfare", "Hajj visa", "Accommodation (Aziziyah/Makkah/Madinah)", "Group transport", "Guide support"],
    notIncluded: ["Qurbani (optional add-on)", "Personal expenses"],
    hotels: [
      { city: "Makkah", name: "Government Allocated Building", distance: "1.5km from Haram" },
      { city: "Madinah", name: "Government Allocated Building", distance: "800m from Masjid Nabawi" },
    ],
    flights: "PIA — scheduled Hajj flight operation",
    requirements: ["Hajj balloting/quota confirmation", "Valid passport", "Medical fitness certificate", "CNIC copy"],
    category: "government",
  },
  {
    slug: "hajj-private-standard",
    type: "hajj",
    name: "Private Hajj Package — Standard",
    duration: "20 Days",
    hotelRating: 4,
    transport: "Private AC Coach",
    price: "PKR 1,650,000",
    priceValue: 1650000,
    month: "Dhul Hijjah 1447H",
    image:
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=1200&q=80",
    highlights: ["Shorter Duration", "4-Star Hotels", "Private Transport", "Dedicated Guide"],
    included: ["Return airfare", "Hajj visa", "4-star hotel (Makkah & Madinah)", "Private transport", "Full ziyarat", "Dedicated guide"],
    notIncluded: ["Qurbani (optional add-on)", "Personal expenses"],
    hotels: [
      { city: "Makkah", name: "Makkah Towers", distance: "900m from Haram" },
      { city: "Madinah", name: "Al Aqeeq Hotel", distance: "300m from Masjid Nabawi" },
    ],
    flights: "Saudia — direct Hajj operation flights",
    requirements: ["Valid passport (6+ months)", "Medical fitness certificate", "CNIC copy", "Vaccination certificate"],
    category: "private",
  },
  {
    slug: "hajj-vip-premium",
    type: "hajj",
    name: "VIP Premium Hajj Package",
    duration: "18 Days",
    hotelRating: 5,
    transport: "Private Luxury Vehicle",
    price: "PKR 2,450,000",
    priceValue: 2450000,
    month: "Dhul Hijjah 1447H",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&q=80",
    highlights: ["5-Star Hotels", "Mina VIP Tents", "Business Class Option", "Personal Guide"],
    included: ["Return airfare", "Hajj visa", "5-star hotel (Makkah & Madinah)", "VIP Mina/Arafat tents", "Private luxury transport", "Full board meals", "Personal guide"],
    notIncluded: ["Personal expenses", "Shopping"],
    hotels: [
      { city: "Makkah", name: "Fairmont Makkah Clock Tower", distance: "0m — Haram view" },
      { city: "Madinah", name: "The Oberoi Madina", distance: "0m from Masjid Nabawi" },
    ],
    flights: "Saudia — direct, with business class upgrade option",
    requirements: ["Valid passport (6+ months)", "Medical fitness certificate", "CNIC copy", "Vaccination certificate"],
    category: "vip",
  },
];

export const allPackages = [...umrahPackages, ...hajjPackages];

export function getPackageBySlug(slug: string) {
  return allPackages.find((pkg) => pkg.slug === slug);
}
