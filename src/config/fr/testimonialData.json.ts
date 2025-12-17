import { type TestimonialItem } from "../types/configDataTypes";

// Import testimonial images
import BowTiedFocus from "@images/testimonials/BowTiedFocus.jpg";
import TravisB from "@images/testimonials/travis-b.png";
import Connor from "@images/testimonials/connor.webp";
import AniketP from "@images/testimonials/aniket_p.jpg";
import DavidG from "@images/testimonials/david-g-davedev.png";
import Damiano from "@images/testimonials/damiano.jpg";

export const testimonialData: TestimonialItem[] = [
  {
    avatar: BowTiedFocus,
    name: "BowTiedFocus",
    title: "Founder @ EasyTyper",
    testimonial:
      "This made my site launch so smooth. I was ready to go in days instead of weeks. Would highly recommend.",
  },
  {
    avatar: TravisB,
    name: "Travis",
    title: "Founder @ Coding in Public",
    testimonial:
      "Matt is the real deal. He's a great builder and helped me launch my blog.",
  },
  {
    avatar: Connor,
    name: "Connor",
    title: "Founder @ Crayo",
    testimonial:
      "Our product scales infinitely with Astro. It's perfect for content sites.",
  },
  {
    avatar: AniketP,
    name: "Aniket P.",
    title: "Founder @ IndiePitcher",
    testimonial:
      "Working with Astro has been a game changer for our workflow. Quick and efficient.",
  },
  {
    avatar: DavidG,
    name: "David G.",
    title: "Developer @ DaveDev",
    testimonial:
      "The themes are clean, well-documented, and easy to customize. Exactly what I needed.",
  },
  {
    avatar: Damiano,
    name: "Damiano",
    title: "Founder @ Shipixen",
    testimonial:
      "The quality of these themes is outstanding. Saved us countless hours of development.",
  },
];

export default testimonialData;

