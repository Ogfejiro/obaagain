interface Products {
  id: number;
  name: string;
  description: string;
  image: string;
  available: boolean;
}

export const products: Products[] = [
  {
    id: 1,
    name: "Street Solar Light",
    description: "Durable solar-powered street lighting for efficient urban illumination.",
    image: "/images/Group 2.svg",
    available: true,
  },
  {
    id: 2,
    name: "15kwh Lithium Battery",
    description: "High-capacity lithium battery for reliable solar energy storage.",
    image: "/images/image 2.svg",
    available: false,
  },
  {
    id: 3,
    name: "25kwh Lithium Battery",
    description: "Extended capacity lithium battery for larger solar systems.",
    image: "/images/image 3.svg",
    available: true,
  },
  {
    id: 4,
    name: "MPPT Solar Charge Controller",
    description: "Maximum Power Point Tracking controller for optimal solar charging efficiency.",
    image: "/images/image 4.svg",
    available: true,
  },
  {
    id: 5,
    name: "Solar Light and Controller",
    description: "Complete solar lighting kit with integrated smart controller.",
    image: "/images/image 5.svg",
    available: false,
  },
  {
    id: 6,
    name: "Monohalf-cut Panel",
    description: "High-efficiency half-cut monocrystalline solar panel for increased durability.",
    image: "/images/image 6.svg",
    available: true,
  },
  {
    id: 7,
    name: "Smart Door Lock",
    description: "Keyless smart door lock with solar-powered operation and remote access.",
    image: "/images/image 7.svg",
    available: true,
  },
  {
    id: 8,
    name: "Electric Fencing",
    description: "Solar-powered electric fencing system for property security.",
    image: "/images/image 8.svg",
    available: false,
  },
  {
    id: 9,
    name: "Automatic Gate Opener",
    description: "Solar-powered automatic gate opener with remote control access.",
    image: "/images/image 9.svg",
    available: true,
  },
  {
    id: 10,
    name: "Solar Fan",
    description: "Energy-efficient solar-powered ventilation fan for indoor cooling.",
    image: "/images/image 10.svg",
    available: true,
  },
  {
    id: 11,
    name: "Solar CCTV",
    description: "Wireless solar-powered security camera with 24/7 monitoring capability.",
    image: "/images/image 11.svg",
    available: false,
  },
];