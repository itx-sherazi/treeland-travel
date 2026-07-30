export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Hajj" | "Umrah" | "Visa" | "Payments" | "Flights" | "Hotels";
}

export const faqs: FaqItem[] = [
  // General
  { category: "General", question: "What services does Treeland Travel & Tours offer?", answer: "We offer Hajj packages, Umrah packages, visa assistance, flight booking, hotel reservations, ground transportation and Ziyarat tours." },
  { category: "General", question: "Is Treeland Travel a licensed agency?", answer: "Yes, we are a licensed Hajj and Umrah operator, registered with the relevant government authorities." },
  { category: "General", question: "Which cities do you operate from?", answer: "We serve pilgrims across Pakistan with departures available from Lahore, Karachi and Islamabad." },
  { category: "General", question: "How do I get started with booking?", answer: "Simply browse our Hajj or Umrah packages, choose one that fits your needs, and contact our team via WhatsApp, call, or the contact form." },
  { category: "General", question: "Do you offer group discounts?", answer: "Yes, we offer special rates for families and groups of 5 or more travelling together." },

  // Hajj
  { category: "Hajj", question: "What is the difference between Government and Private Hajj packages?", answer: "Government Hajj packages are coordinated through the official Hajj quota at subsidized rates, while Private Hajj packages offer shorter duration, better hotels and more flexibility at a higher cost." },
  { category: "Hajj", question: "When should I apply for Hajj?", answer: "Hajj applications typically open several months before Dhul Hijjah. We recommend registering as early as possible as government quota seats are limited." },
  { category: "Hajj", question: "What documents are required for Hajj?", answer: "A valid passport (6+ months validity), medical fitness certificate, CNIC copy, vaccination certificate, and passport-size photos." },
  { category: "Hajj", question: "Do you offer VIP Hajj packages?", answer: "Yes, our VIP Premium Hajj package includes 5-star hotels, private Mina/Arafat tents and a personal guide throughout the journey." },
  { category: "Hajj", question: "Can I perform Hajj on behalf of a deceased family member (Badal Hajj)?", answer: "Yes, we can arrange Badal Hajj — please contact our team for specific requirements and documentation." },

  // Umrah
  { category: "Umrah", question: "What is the best time to perform Umrah?", answer: "Umrah can be performed year-round. Ramadan is the most spiritually significant time but also the busiest and most expensive." },
  { category: "Umrah", question: "How long does an Umrah package usually last?", answer: "Our packages range from 10 to 16 days, depending on the package tier you choose." },
  { category: "Umrah", question: "Can children travel on Umrah packages?", answer: "Yes, children can be included in family Umrah packages. Please inform our team in advance for accurate pricing and visa processing." },
  { category: "Umrah", question: "Are meals included in the Umrah package?", answer: "Breakfast is included in all packages. Full board (all meals) is available in our VIP Family Umrah package." },
  { category: "Umrah", question: "Can I customize my Umrah package?", answer: "Yes, we offer customizable packages — contact our team to build a package around your preferred dates, hotel and budget." },

  // Visa
  { category: "Visa", question: "How long does visa processing take?", answer: "Umrah and Hajj visa processing typically takes 5-10 business days once all required documents are submitted." },
  { category: "Visa", question: "What if my visa application is rejected?", answer: "Visa rejections are rare when documents are complete and accurate. Our team assists in resolving any issues and reapplying where possible." },
  { category: "Visa", question: "Do you handle visas for tourist travel as well?", answer: "Our primary focus is Hajj/Umrah visas, but we also assist with general travel visa guidance — contact us for details." },

  // Payments
  { category: "Payments", question: "What payment methods do you accept?", answer: "We accept bank transfer, JazzCash, EasyPaisa and cash payments at our office." },
  { category: "Payments", question: "Do I need to pay the full amount upfront?", answer: "No, a partial advance payment secures your booking. The remaining balance is due before departure — ask our team for the exact schedule." },
  { category: "Payments", question: "Is my payment refundable if I cancel?", answer: "Refunds are subject to our Refund & Cancellation Policy, which varies based on how close to departure the cancellation occurs." },

  // Flights
  { category: "Flights", question: "Which airlines do you work with?", answer: "We primarily coordinate flights with PIA and Saudia, offering direct routes from major Pakistani cities to Jeddah/Madinah." },
  { category: "Flights", question: "Can I choose my own flight dates?", answer: "Yes, where available, we can accommodate specific flight date preferences — subject to seat availability." },

  // Hotels
  { category: "Hotels", question: "How close are the hotels to the Haramain?", answer: "Distance varies by package — our economy packages start around 400-600m, while VIP packages offer hotels with a direct Haram view." },
  { category: "Hotels", question: "Can I upgrade my hotel category after booking?", answer: "Yes, upgrades are possible subject to availability and an additional charge — contact our team to arrange this." },
];
