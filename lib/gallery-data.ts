export interface GalleryImage {
  id: string;
  src: string;
  category: "Hajj" | "Umrah" | "Hotels" | "Transportation" | "Holy Places" | "Office";
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=900&q=80", category: "Holy Places", alt: "Kaaba at Masjid al-Haram" },
  { id: "g2", src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=900&q=80", category: "Holy Places", alt: "Masjid al-Haram courtyard" },
  { id: "g3", src: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=900&q=80", category: "Holy Places", alt: "Masjid Nabawi green dome" },
  { id: "g4", src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=900&q=80", category: "Hajj", alt: "Pilgrims performing Hajj" },
  { id: "g5", src: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&q=80", category: "Hajj", alt: "Hajj pilgrims gathering" },
  { id: "g6", src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=900&q=80", category: "Umrah", alt: "Umrah pilgrims in white ihram" },
  { id: "g7", src: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=900&q=80", category: "Umrah", alt: "Pilgrims walking towards Haram" },
  { id: "g8", src: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=900&q=80", category: "Hotels", alt: "Luxury hotel room interior" },
  { id: "g9", src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&q=80", category: "Hotels", alt: "Hotel lobby" },
  { id: "g10", src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80", category: "Hotels", alt: "Hotel exterior building" },
  { id: "g11", src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=80", category: "Transportation", alt: "Tour coach bus" },
  { id: "g12", src: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=900&q=80", category: "Transportation", alt: "Airport departure" },
  { id: "g13", src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80", category: "Transportation", alt: "Airplane on runway" },
  { id: "g14", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80", category: "Office", alt: "Travel agency office interior" },
  { id: "g15", src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80", category: "Office", alt: "Business team meeting" },
  { id: "g16", src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80", category: "Holy Places", alt: "Masjid al-Haram at night" },
  { id: "g17", src: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=900&q=80", category: "Umrah", alt: "Pilgrims performing Tawaf" },
  { id: "g18", src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80", category: "Hajj", alt: "Hajj tents at Mina" },
  { id: "g19", src: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=900&q=80", category: "Hotels", alt: "Hotel room with view" },
  { id: "g20", src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80", category: "Transportation", alt: "Airplane wing view" },
];
